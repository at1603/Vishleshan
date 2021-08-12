import React, { useState, useEffect } from 'react'

import { Grid, Typography, Paper, Chip } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import headlineTheme from '../../fonts/FontThemes';

import useStyles from './styles';

const SentimentAnalysis = () => {
    const analysisData = JSON.parse(localStorage.getItem('pitchAnalysisData'));
    const classes = useStyles();
    console.log(analysisData)

    const getSpeaker = (name) => {
        if (name === 'Speaker 1') return 'Interviewer';
        if (name === 'Speaker 2') return 'You'
    }
    const getEmotionLabel = (emotion, idx) => {
        if (analysisData.extraAnalysis.emotion[idx].emotion[emotion] < 0.5) return 'Passive 🙂'
        if (emotion === 'Angry') return `${emotion} 😠`
        if (emotion === 'Bored') return `${emotion} 🙁`
        if (emotion === 'Sad') return `${emotion} 😐`
        if (emotion === 'Happy') return `${emotion} 😃` 
        if (emotion === 'Fear') return `${emotion} 😨`
        if (emotion === 'Excited') return `${emotion} 🤩`
    }
    const getIntentLabel = (intent) => {
        if (intent === 'query') return 'Query 🔍';
        if (intent === 'news') return 'News 🌏'
        if (intent === 'spam') return 'Instruction 👨‍🏫 '
        if (intent === 'marketing') return 'Marketing 📈'
        if (intent === 'feedback') return 'Feedback 🙋'
    }
    const getProfaneLabel = (profane) => {
        if (profane === 'abusive') return 'Abusive 😡'
        if (profane === 'hate_speech') return 'Hate Speech 🤬'
        if (profane === 'neither') return 'Non-Abusive 👍'
    }
    const getSarcasmLabel = (input) => {
        if (input === 'Non-Sarcastic') return `${input}`
        if (input === 'Sarcastic') return `${input}`

    }
    
    return (
        <>
        <Paper  className={classes.languageWrapper}>
            <Paper style={{padding: '2rem', margin: '2rem auto', borderRadius: '25px', boxShadow: 'rgba(0, 0, 0, 0.5) 1px 1px 9px 5px'}}>
                <ThemeProvider theme={headlineTheme}>
                    <Typography style={{display: 'block', width: '100%', textAlign: 'left', fontWeight: 'bold', fontSize: 40 }}>Messages</Typography>
                </ThemeProvider>
                <ol style={{fontWeight: 'bold', fontSize: '24px'}}>
                    {analysisData.messages.messages.length > 0 ? analysisData.messages.messages.map(function(message, index){
                        console.log(JSON.stringify(message), message.conversationId, message.profane)
                        return (
                            <li key={ index } style={{padding: '20px 0'}}>
                                <span style={{display: 'inline-flex', flexWrap:'wrap'}}>
                                    <Typography style={{fontWeight: 'bold'}} className={classes.liItems}>{getSpeaker(message.from.name)}: &nbsp;  </Typography>
                                    <Typography className={classes.liItems}>{message.text}</Typography>
                                    <span style={{display: 'block'}}>
                                        <Chip style={{backgroundColor: 'orange', marginLeft: '1rem', fontSize: '18px'}} label={getEmotionLabel(message.emotion, index)} color="primary"/>
                                        <Chip style={{backgroundColor: 'green', marginLeft: '1rem', fontSize: '18px'}} label={getIntentLabel(message.intent)} color="primary"/>
                                        <Chip style={{marginLeft: '1rem', fontSize: '18px'}} label={getProfaneLabel(message.profane)} color="primary"/>
                                        <Chip style={{backgroundColor: 'dodgerblue', marginLeft: '1rem', fontSize: '18px'}} label={getSarcasmLabel(message.sarcasm)} color="primary"/>
                                    </span>
                                </span> 
                            </li> );
                    }) : <Typography>No Data Found</Typography> }
                </ol>
            </Paper>
        </Paper>
        </>
    )
}

export default SentimentAnalysis
