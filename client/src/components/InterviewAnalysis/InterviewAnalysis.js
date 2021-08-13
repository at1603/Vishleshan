import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper, Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { joinZoomCall, stopAnalysis } from '../../actions/InterviewAnalysis/interviewAnalysis'
import { useHistory } from 'react-router-dom';

import useStyles from './styles';
import { ThemeProvider } from '@material-ui/core/styles';
import headlineTheme from '../fonts/FontThemes';

import { w3cwebsocket as W3CWebSocket } from "websocket";


// let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const InterviewAnalysis = () => {
    let message = ""








    const [formData, setFormData] = useState({ meetingTitle: '', url: '' })
    const dispatch = useDispatch()
    const history = useHistory();
    const classes = useStyles();


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(joinZoomCall(formData, history))



        // ws.onclose = () => {
        //     console.log("gadbadd")
        //     // dispatch(stopAnalysis(connectionData.connectionId))
        // }




    }



    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }


    return (
        <>
            <Grid container component="main" className={classes.root}>
                <Grid item xs={4} className={classes.leftGrid}>
                    <div className={classes.paper}>
                        <form onSubmit={handleSubmit} className={classes.form}>
                            <TextField className={classes.input} name='meetingTitle' value={formData.meetingTitle} onChange={handleChange} variant="outlined" required fullWidth label='Meeting Title' />
                            <TextField className={classes.input} name='url' value={formData.url} onChange={handleChange} variant="outlined" required fullWidth label='URL' />
                            <Button style={{ marginLeft: '0.5rem' }} variant='contained' color='primary' size='large' type='submit' className={classes.submit} fullWidth>Submit</Button>
                        </form>
                    </div>
                </Grid>
                <Grid item xs={8} className={classes.rightGrid}>
                    <ThemeProvider theme={headlineTheme}>
                        <Typography component="h1" variant="h5" style={{ textAlign: 'center', fontWeight: 'bold' }}>
                            Real-Time Analysis
                        </Typography>
                    </ThemeProvider>
                    <div className={classes.text}>
                        <Typography variant="h6">
                            Hello, In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default InterviewAnalysis;