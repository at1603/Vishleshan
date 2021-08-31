import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube'

import Grow from '@material-ui/core/Grow';

import { Grid, Typography, Paper, Chip, Button, TextField } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import headlineTheme from '../../fonts/FontThemes';

import useStyles from './styles';

const SentimentAnalysis = () => {
    const analysisData = JSON.parse(localStorage.getItem('pitchAnalysisData'));
    const [open, setOpen] = React.useState(true);

    const classes = useStyles();
    console.log(analysisData)

    const [eventYt, seteventYt] = useState()

    const conversationTimeStamp = analysisData.conversationData.startTime

    const getSpeaker = (name) => {
        if (name === 'Speaker 1') return 'Interviewer';
        if (name === 'Speaker 2') return 'You'
    }
    const getEmotionLabel = (emotion, idx) => {
        if (analysisData.extraAnalysis.emotion[0].emotion[idx][emotion] < 0.5) return 'Passive 😶'
        if (emotion === 'Angry') return `${emotion} 😠`
        if (emotion === 'Bored') return `${emotion} 😴`
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

    const opts = {
        height: '315',
        width: '560',
        playerVars: {
            autoplay: 1,
        },
    };

    const convertTimeStamp = (timeStamp) => {
        var myDate = new Date(timeStamp);
        console.log(myDate, "kj")
        console.log(myDate.getTime())
        return myDate.getTime() / 1000;
    }

    const _onReady = (event) => {
        seteventYt(event)
        event.target.playVideo();

    }
    const seekTo = (timeStamp) => {
        timeStamp = (convertTimeStamp(timeStamp) - convertTimeStamp(conversationTimeStamp)).toFixed(2)
        eventYt.target.seekTo(timeStamp, true)
    }


    return (
        <Grow in={open} >
            <div>
                <Paper style={{ backgroundColor: '#e8e8e8', padding: '2rem', width: '60%', margin: '2rem auto', borderRadius: '25px', boxShadow: 'rgba(0, 0, 0, 0.5) 1px 1px 9px 5px', display: 'flex', justifyContent: 'center' }}>
                    <YouTube videoId="1mgrHcwcLgU" opts={opts} onReady={_onReady} />
                </Paper>

                <Paper style={{ backgroundColor: '#e8e8e8', padding: '2rem', width: '60%', margin: '2rem auto', borderRadius: '25px', boxShadow: 'rgba(0, 0, 0, 0.5) 1px 1px 9px 5px' }}>
                    <ThemeProvider theme={headlineTheme}>
                        <Typography style={{ display: 'block', width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize: 40 }}>Messages</Typography>
                    </ThemeProvider>
                    <ol style={{ fontWeight: 'bold', fontSize: '24px' }}>
                        {analysisData.messages.messages.length > 0 ? analysisData.messages.messages.map(function (message, index) {
                            return (
                                <li key={index} style={{ padding: '20px 0' }}>
                                    <span style={{ display: 'inline-flex', flexWrap: 'wrap' }}>
                                        <Typography style={{ fontWeight: 'bold' }} className={classes.liItems}>{getSpeaker(message.from.name)}: &nbsp;  </Typography>
                                        <Typography className={classes.liItems}>{message.text}</Typography>
                                        <span style={{ display: 'block' }}>
                                            <Chip style={{ backgroundColor: 'orange', marginLeft: '1rem', fontSize: '18px' }} label={getEmotionLabel(message.emotion, index)} color="primary" />
                                            <Chip style={{ backgroundColor: 'green', marginLeft: '1rem', fontSize: '18px' }} label={getIntentLabel(message.intent)} color="primary" />
                                            <Chip style={{ marginLeft: '1rem', fontSize: '18px' }} label={getProfaneLabel(message.profane)} color="primary" />
                                            <Chip style={{ backgroundColor: 'dodgerblue', marginLeft: '1rem', fontSize: '18px' }} label={getSarcasmLabel(message.sarcasm)} color="primary" />
                                            <Button onClick={() => seekTo(message.startTime)}>Seek</Button>
                                        </span>
                                    </span>
                                </li>);
                        }) : <Typography>No Data Found</Typography>}
                    </ol>
                </Paper>
            </div>
        </Grow>
    )
}

export default SentimentAnalysis
