import React from 'react'

import { Grid, Typography, Paper } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import headlineTheme from '../../fonts/FontThemes';

import useStyles from './styles';

const SentimentAnalysis = () => {
    const classes = useStyles();

    return (
        <>
        <Paper  className={classes.languageWrapper}>
            <Paper>
                <ThemeProvider theme={headlineTheme}>
                    <Typography style={{display: 'block', width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize: 40 }}>Sentiment Analysis</Typography>
                </ThemeProvider>
            </Paper>
        </Paper>
        </>
    )
}

export default SentimentAnalysis
