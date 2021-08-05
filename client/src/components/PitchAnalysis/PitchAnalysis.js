import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { sendVideoData } from '../../actions/pitchAnalysis'
import { Typography, TextField, Button, Grid, Paper } from '@material-ui/core';
import useStyles from './styles'


const PitchAnalysis = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const [formData, setFormData] = useState({url: ""})
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(sendVideoData(formData))
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <>
        <Grid container component="main" className={classes.root}>
            <Grid item xs={4} className={classes.leftGrid}>
                <div className={classes.paper}>
                    <form onSubmit={handleSubmit} className={classes.form}>
                        <TextField className={classes.input} name='videoTitle'value={formData.videoTitle} onChange={handleChange} variant="outlined" required fullWidth label='Video Title' />
                        <TextField className={classes.input} name='url'value={formData.url} onChange={handleChange} variant="outlined" required fullWidth label='URL' />
                        <Button style={{marginLeft: '0.5rem'}} variant='contained' color='primary' size='large' type='submit' className={classes.submit} fullWidth>Submit</Button>
                    </form>
                </div>
            </Grid>
            <Grid item xs={8} className={classes.rightGrid}>
                <Typography component="h1" variant="h5" style={{textAlign: 'center'}}>
                    Pitch Analysis
                </Typography>
                <div className={classes.text}>
                    Hello, In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                </div>
            </Grid>
        </Grid>
        </>
    )
}

export default PitchAnalysis;