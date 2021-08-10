import React from 'react';
import { useSelector } from 'react-redux';

import { ResponsivePie } from '@nivo/pie'
import { Grid, Typography } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import headlineTheme from '../../fonts/FontThemes';

import './styles.css';

// <Typography style={{textAlign: 'center', justifyContent: 'center', fontSize: 40, fontWeight: 'bold'}}>{analysisData.analytics.members.length}</Typography>
// <Typography style={{textAlign: 'center', justifyContent: 'center', fontSize: 24}}>Total Members</Typography>


const SummaryAnalysis = () => {

    const analysisData = JSON.parse(localStorage.getItem('pitchAnalysisData'))
    console.log(analysisData)

    const data = [
        {
            "id": "Total Silence",
            "label": "Total Silence",
            "value": analysisData.analytics.metrics[0].percent,
            "color": "hsl(36, 70%, 50%)"
        },
        {
            "id": "Total Talk Time",
            "label": "Total Talk Time",
            "value": analysisData.analytics.metrics[1].percent,
            "color": "hsl(292, 70%, 50%)"
        },
        {
            "id": "Total Overlap",
            "label": "Total Overlap",
            "value": analysisData.analytics.metrics[2].percent,
            "color": "hsl(186, 70%, 50%)"
        },
    ]

    const SimplePie = <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={[]}
    />

    return (
        <>
            <ThemeProvider theme={headlineTheme}>
                <Typography style={{ display: 'block', width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize: 40 }}>Summary</Typography>
            </ThemeProvider>
            <Grid container item xs={6} sm={6} md={4} spacing={4} className="card" style={{ padding: '1rem' }}>
                <>
                    <Typography style={{ width: '100%', marginTop: '2rem', textAlign: 'center', justifyContent: 'center', fontSize: 40, fontWeight: 'bold' }}>{analysisData.analytics.members.length}</Typography>
                    <Typography style={{ width: '100%', textAlign: 'center', justifyContent: 'center', fontSize: 24 }}>Total Members</Typography>
                </>
            </Grid>
            <Grid container item xs={6} sm={6} md={4} spacing={4} className="card">
                <>
                    {SimplePie}
                    <Typography style={{ position: 'absolute', marginBottom: '2rem', width: '100%', textAlign: 'center', justifyContent: 'center', fontSize: 24 }}>Total Conversation Time</Typography>
                </>
            </Grid>
            <Grid container item xs={6} sm={6} md={4} spacing={4} className="card" >
                sldfhsfhsjfhksfhksf
            </Grid>
        </>
    )
}

export default SummaryAnalysis
