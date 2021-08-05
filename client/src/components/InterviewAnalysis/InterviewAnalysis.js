import React, { useState } from 'react'
import { TextField, Button, Typography, Paper, Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { joinZoomCall, stopAnalysis } from '../../actions/InterviewAnalysis/interviewAnalysis'
import { useHistory } from 'react-router-dom';

import useStyles from './styles';



const InterviewAnalysis = () => {
    let message = ""

    const [formData, setFormData] = useState({ url: '' })
    const [stopForm, setstopForm] = useState({ connectionId: "" })

    const dispatch = useDispatch()
    const connectionId = useSelector(state => state.interviewAnalysis.conversationData.connectionId)
    const history = useHistory();
    const classes = useStyles();

    message = useSelector(state => state.interviewAnalysis.connection.message)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(joinZoomCall(formData))
    }

    const handleStopSubmit = (e) => {
        e.preventDefault()
        dispatch(stopAnalysis({ connectionId }, history))
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
                            <TextField className={classes.input} name='meetingTitle'value={formData.meetingTitle} onChange={handleChange} variant="outlined" required fullWidth label='Meeting Title' />
                            <TextField className={classes.input} name='url'value={formData.url} onChange={handleChange} variant="outlined" required fullWidth label='URL' />
                            <Button style={{marginLeft: '0.5rem'}} variant='contained' color='primary' size='large' type='submit' className={classes.submit} fullWidth>Submit</Button>
                        </form>
                    </div>
                </Grid>
                <Grid item xs={8} className={classes.rightGrid}>
                    <Typography component="h1" variant="h5" style={{textAlign: 'center'}}>
                        Interview Analysis
                    </Typography>
                    <div className={classes.text}>
                        Hello, In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default InterviewAnalysis;