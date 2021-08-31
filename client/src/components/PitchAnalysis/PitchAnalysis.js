import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

import { sendvideodata } from '../../actions/pitchAnalysis'
import { Typography, TextField, Button, Grid, Paper, CircularProgress, Fab } from '@material-ui/core';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

import useStyles from './styles';

import { ThemeProvider } from '@material-ui/core/styles';
import headlineTheme from '../fonts/FontThemes';


const PitchAnalysis = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    const [formData, setFormData] = useState({ meetingName: "", fileName: "video.mp4", file: null, url: '' })
    const [isSubmit, setIsSubmit] = useState(false)
    const [selectedFileName, setSelectedFileName] = useState("");

    const [isResponse, setIsResponse] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData();
        data.append('meetingName', formData.meetingName)
        console.log(formData.meetingName, "iiiiiiiiiiiiiiiii")
        data.append('fileName', formData.fileName)
        data.append('file', formData.file);
        data.append('url', formData.url)
        dispatch(sendvideodata(data, history))
        setIsSubmit(true)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleUploadClick = (event) => {
        var newFile = (event.target.files[0] === undefined) ? null : event.target.files[0];
        var newFileName = (event.target.files[0] === undefined) ? "" : event.target.files[0].name;
        setFormData({ ...formData, file: newFile, fileName: newFileName });
        setSelectedFileName(newFileName);
    };

    const spinner = <div style={{ alignContent: 'center', textAlign: 'center', justifyContent: 'center', marginTop: '8rem' }}>
        <CircularProgress />
        <Typography variant="body1" style={{ display: 'block', textAlign: 'center', marginTop: '2rem' }}>Analyzing Video!</Typography>
    </div>
    return (
        <>
            <Grid container component="main" className={classes.root}>
                <Grid item xs={4} className={classes.leftGrid}>
                    {isSubmit ? spinner :
                        <div className={classes.paper}>
                            <form onSubmit={handleSubmit} className={classes.form}>
                                <TextField className={classes.input} name='meetingName' value={formData.meetingName} onChange={handleChange} variant="outlined" required fullWidth label='Meeting Name' />
                                <TextField className={classes.input} name='url' value={formData.url} onChange={handleChange} variant="outlined" fullWidth label='URL' />
                                <Typography style={{ marginLeft: '13rem', fontSize: '30px' }} className={classes.submit} fullWidth>OR</Typography>

                                <>
                                    <input
                                        type="file"
                                        accept="video/*"
                                        style={{ display: 'none' }}
                                        id="contained-button-file"
                                        onChange={handleUploadClick}

                                    />
                                    <label htmlFor="contained-button-file" className={classes.input}>
                                        <Button variant="contained" color="primary" component="span">
                                            Upload
                                        </Button>

                                    </label>
                                    <input type='hidden' name="fileName" value={formData.fileName} onChange={handleChange} ></input>
                                    {selectedFileName === "" ? <Typography component="span" className={classes.input}>No File Chosen</Typography> :
                                        <Typography component="span" className={classes.input}>{selectedFileName}</Typography>}
                                </>
                                {formData.url && formData.fileName !== "video.mp4" ? (<Button style={{ marginLeft: '0.5rem' }} variant='contained' color='primary' size='large' className={classes.submit} fullWidth disabled> Submit </Button>) : (<Button style={{ marginLeft: '0.5rem' }} variant='contained' color='primary' size='large' type='submit' className={classes.submit} fullWidth>Submit</Button>)}

                            </form>
                        </div>
                    }
                </Grid>
                <Grid item xs={8} className={classes.rightGrid}>
                    <ThemeProvider theme={headlineTheme}>
                        <Typography component="h1" variant="h5" style={{ textAlign: 'center', fontWeight: 'bold' }}>
                            Pitch Analysis
                        </Typography>
                    </ThemeProvider>
                    <div className={classes.text}>
                        <Typography variant="h6">
                            This service can be used to analyze a pre recorded meeting event to provide additional insights including sentiment, emotions and many more traits. Please enter video url(YouTube) OR upload a local video to get insights.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default PitchAnalysis;