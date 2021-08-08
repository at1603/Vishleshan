import React from 'react'

import { Grid, Typography } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import headlineTheme from '../../fonts/FontThemes';

import './styles.css';

const SummaryAnalysis = () => {
    return (
        <>
            <ThemeProvider theme={headlineTheme}>
                <Typography style={{display: 'block', width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize: 40 }}>Summary</Typography>
            </ThemeProvider>
            <Grid container item xs={6} sm={6} md={4} spacing={4} className="card">
                sldfhsfhsjfhksfhksf
            </Grid>
            <Grid container item xs={6} sm={6} md={4} spacing={4} className="card">
                sldfhsfhsjfhksfhksf
            </Grid>
            <Grid container item xs={6} sm={6} md={4} spacing={4} className="card" >
                sldfhsfhsjfhksfhksf
            </Grid>
        </>
    )
}

export default SummaryAnalysis
