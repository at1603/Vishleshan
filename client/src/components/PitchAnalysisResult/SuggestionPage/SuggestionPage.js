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
                    <Paper>
                        <Typography style={{ width: '100%', marginTop: '4rem', textAlign: 'center', justifyContent: 'center', fontSize: 69, fontWeight: 'bolder' }}>Language</Typography>
                        <Typography style={{ width: '100%', marginTop: '4rem', textAlign: 'left', justifyContent: 'center', fontSize: 32, fontWeight: 'bold' }}>Pace</Typography>
                        <Typography variant="body1">Your Pace is optimal, which is between the range of 150 WPM - 200 WPM. You don't need further correction.</Typography>
                        <Typography variant="h3">Overall Emotion</Typography>
                        <Typography>Overall Emotion of the video is <strong>neutral</strong>. You need to be more excited while answering or querying the interviwer.</Typography>
                        <Typography variant="h3">Words Suggestions</Typography>
                        <Typography variant="body">You can use following words to improve your interview effictiveness.</Typography>
                        <ul>
                            <li><Typography>excited - thrilled</Typography></li>
                            <li><Typography>researched - analyzed</Typography></li>
                            <li><Typography>looking - glancing</Typography></li>
                        </ul>
                    </Paper>
                </div>            </>
        </Grow>
    )
}

export default SuggestionPage
