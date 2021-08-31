import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Grow from '@material-ui/core/Grow';

import GaugeChart from 'react-advanced-gauge-chart';
import { ResponsivePie } from '@nivo/pie'
import { Grid, Typography, Paper } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import headlineTheme from '../../fonts/FontThemes';
// import styled from '@emotion/styled';
// import { HappyAlt } from '@emotion-icons/boxicons-solid/HappyAlt';

import './styles.css';
import useStyles from './styles';


// const Happy = styled(HappyAlt)`
//   color: red;
// `

const SummaryAnalysis = () => {

    const [meterValue, setMeterValue] = useState(0)
    const [averageEmotion, setAverageEmotion] = useState('Happy')
    const [open, setOpen] = React.useState(true);

    const analysisData = JSON.parse(localStorage.getItem('pitchAnalysisData'))

    useEffect(() => {
        let maxEmotionValue = 0
        let averageEmotionObject = { Bored: 0, Angry: 0, Sad: 0, Fear: 0, Excited: 0, Happy: 0 }
        analysisData.extraAnalysis.emotion[0].emotion.forEach((v, i) => {
            console.log(v);
            averageEmotionObject.Angry += v.Angry;
            averageEmotionObject.Sad += v.Sad;
            averageEmotionObject.Fear += v.Fear;
            averageEmotionObject.Excited += v.Excited;
            averageEmotionObject.Bored += v.Bored;
            averageEmotionObject.Happy += v.Happy;

            maxEmotionValue = Math.max(averageEmotionObject.Bored, averageEmotionObject.Angry, averageEmotionObject.Sad, averageEmotionObject.Fear, averageEmotionObject.Excited
                , averageEmotionObject.Happy)
        });
        setAverageEmotion(Object.keys(averageEmotionObject).find(key => averageEmotionObject[key] === maxEmotionValue))
        setMeterValue(((analysisData.analytics.members[0].pace.wpm) / 150) * 0.5)
    }, [meterValue, analysisData.analytics.members, analysisData.extraAnalysis.emotion[0].emotion])
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
        colors={{ scheme: 'category10' }}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={[]}
    />

    const gaugeChart = <GaugeChart style={{ marginTop: '2rem', width: '100%' }} id="gauge-chart2"
        nrOfLevels={3}
        percent={meterValue / 1}
        colors={["#f4e361", "#1eea21", "#ea1e1e"]}
        formatTextValue={value => Math.ceil((value * 300) / 100) + ' wpm'}
        textColor="#000000"
        marginInPercent={0.06}
    />
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <Grow in={open} >
            <>
                <Grid item xs={12} md={8} lg={4}>
                    <Paper className={fixedHeightPaper}>
                        <Typography style={{ width: '100%', marginTop: '4rem', textAlign: 'center', justifyContent: 'center', fontSize: 69, fontWeight: 'bolder' }}>{analysisData.analytics.members.length}</Typography>
                        <Typography style={{ marginTop: '2rem', width: '100%', textAlign: 'center', justifyContent: 'center', fontSize: 24 }}>Total Members</Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4} lg={4}>
                    <Paper className={fixedHeightPaper}>
                        {SimplePie}
                        <Typography style={{ position: 'relative', top: '-55px', marginBottom: '2rem', width: '100%', textAlign: 'center', justifyContent: 'center', fontSize: 24 }}>Total Conversation Time ( in % )</Typography>

                    </Paper>
                </Grid>
                <Grid item xs={12} md={8} lg={4}>
                    <Paper className={fixedHeightPaper}>
                        {gaugeChart}
                        <Typography style={{ position: 'relative', top: '-6px', width: '100%', textAlign: 'center', justifyContent: 'center', fontSize: 24 }}>Pace</Typography>

                    </Paper>
                </Grid>
                
                <Grid item xs={12} md={8} lg={4}>
                    <Paper className={fixedHeightPaper}>
                        {SimplePie}
                        <Typography style={{ position: 'relative', top: '-69px', marginBottom: '2rem', width: '100%', textAlign: 'center', justifyContent: 'center', fontSize: 24 }}>Total Conversation Time</Typography>

                    </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <Paper className={fixedHeightPaper}>
                        <Typography style={{ width: '100%', marginTop: '4rem', textAlign: 'center', justifyContent: 'center', fontSize: 69, fontWeight: 'bolder' }}>{analysisData.questions.questions.length}</Typography>
                        <Typography style={{ width: '100%', textAlign: 'center', justifyContent: 'center', fontSize: 24 }}>Total Questions Asked</Typography>

                    </Paper>
                </Grid>

                <Grid item xs={12} md={4} lg={4} style={{ marginBottom: '6rem' }}>
                    <Paper className={fixedHeightPaper}>
                        <span role="img" aria-label="sheep" style={{ fontSize: '104px', textAlign: 'center' }}>
                            {averageEmotion === 'Happy' && '🙂'}
                            {averageEmotion === 'Sad' && '😐'}
                            {averageEmotion === 'Angry' && '😠'}
                            {averageEmotion === 'Bored' && '🙁'}
                            {averageEmotion === 'Fear' && '😨'}
                            {averageEmotion === 'Excited' && '😄'}
                        </span>
                        <Typography style={{ position: 'relative', top: '2.5rem', marginBottom: '2rem', width: '100%', textAlign: 'center', justifyContent: 'center', fontSize: 24 }}>Overall Sentiment</Typography>

                    </Paper>
                </Grid>
            </>
        </Grow>

    )
}

export default SummaryAnalysis
