import React from 'react'
import { Link } from 'react-router-dom';

import { Button, Typography, Paper, Grid} from '@material-ui/core';
import useStyles from './styles';

const Home = () => {   
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={6}>
                    <Grid item>
                        <Paper className={classes.paper}>
                            <Button component={Link} to="/dashboard" variant="h3" align="center">Dashboard</Button>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.paper}>
                            <Button component={Link} to="/pitchAnalysis" variant="h3" align="center">Pitch Analysis</Button>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.paper} textAlign="center">
                            <Button component={Link} to="/interviewAnalysis" variant="h3">Interview Analysis  </Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
      </Grid>
    )
}

export default Home