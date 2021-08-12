import React, { useState, useEffect } from 'react'

import { Grid, Typography, Paper, Chip } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import headlineTheme from '../../fonts/FontThemes';

import useStyles from './styles';

const SentimentAnalysis = () => {
    const analysisData = JSON.parse(localStorage.getItem('pitchAnalysisData'));
    const classes = useStyles();

    useEffect(() => {
        // const messageData = analysisData.messages.messages
        // let i;
        // for(i = 0; i<messageData.length; i++){
        //     let tempEmotion = analysisData.extraAnalysis.emotion[i].emotion
        //     let tempIntent = analysisData.extraAnalysis.intent[i].intent
        //     let tempProfane = analysisData.extraAnalysis.profaneWord[i]
        //     let tempSarcasm = analysisData.extraAnalysis.sarcasm[i]
        //     messageData[i].emotion = Object.keys(tempEmotion).reduce((a, b) => tempEmotion[a] > tempEmotion[b] ? a : b)
        //     messageData[i].intent = Object.keys(tempIntent).reduce((a, b) => tempIntent[a] > tempIntent[b] ? a : b)
        //     messageData[i].profane = Object.keys(tempProfane).reduce((a, b) => tempProfane[a] > tempProfane[b] ? a : b)
        //     messageData[i].sarcasm = Object.keys(tempSarcasm).reduce((a, b) => tempSarcasm[a] > tempSarcasm[b] ? a : b)
        // }
    }, [analysisData.messages.messages, analysisData.extraAnalysis.emotion, analysisData.extraAnalysis.intent, analysisData.extraAnalysis.profaneWord, analysisData.extraAnalysis.sarcasm])
    console.log(analysisData)

    const getEmotionLabel = (emotion) => {
        if (emotion === 'Angry') return 'Emotion: 😠'
        if (emotion === 'Bored') return 'Emotion: 🙁'
        if (emotion === 'Sad') return 'Emotion: 😐'
        if (emotion === 'Happy') return 'Emotion: 🙂' 
        if (emotion === 'Fear') return 'Emotion: 😨'
        if (emotion === 'Excited') return 'Emotion: 😄'
    }
    
    return (
        <>
        <Paper  className={classes.languageWrapper}>
            <Paper style={{padding: '2rem', margin: '2rem auto', borderRadius: '25px', boxShadow: 'rgba(0, 0, 0, 0.5) 1px 1px 9px 5px'}}>
                <ThemeProvider theme={headlineTheme}>
                    <Typography style={{display: 'block', width: '100%', textAlign: 'left', fontWeight: 'bold', fontSize: 40 }}>Messages</Typography>
                </ThemeProvider>
                <ul>
                    {analysisData.messages.messages.length > 0 ? analysisData.messages.messages.map(function(message, index){
                        console.log(JSON.stringify(message), message.conversationId, message.profane)
                        return <li key={ index }><span style={{display: 'inline-flex'}}><Typography className={classes.liItems}>{message.text}</Typography><Chip style={{marginLeft: '1rem', fontSize: '18px'}} label={getEmotionLabel(message.emotion)} color="primary"/></span> </li>;
                    }) : <Typography>No Data Found</Typography> }
                </ul>
            </Paper>
        </Paper>
        </>
    )
}

export default SentimentAnalysis
