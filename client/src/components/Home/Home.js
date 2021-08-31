import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos';

import "aos/dist/aos.css";
import { Button, Typography, Paper, Grid } from '@material-ui/core';
import useStyles from './styles';
import { ThemeProvider } from '@material-ui/core/styles';
import headlineTheme from '../fonts/FontThemes';

const Home = () => {
    const classes = useStyles();

    useEffect(() => {
        AOS.init({
            duration: 1500
        });
    }, []);

    return (
        <>
            <Grid container className={classes.root} spacing={2} style={{ backgroundImage: 'url(https://wallpaperaccess.com/full/2927403.jpg)', backgroundSize: 'contain' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={6}>
                        <Grid item>
                            <Paper className={classes.paper} data-aos="fade-right">
                                <Button className={classes.button} component={Link} to="/dashboard" fullWidth variant="contained" color="default" align="center"><ThemeProvider theme={headlineTheme}><Typography style={{ color: '#f4f4f4', textAlign: 'center', fontWeight: 'bold' }}>Dashboard</Typography></ThemeProvider></Button>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper} data-aos="fade-zoom-in">
                                <Button className={classes.button} component={Link} to="/pitchAnalysis" fullWidth variant="contained" color="default" align="center"><ThemeProvider theme={headlineTheme}><Typography style={{ color: '#f4f4f4', textAlign: 'center', fontWeight: 'bold' }}>Pitch Analysis</Typography></ThemeProvider></Button>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper} textalign="center" data-aos="fade-left">
                                <Button className={classes.button} component={Link} to="/interviewAnalysis" fullWidth variant="contained" align="center"><ThemeProvider theme={headlineTheme}><Typography style={{ color: '#f4f4f4', textAlign: 'center', fontWeight: 'bold' }}>Real-Time Analysis</Typography></ThemeProvider></Button>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Home