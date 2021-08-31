import React, { useState, useEffect } from 'react'
import ReactWordcloud from 'react-wordcloud';
import Grow from '@material-ui/core/Grow';

import { Paper, Grid, Typography, Chip } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import headlineTheme from '../../fonts/FontThemes';

import useStyles from './styles';


const LanguageAnalysis = () => {
    const classes = useStyles();
    const analysisData = JSON.parse(localStorage.getItem('pitchAnalysisData'));
    const [open, setOpen] = React.useState(true);

    const [Words, setWords] = useState({});

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
        let resultantString = "";
        analysisData.messages.messages.map(function (msg) {
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
        setWords(countWords(resultantString));

    }, [setWords]);
    console.log(analysisData)


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
    const wordCloud = <ReactWordcloud
        options={options}
        size={size}
        words={Words}
        style={{ margin: 'auto' }}
    />

    const getTopicSentiment = (sentiment) => {
        if (sentiment === "neutral") return "Overall Opinion: 🙂";
        else if (sentiment === "positive") return "Overall Opinion: 😄";
        else return "Overall Opinion: 🙁";
    }

    return (
        <Grow in={open}>
            <div style={{ margin: 'auto' }}>
                <Paper style={{ backgroundColor: '#e8e8e8', padding: '2rem', width: '90%', margin: '2rem auto', borderRadius: '25px', boxShadow: 'rgba(0, 0, 0, 0.5) 1px 1px 9px 5px' }}>
                    <ThemeProvider theme={headlineTheme}>
                        <Typography style={{ display: 'block', width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize: 40 }}>Frequent Words  </Typography>

                        <div>{wordCloud}</div>
                    </ThemeProvider>
                </Paper>
                <Paper style={{ backgroundColor: '#e8e8e8', padding: '2rem', width: '90%', margin: '2rem auto', borderRadius: '25px', boxShadow: 'rgba(0, 0, 0, 0.5) 1px 1px 9px 5px' }}>
                    <ThemeProvider theme={headlineTheme}>
                        <Typography style={{ display: 'block', width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize: 40 }}>Topics Discussed</Typography>
                    </ThemeProvider>
                    <ul>
                        {analysisData.topics.topics.length > 0 ? analysisData.topics.topics.map(function (topic, index) {
                            return <li key={index}><span style={{ display: 'inline-flex' }}><Typography className={classes.liItems}>{topic.text}</Typography><Chip style={{ marginLeft: '1rem', fontSize: '18px' }} label={getTopicSentiment(topic.sentiment.suggested)} color="primary" /></span> </li>;
                        }) : <Typography>No Data Found</Typography>}
                    </ul>
                </Paper>
                <Paper style={{ backgroundColor: '#e8e8e8', padding: '2rem', width: '90%', margin: '2rem auto', borderRadius: '25px', boxShadow: 'rgba(0, 0, 0, 0.5) 1px 1px 9px 5px' }}>
                    <ThemeProvider theme={headlineTheme}>
                        <Typography style={{ display: 'block', width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize: 40 }}>Questions Asked:</Typography>
                    </ThemeProvider>
                    <ul>
                        {analysisData.questions.questions.length > 0 ? analysisData.questions.questions.map(function (question, index) {
                            return <li key={index}><Typography className={classes.liItems}>{question.text}</Typography></li>;
                        }) : <Typography>No Data Found</Typography>}
                    </ul>
                </Paper>
                <Paper style={{ backgroundColor: '#e8e8e8', padding: '2rem', width: '90%', margin: '2rem auto', borderRadius: '25px', boxShadow: 'rgba(0, 0, 0, 0.5) 1px 1px 9px 5px' }}>
                    <ThemeProvider theme={headlineTheme}>
                        <Typography style={{ display: 'block', width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize: 40 }}>Action Items:</Typography>
                    </ThemeProvider>
                    <ul>
                        {analysisData.actionItems.actionItems.length > 0 ? analysisData.actionItems.actionItems.map(function (actionItem, index) {
                            return <li key={index}><Typography className={classes.liItems}>{actionItem.text}</Typography></li>
                        }) : <Typography>No Data Found</Typography>}
                    </ul>
                </Paper>
                <Paper style={{ backgroundColor: '#e8e8e8', padding: '2rem', width: '90%', margin: '2rem auto', borderRadius: '25px', boxShadow: 'rgba(0, 0, 0, 0.5) 1px 1px 9px 5px' }}>
                    <ThemeProvider theme={headlineTheme}>
                        <Typography style={{ display: 'block', width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize: 40 }}>Follow Ups</Typography>
                    </ThemeProvider>
                    <ul>
                        {analysisData.followUps.followUps.length > 0 ? analysisData.followUps.followUps.map(function (followUp, index) {
                            return <li key={index}><Typography className={classes.liItems}>{followUp.text}</Typography></li>;
                        }) : <Typography>No Data Found</Typography>}
                    </ul>
                </Paper>
            </div>
        </Grow>
    )
}

export default LanguageAnalysis
