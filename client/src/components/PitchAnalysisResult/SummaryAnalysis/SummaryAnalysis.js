import React, { useState, useEffect } from 'react';

import GaugeChart from 'react-advanced-gauge-chart';
import { ResponsivePie } from '@nivo/pie'
import { Grid, Typography } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import headlineTheme from '../../fonts/FontThemes';
// import styled from '@emotion/styled';
// import { HappyAlt } from '@emotion-icons/boxicons-solid/HappyAlt';

import './styles.css';


// const Happy = styled(HappyAlt)`
//   color: red;
// `

const SummaryAnalysis = () => {
    
    const [meterValue, setMeterValue] = useState(0)
    const [averageEmotion, setAverageEmotion] = useState('Happy')

    const analysisData = JSON.parse(localStorage.getItem('pitchAnalysisData'))
    
    useEffect(() => {
        let maxEmotionValue = 0
        let averageEmotionObject = { Bored: 0, Angry: 0, Sad: 0, Fear: 0, Excited: 0, Happy: 0 }
        analysisData.extraAnalysis.emotion.forEach((v, i) => {
            averageEmotionObject.Bored += v.emotion.Bored;
            averageEmotionObject.Angry += v.emotion.Angry;
            averageEmotionObject.Sad += v.emotion.Sad;
            averageEmotionObject.Fear += v.emotion.Fear;
            averageEmotionObject.Excited += v.emotion.Excited;
            averageEmotionObject.Happy += v.emotion.Happy;
            
            maxEmotionValue = Math.max(averageEmotionObject.Bored, averageEmotionObject.Angry, averageEmotionObject.Sad, averageEmotionObject.Fear, averageEmotionObject.Excited
                , averageEmotionObject.Happy)
            });
            setAverageEmotion(Object.keys(averageEmotionObject).find(key => averageEmotionObject[key] === maxEmotionValue))
            setMeterValue(((analysisData.analytics.members[0].pace.wpm)/150)*0.5)
        }, [meterValue, analysisData.analytics.members, analysisData.extraAnalysis.emotion])
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
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
        legends={[]}
    />

    const gaugeChart = <GaugeChart style={{marginTop: '2rem', width:'100%'}} id="gauge-chart2" 
        nrOfLevels={3}
        percent={meterValue/1}
        colors={["#f4e361", "#1eea21", "#ea1e1e"]}
        formatTextValue = {value => Math.ceil((value*300)/100) +' wpm'}
        textColor = "#000000"
        marginInPercent = {0.06}
    />
    return (
        <>
            <ThemeProvider theme={headlineTheme}>
                <Typography style={{ display: 'block', width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize: 40 }}>Summary</Typography>
            </ThemeProvider>
            <Grid container item xs={6} sm={6} md={4} spacing={4} className="card" style={{ padding: '1rem' }}>
                <>
                    <Typography style={{width: '100%', marginTop: '4rem', textAlign: 'center', justifyContent: 'center', fontSize:69, fontWeight: 'bolder'}}>{analysisData.analytics.members.length}</Typography>
                    <Typography style={{marginTop: '2rem', width: '100%', textAlign: 'center', justifyContent: 'center', fontSize: 24}}>Total Members</Typography>
                </>
            </Grid>
            <Grid container item xs={6} sm={6} md={4} spacing={4} className="card">
                <>
                    {SimplePie}
                    <Typography style={{position: 'relative',top: '-55px', marginBottom: '2rem', width: '100%', textAlign: 'center', justifyContent: 'center', fontSize: 24}}>Total Conversation Time ( in % )</Typography>
                </>
            </Grid>
            <Grid container item xs={6} sm={6} md={4} spacing={4} className="card" >
                <>
                    {gaugeChart}
                    <Typography style={{position: 'relative', top: '-6px', width: '100%', textAlign: 'center', justifyContent: 'center', fontSize: 24}}>Pace</Typography>
                </>
            </Grid>
            <Grid container item xs={6} sm={6} md={4} spacing={4} className="card" style={{padding: '1rem'}}>
                <>
                    <Typography style={{width: '100%', marginTop: '4rem', textAlign: 'center', justifyContent: 'center', fontSize:69, fontWeight: 'bolder'}}>{analysisData.questions.questions.length}</Typography>
                    <Typography style={{width: '100%', textAlign: 'center', justifyContent: 'center', fontSize: 24}}>Total Questions Asked</Typography>
                </>
            </Grid>
            <Grid container item xs={6} sm={6} md={4} spacing={4} className="card">
                <>
                        {SimplePie}
                        <Typography style={{position: 'relative',top: '-69px', marginBottom: '2rem', width: '100%', textAlign: 'center', justifyContent: 'center', fontSize: 24}}>Total Conversation Time</Typography>
                </>
            </Grid>
            <Grid container item xs={6} sm={6} md={4} spacing={4} className="card" >
                <>
                    
                    <Typography style={{position: 'relative',top: '-69px', marginBottom: '2rem', width: '100%', textAlign: 'center', justifyContent: 'center', fontSize: 24}}>{averageEmotion}</Typography>
                </>
            </Grid>
        </>
        
    )
}

export default SummaryAnalysis
