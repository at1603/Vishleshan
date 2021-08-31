import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useStyles from './styles';

import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, TableHead } from '@material-ui/core'

import { ResponsivePie } from '@nivo/pie';
import { ResponsiveLine } from '@nivo/line'
import GaugeChart from 'react-advanced-gauge-chart';
import ReactWordcloud from 'react-wordcloud';


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.info.light,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 30,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


export default function Comparison() {
    const comparisonData = JSON.parse(localStorage.getItem('comparisonData'))
    const userData = JSON.parse(localStorage.getItem('profile'))
    const classes = useStyles();

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const [meter1Value, setMeter1Value] = useState(0)
    const [meter2Value, setMeter2Value] = useState(0)
    const [averageEmotion1, setAverageEmotion1] = useState('Happy');
    const [averageEmotion2, setAverageEmotion2] = useState('Happy');
    const [Words1, set1Words] = useState({});
    const [Words2, set2Words] = useState({});
    const [lineData1, setLineData1] = useState([])
    const [lineData2, setLineData2] = useState([])

    const countWords = (resultantString) => {
        const convertToObject = resultantString.split(" ").map((i, k) => {
            return {

                text: i,
                value: resultantString.split(" ").filter(j => j === i).length,
            }
        });
        return Array.from(new Set(convertToObject.map(JSON.stringify))).map(JSON.parse)
    };

    useEffect(() => {
        let msgs = comparisonData.performance1.conversationIdData[0].analysisData.messages.messages;
        let updatedDataArray = []
        for (let i = 0; i < msgs.length; i++) {
            if (msgs[i].emotion === "Excited") updatedDataArray.push({ "x": i + 1, "y": "Excited" });
            else if (msgs[i].emotion === "Happy") updatedDataArray.push({ "x": i + 1, "y": "Happy" });
            else if (msgs[i].emotion === "Sad") updatedDataArray.push({ "x": i + 1, "y": "Sad" });
            else if (msgs[i].emotion === "Bored") updatedDataArray.push({ "x": i + 1, "y": "Bored" });
            else if (msgs[i].emotion === "Angry") updatedDataArray.push({ "x": i + 1, "y": "Fear" });
            else if (msgs[i].emotion === "Fear") updatedDataArray.push({ "x": i + 1, "y": "Angry" });
        };
        setLineData1([...lineData1, updatedDataArray])

        msgs = comparisonData.performance2.conversationIdData[0].analysisData.messages.messages;
        updatedDataArray = []
        for (let i = 0; i < msgs.length; i++) {
            if (msgs[i].emotion === "Excited") updatedDataArray.push({ "x": i + 1, "y": "Excited" });
            else if (msgs[i].emotion === "Happy") updatedDataArray.push({ "x": i + 1, "y": "Happy" });
            else if (msgs[i].emotion === "Sad") updatedDataArray.push({ "x": i + 1, "y": "Sad" });
            else if (msgs[i].emotion === "Bored") updatedDataArray.push({ "x": i + 1, "y": "Bored" });
            else if (msgs[i].emotion === "Angry") updatedDataArray.push({ "x": i + 1, "y": "Fear" });
            else if (msgs[i].emotion === "Fear") updatedDataArray.push({ "x": i + 1, "y": "Angry" });
        };

        setLineData2([...lineData2, updatedDataArray])
    }, [])

    useEffect(() => {
        let maxEmotionValue = 0
        let averageEmotionObject = { Bored: 0, Angry: 0, Sad: 0, Fear: 0, Excited: 0, Happy: 0 }
        comparisonData.performance1.conversationIdData[0].analysisData.extraAnalysis.emotion[0].emotion.forEach((v, i) => {
            averageEmotionObject.Bored += v.Bored;
            averageEmotionObject.Angry += v.Angry;
            averageEmotionObject.Sad += v.Sad;
            averageEmotionObject.Fear += v.Fear;
            averageEmotionObject.Excited += v.Excited;
            averageEmotionObject.Happy += v.Happy;

            maxEmotionValue = Math.max(averageEmotionObject.Bored, averageEmotionObject.Angry, averageEmotionObject.Sad, averageEmotionObject.Fear, averageEmotionObject.Excited
                , averageEmotionObject.Happy)
        });
        setAverageEmotion1(Object.keys(averageEmotionObject).find(key => averageEmotionObject[key] === maxEmotionValue))

        maxEmotionValue = 0
        averageEmotionObject = { Bored: 0, Angry: 0, Sad: 0, Fear: 0, Excited: 0, Happy: 0 }
        comparisonData.performance2.conversationIdData[0].analysisData.extraAnalysis.emotion[0].emotion.forEach((v, i) => {
            averageEmotionObject.Bored += v.Bored;
            averageEmotionObject.Angry += v.Angry;
            averageEmotionObject.Sad += v.Sad;
            averageEmotionObject.Fear += v.Fear;
            averageEmotionObject.Excited += v.Excited;
            averageEmotionObject.Happy += v.Happy;

            maxEmotionValue = Math.max(averageEmotionObject.Bored, averageEmotionObject.Angry, averageEmotionObject.Sad, averageEmotionObject.Fear, averageEmotionObject.Excited
                , averageEmotionObject.Happy)
        });
        setAverageEmotion2(Object.keys(averageEmotionObject).find(key => averageEmotionObject[key] === maxEmotionValue))

        setMeter1Value(((comparisonData.performance1.conversationIdData[0].analysisData.analytics.members[0].pace.wpm) / 150) * 0.5)
        setMeter2Value(((comparisonData.performance2.conversationIdData[0].analysisData.analytics.members[0].pace.wpm) / 150) * 0.5)

        let resultantString = "";
        comparisonData.performance1.conversationIdData[0].analysisData.messages.messages.map(function (msg) {
            resultantString += " " + msg.text
        });
        resultantString = resultantString.replace("to ", "");
        resultantString = resultantString.replace("am ", "");
        resultantString = resultantString.replace("are ", "");
        resultantString = resultantString.replace("is ", "");
        resultantString = resultantString.replace("the ", "");
        resultantString = resultantString.replace("were ", "");
        resultantString = resultantString.replace("was ", "");
        resultantString = resultantString.replace("a ", "");
        resultantString = resultantString.replace("has ", "");
        resultantString = resultantString.replace("can ", "");
        resultantString = resultantString.replace("could ", "");
        resultantString = resultantString.replace("do ", "");
        resultantString = resultantString.replace("you ", "");
        set1Words(countWords(resultantString));

        resultantString = "";
        comparisonData.performance2.conversationIdData[0].analysisData.messages.messages.map(function (msg) {
            resultantString += " " + msg.text
        });
        resultantString = resultantString.replace("to ", "");
        resultantString = resultantString.replace("am ", "");
        resultantString = resultantString.replace("are ", "");
        resultantString = resultantString.replace("is ", "");
        resultantString = resultantString.replace("the ", "");
        resultantString = resultantString.replace("were ", "");
        resultantString = resultantString.replace("was ", "");
        resultantString = resultantString.replace("a ", "");
        resultantString = resultantString.replace("has ", "");
        resultantString = resultantString.replace("can ", "");
        resultantString = resultantString.replace("could ", "");
        resultantString = resultantString.replace("do ", "");
        resultantString = resultantString.replace("you ", "");
        set2Words(countWords(resultantString));
    }, [meter1Value, meter2Value, averageEmotion1, averageEmotion2, set1Words, set2Words, setLineData1])


    const options = {
        colors: ["#1f77b4", "#ff7f0e", "#2ca02c"],
        // colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
        enableTooltip: true,
        deterministic: false,
        fontFamily: "impact",
        fontSizes: [30, 90],
        fontStyle: "normal",
        fontWeight: "normal",
        padding: 1,
        rotations: 1,
        rotationAngles: [0],
        scale: "sqrt",
        spiral: "archimedean",
        transitionDuration: 1000
    };
    const size = [600, 300];

    //WordCloud code
    const wordCloud1 = <ReactWordcloud
        options={options}
        size={size}
        words={Words1}
        style={{ margin: '0 auto' }}
    />
    const wordCloud2 = <ReactWordcloud
        options={options}
        size={size}
        words={Words2}
        style={{ margin: '0 auto' }}
    />

    const getAverageEmotionEmoji = (averageEmotion) => {
        if (averageEmotion === 'Happy') return '🙂'
        if (averageEmotion === 'Sad') return '😐'
        if (averageEmotion === 'Angry') return '😠'
        if (averageEmotion === 'Bored') return '🙁'
        if (averageEmotion === 'Fear') return '😨'
        if (averageEmotion === 'Excited') return '😄'
    }
    console.log(comparisonData, 'sfdhksf')
    const performance1data = [
        {
            "id": "Total Silence",
            "label": "Total Silence",
            "value": comparisonData.performance1.conversationIdData[0].analysisData.analytics.metrics[0].percent,
            "color": "hsl(36, 70%, 50%)"
        },
        {
            "id": "Total Talk Time",
            "label": "Total Talk Time",
            "value": comparisonData.performance1.conversationIdData[0].analysisData.analytics.metrics[1].percent,
            "color": "hsl(292, 70%, 50%)"
        },
        {
            "id": "Total Overlap",
            "label": "Total Overlap",
            "value": comparisonData.performance1.conversationIdData[0].analysisData.analytics.metrics[2].percent,
            "color": "hsl(186, 70%, 50%)"
        },
    ]

    const performance2data = [
        {
            "id": "Total Silence",
            "label": "Total Silence",
            "value": comparisonData.performance2.conversationIdData[0].analysisData.analytics.metrics[0].percent,
            "color": "hsl(36, 70%, 50%)"
        },
        {
            "id": "Total Talk Time",
            "label": "Total Talk Time",
            "value": comparisonData.performance2.conversationIdData[0].analysisData.analytics.metrics[1].percent,
            "color": "hsl(292, 70%, 50%)"
        },
        {
            "id": "Total Overlap",
            "label": "Total Overlap",
            "value": comparisonData.performance2.conversationIdData[0].analysisData.analytics.metrics[2].percent,
            "color": "hsl(186, 70%, 50%)"
        },
    ]

    const performance1Pie = <ResponsivePie
        data={performance1data}
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

    const performance2Pie = <ResponsivePie
        data={performance2data}
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

    const gauge1Chart = <GaugeChart style={{ margin: '2rem auto', width: '100%' }} id="gauge-chart1"
        nrOfLevels={3}
        percent={meter1Value}
        colors={["#f4e361", "#1eea21", "#ea1e1e"]}
        formatTextValue={value => Math.ceil((value * 300) / 100) + ' wpm'}
        textColor="#000000"
        marginInPercent={0.06}
    />
    const gauge2Chart = <GaugeChart style={{ margin: '2rem auto', width: '100%' }} id="gauge-chart2"
        nrOfLevels={3}
        percent={meter2Value}
        colors={["#f4e361", "#1eea21", "#ea1e1e"]}
        formatTextValue={value => Math.ceil((value * 300) / 100) + ' wpm'}
        textColor="#000000"
        marginInPercent={0.06}
    />

    //LineGraph Data and Code

    const finalData = [
        {
            "id": comparisonData.performance1.conversationIdData[0].meetingName,
            "color": "hsl(189, 70%, 50%)",
            "data": lineData1[0]
        },
        {
            "id": comparisonData.performance2.conversationIdData[0].meetingName,
            "color": "hsl(255, 70%, 50%)",
            "data": lineData2[0]
        }
    ]
    const isoToDate = (createdAt) => {
        var date = new Date(createdAt);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var dt = date.getDate();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }
        return (dt + '-' + month + '-' + year);

    }
    console.log(lineData1[0], lineData2[0])
    console.log(finalData, 'ApnaFinalData')
    const ComparisonLineGraph =
        <ResponsiveLine
            data={finalData}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'point', min: 'Angry', max: 'Excited', stacked: false, reverse: false }}
            curve="catmullRom"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Sentence Counter',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Emotion',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            colors={{ scheme: 'category10' }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={fixedHeightPaper}>
                                <Typography variant="h4" style={{ textAlign: 'center' }}>Emotion Per Sentence Graph</Typography>
                                <div style={{ height: '25rem', width: '99rem' }}>
                                    {ComparisonLineGraph}
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell align="center">{comparisonData.performance1.conversationIdData[0].meetingName}</StyledTableCell>
                                                <StyledTableCell align="center"></StyledTableCell>
                                                <StyledTableCell align="center">{comparisonData.performance2.conversationIdData[0].meetingName}</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <StyledTableRow>
                                                <StyledTableCell align="center">{comparisonData.performance1.conversationIdData[0].analysisData.analytics.members.length}</StyledTableCell>
                                                <StyledTableCell align="center">Members</StyledTableCell>
                                                <StyledTableCell align="center">{comparisonData.performance2.conversationIdData[0].analysisData.analytics.members.length}</StyledTableCell>
                                            </StyledTableRow>
                                            <StyledTableRow>
                                                <StyledTableCell align="center">{comparisonData.performance1.conversationIdData[0].analysisData.questions.questions.length}</StyledTableCell>
                                                <StyledTableCell align="center">Questions Asked</StyledTableCell>
                                                <StyledTableCell align="center">{comparisonData.performance2.conversationIdData[0].analysisData.questions.questions.length}</StyledTableCell>
                                            </StyledTableRow>
                                            <StyledTableRow>
                                                <StyledTableCell align="center"><div style={{ height: '20rem', width: '20rem', margin: 'auto' }}>{performance1Pie}</div></StyledTableCell>
                                                <StyledTableCell align="center">Conversation Ratio</StyledTableCell>
                                                <StyledTableCell align="center"><div style={{ height: '20rem', width: '20rem', margin: 'auto' }}>{performance2Pie}</div></StyledTableCell>
                                            </StyledTableRow>
                                            <StyledTableRow>
                                                <StyledTableCell align="center"><div style={{ height: 'fit-content', width: '15rem', margin: '3rem auto 0' }}>{gauge1Chart}</div></StyledTableCell>
                                                <StyledTableCell align="center">Pace of Speaker</StyledTableCell>
                                                <StyledTableCell align="center"><div style={{ height: 'fit-content', width: '15rem', margin: '3rem auto 0' }}>{gauge2Chart}</div></StyledTableCell>
                                            </StyledTableRow>
                                            <StyledTableRow>
                                                <StyledTableCell align="center"><div style={{ fontSize: '100px' }}>{getAverageEmotionEmoji(averageEmotion1)}</div></StyledTableCell>
                                                <StyledTableCell align="center">Overall Emotion</StyledTableCell>
                                                <StyledTableCell align="center"><div style={{ fontSize: '100px' }}>{getAverageEmotionEmoji(averageEmotion2)}</div></StyledTableCell>
                                            </StyledTableRow>
                                            <StyledTableRow>
                                                <StyledTableCell align="center">{wordCloud1}</StyledTableCell>
                                                <StyledTableCell align="center">Grammar</StyledTableCell>
                                                <StyledTableCell align="center">{wordCloud2}</StyledTableCell>
                                            </StyledTableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    );
}