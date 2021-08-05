import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos';

import "aos/dist/aos.css";
import { Box, Button, Typography, Paper, Grid } from '@material-ui/core';
import useStyles from './styles';

const Home = () => {
    const classes = useStyles();

    useEffect(() => {
        AOS.init({
          duration : 1500
        });
      }, []);

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={6}>
                    <Grid item>
                        <Paper className={classes.paper} data-aos="fade-right">
                            <Button className={classes.button} component={Link} to="/dashboard" fullWidth variant="contained" color="default" align="center">Dashboard</Button>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.paper} data-aos="fade-zoom-in">
                            <Button className={classes.button} component={Link} to="/pitchAnalysis" fullWidth variant="contained" color="default" align="center">Pitch Analysis</Button>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.paper} textalign="center" data-aos="fade-left">
                            <Button className={classes.button} component={Link} to="/interviewAnalysis" fullWidth variant="contained" align="center">Interview Analysis  </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home