import React from 'react'
import { Button, Grid, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';

import useStyles from './styles';
import { ThemeProvider } from '@material-ui/styles';
import headlineTheme from '../fonts/FontThemes';

const LandingPage = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.topCover}>
                <Grid container component="main">
                    <Grid item xs={5} className={classes.leftGrid}>
                        <ThemeProvider theme={headlineTheme}>
                            <Typography style={{ fontWeight: 'bold', fontSize: 50 }}>
                                <span style={{ color: '#04a334', display: 'block' }}>Enhance</span>
                                <span style={{ color: '#1dbce0', display: 'block' }}>Your Performance</span>
                                {/* <span style={{ display: 'block' }}>Your <span style={{ color: '#1dbce0' }}>Performance</span></span> */}
                                With A Thorough
                                <span style={{ color: '#FF4848', display: 'block' }}>Analysis</span>
                            </Typography>
                        </ThemeProvider>
                        <Button component={Link} className={classes.button} to="/auth" variant="contained" color="primary" >Sign In</Button>
                    </Grid>
                    <Grid item xs={6} className={classes.rightGrid}>
                        This is Secod Grid
                    </Grid>
                </Grid>
            </div>
            <div style={{ height: '100%', width: '100%' }}>
                <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient"><stop offset="5%" stopColor="#161a46ff"></stop><stop offset="95%" stopColor="#000000ff"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,300 0,300 C 99.13875598086128,261.0143540669857 198.27751196172255,222.0287081339713 302,230 C 405.72248803827745,237.9712918660287 514.0287081339712,292.8995215311005 606,288 C 697.9712918660288,283.1004784688995 773.6076555023923,218.3732057416268 857,191 C 940.3923444976077,163.6267942583732 1031.5406698564593,173.60765550239233 1130,198 C 1228.4593301435407,222.39234449760767 1334.2296650717703,261.1961722488038 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" className="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 300)"></path></svg>
            </div>
            <Typography>sfdhsf</Typography>
            <div style={{ height: '250vh' }} />
            <div style={{ height: '100%', width: '100%' }}>
                <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient"><stop offset="5%" stopColor="#161a46ff"></stop><stop offset="95%" stopColor="#000000ff"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,300 0,300 C 99.13875598086128,261.0143540669857 198.27751196172255,222.0287081339713 302,230 C 405.72248803827745,237.9712918660287 514.0287081339712,292.8995215311005 606,288 C 697.9712918660288,283.1004784688995 773.6076555023923,218.3732057416268 857,191 C 940.3923444976077,163.6267942583732 1031.5406698564593,173.60765550239233 1130,198 C 1228.4593301435407,222.39234449760767 1334.2296650717703,261.1961722488038 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" className="transition-all duration-300 ease-in-out delay-150" transform="rotate(0 720 300)"></path></svg>
            </div>
        </>
    )
}

export default LandingPage;