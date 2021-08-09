import React from 'react'

import { Grid, Typography } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles';
import headlineTheme from '../../fonts/FontThemes';

const LanguageAnalysis = () => {
    return (
        <div>
            <ThemeProvider theme={headlineTheme}>
                <Typography style={{display: 'block', width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize: 40 }}>Language Analysis</Typography>
            </ThemeProvider>
        </div>
    )
}

export default LanguageAnalysis
