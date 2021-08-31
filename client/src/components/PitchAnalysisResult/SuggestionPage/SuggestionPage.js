import React, { useState } from 'react'

import { Grow, Paper, Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

const SuggestionPage = () => {
    const [open, setOpen] = useState(true);

    const classes = useStyles();

    return (
        <Grow in={open}>
            <>
                <div style={{ margin: 'auto' }}>
                    <Paper className={classes.reportWrapper}>
                        <Typography style={{ color: 'rgb(8,125,37)', width: '100%', marginTop: '4rem', textAlign: 'center', justifyContent: 'center', fontSize: 69, fontWeight: 'bolder' }}>Suggestions</Typography>
                        <Typography style={{ width: '100%', marginTop: '4rem', textAlign: 'left', justifyContent: 'center', fontSize: 32, fontWeight: 'bold' }}>Pace</Typography>
                        <Typography variant="body1" style={{width: '100%', textAlign: 'left', fontSize: 20 }}>Your Pace is <strong>optimal</strong>, which is between the range of <strong>150 WPM - 200 WPM</strong>. You don't need further correction.</Typography>
                        <Typography variant="h3" style={{ width: '100%', marginTop: '4rem', textAlign: 'left', justifyContent: 'center', fontSize: 32, fontWeight: 'bold' }}>Overall Emotion</Typography>
                        <Typography variant="body1" style={{width: '100%', textAlign: 'left', fontSize: 20 }}>Overall Emotion of the video is <strong>neutral</strong>. You need to be <strong>more excited</strong> while answering or querying the interviwer.</Typography>
                        <Typography variant="h3" style={{ width: '100%', marginTop: '4rem', textAlign: 'left', justifyContent: 'center', fontSize: 32, fontWeight: 'bold' }}>Words Suggestions</Typography>
                        <Typography variant="body1" style={{width: '100%', textAlign: 'left', fontSize: 20 }}>You can use following words to <strong>improve</strong> your interview effictiveness.</Typography>
                        <ul>
                            <li><Typography variant="body1" style={{width: '100%', textAlign: 'left', fontSize: 20 }}>excited - thrilled</Typography></li>
                            <li><Typography variant="body1" style={{width: '100%', textAlign: 'left', fontSize: 20 }}>researched - analyzed</Typography></li>
                            <li><Typography variant="body1" style={{width: '100%', textAlign: 'left', fontSize: 20 }}>looking - glancing</Typography></li>
                        </ul>
                    </Paper>
                </div>            
            </>
        </Grow>
    )
}

export default SuggestionPage
