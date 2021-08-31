import React, { useEffect, useState } from 'react'
import { Button, Grid, Typography, Paper, Card, CardActionArea, CardContent, CardMedia, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom';
import AOS from 'aos';

import useStyles from './styles';
import { ThemeProvider } from '@material-ui/styles';
import headlineTheme from '../fonts/FontThemes';
import './styles.css'
// import MenuBook from '@material-ui/icons/menu_book';
import { Element } from 'react-scroll'

function iframe() {
    return {
        __html: '<iframe style="border:none; border-radius:25px" src="./grid2.html" width="700" height="450"></iframe>'
    }
}

const LandingPage = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const classes = useStyles();

    useEffect(() => {
        AOS.init({
            duration: 1500
        });
    }, []);

    return (
        <>
            <div className={classes.topCover}>
                <Grid container component="main">
                    <Grid item xs={6} className={classes.leftGrid} data-aos="fade-right">
                        <ThemeProvider theme={headlineTheme}>
                            <Typography style={{ width: '80%', fontWeight: 'bold', fontSize: 50 }}><span className={classes.textStyle} style={{ color: 'white', display: 'block' }}>Analyze Videos</span> <span style={{ color: 'white', display: 'block' }}>Amplify Your Skills</span>Achieve Future Goals</Typography>
                        </ThemeProvider>
                        <Typography variant="body1" style={{ width: '80%', marginTop: '2rem' }}>Get your videos analyzed to get valuable insights. Improve performance based on the insights. Ultimately achieve future goals with an improved performance.</Typography>
                        {user?.result ? ('') : (<Button component={Link} className={classes.button} to="/auth" variant="" color="primary" style={{ width: '200px' }}>Get Started</Button>)}
                    </Grid>
                    <Grid item xs={5} className={classes.rightGrid} data-aos="fade-left" style={{ border: 'none' }}>
                        <div style={{ border: 'none' }} dangerouslySetInnerHTML={iframe()} />
                    </Grid>
                </Grid>
            </div>

            {/* About Us Part */}
            <Element id='about-us' name='about-us'>
                <div data-aos="fade-up">

                    <ThemeProvider theme={headlineTheme}>
                        <Typography style={{ textAlign: 'center', fontSize: 32, fontWeight: 'bold', marginTop: '8rem', paddingTop: '6rem' }}>About Us</Typography>
                    </ThemeProvider>
                    <hr className="hrStyle" />
                    <Grid container component="main" className={classes.aboutGrid}>
                        <Grid items xs={6} className={classes.aboutLeftGrid} data-aos="fade-right">
                            <img src="https://www.cambridgemaths.org/Images/The-trouble-with-graphs.jpg" width="500" height="400" alt="Graph" />
                        </Grid>
                        <Grid items xs={6} className={classes.aboutRightGrid} data-aos="fade-left">
                            <Typography variant="body1">In this era of cut throat competition for job placements, there is a greater than ever need of self assessment for ensuring that the current level of job preparation is upto the general industry standards.
                                This led us to create a solution that allows the interviewee to visualize their performance in order to work on their area of weakness and vastly increase their chances of performing well in a job interview amongst others.
                                Additionally, interviewers can objectively analyse the performance of the candidates for selection.
                            </Typography>
                            <Typography variant="h6" style={{ marginTop: '2rem', color: '#1e2572', fontWeight: 'bold' }}>Why Choose Us!</Typography>
                            <ul>
                                <li><Typography variant="body1">Interactive Visual Analysis</Typography></li>
                                <li><Typography variant="body1">Analyze Grammatical Mistakes </Typography></li>
                                <li><Typography variant="body1">Get New and Effective Words</Typography></li>
                                <li><Typography variant="body1">Share Your Progress With Others</Typography></li>
                            </ul>
                        </Grid>
                    </Grid>
                </div>
            </Element>


            {/* Services Part */}
            <Element id='our-services' name='our-services'>
                <div style={{ backgroundColor: '#dce8ff' }} data-aos="fade-up">
                    <ThemeProvider theme={headlineTheme}>
                        <Typography variant="h2" style={{ textAlign: 'center', fontSize: 32, fontWeight: 'bold', marginTop: '8rem', paddingTop: '6rem' }}>Our Services</Typography>
                    </ThemeProvider>
                    <hr className="hrStyle" />
                    <div className="cardWrapper">
                        <div className="flip-card" data-aos="fade-right">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <Typography style={{ marginTop: '2rem', fontSize: '24px', color: 'white' }}>Performance Summary</Typography>
                                </div>
                                <div className="flip-card-back">
                                    <Typography variant="body1" style={{ marginTop: '4rem', fontSize: '20px', padding: '2rem' }}>A detailed summary with user-friendly data visualization of every performance done on this website.</Typography>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card" data-aos="zoom-in">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <Typography style={{ marginTop: '2rem', fontSize: '24px', color: 'white' }}>Async Video Analysis</Typography>
                                </div>
                                <div className="flip-card-back">
                                    <Typography variant="body1" style={{ marginTop: '4rem', fontSize: '20px', padding: '2rem' }}>This service can be used to analyze a pre recorded meeting event to provide additional insights including sentiment, emotions and many more traits. </Typography>
                                </div>
                            </div>
                        </div>
                        <div className="flip-card" data-aos="fade-left">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <Typography style={{ marginTop: '2rem', fontSize: '24px', color: 'white' }}>Real-Time Video Analysis</Typography>
                                </div>
                                <div className="flip-card-back">
                                    <Typography variant="body1" style={{ marginTop: '4rem', fontSize: '20px', padding: '2rem' }}>This service can be used to analyze a meeting event in real-time to get visual data and suggestions to improve the performance in real-time.</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>

            {/* Our Team */}
            <Element id='our-team' name='our-team'>
                <div data-aos="fade-up">
                    <ThemeProvider theme={headlineTheme}>
                        <Typography variant="h2" style={{ textAlign: 'center', fontSize: 32, fontWeight: 'bold', marginTop: '8rem', paddingTop: '6rem' }}>Our Team</Typography>
                    </ThemeProvider>
                    <hr className="hrStyle" />
                    <div className="teamCardWrapper">
                        <Card className={classes.teamCard} data-aos="fade-up">
                            <CardActionArea>
                                <CardMedia
                                    className={classes.teamMedia}
                                    image="https://avatars.githubusercontent.com/u/54502059?v=4"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Abhinav Tripathi
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        ---------------------------------------------------------------------------------------------------------------------
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={classes.teamCard} data-aos="fade-up">
                            <CardActionArea>
                                <CardMedia
                                    className={classes.teamMedia}
                                    image="https://avatars.githubusercontent.com/u/54094722?v=4"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Harsh Pandey
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        ---------------------------------------------------------------------------------------------------------------------
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card className={classes.teamCard} data-aos="fade-up">
                            <CardActionArea>
                                <CardMedia
                                    className={classes.teamMedia}
                                    image="https://avatars.githubusercontent.com/u/53134103?v=4"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Anmol Sahu
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        ---------------------------------------------------------------------------------------------------------------------
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
            </Element>

            {/* Contact Us */}
            <Element id='contact-us' name='contact-us'>
                <div style={{ backgroundColor: '#dce8ff' }} data-aos="fade-up">

                    <ThemeProvider theme={headlineTheme}>
                        <Typography style={{ textAlign: 'center', fontSize: 32, fontWeight: 'bold', marginTop: '8rem', paddingTop: '6rem' }}>Contact Us</Typography>
                    </ThemeProvider>
                    <hr className="hrStyle" />
                    <Grid container component="main" className={classes.aboutGrid}>
                        <Grid items xs={8} className={classes.aboutLeftGrid} data-aos="fade-right">
                            <div className={classes.backPaper}>
                                {/* <Grid item component={Paper} elevation={6} square> */}
                                <div className={classes.paper}>
                                    <form className={classes.form} noValidate>

                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            // fullWidth
                                            id="name"
                                            label="Name"
                                            name="name"
                                            style={{ marginRight: '2rem' }}
                                            autoComplete="name"
                                        />
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            style={{ width: '59%' }}
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                        />
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="message"
                                            label="Message"
                                            type="message"
                                            id="message"
                                            multiline={5}
                                        />
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            className={classes.submit}
                                        >
                                            Send Message
                                        </Button>
                                    </form>
                                </div>
                                {/* </Grid> */}
                            </div>
                        </Grid>
                        <Grid items xs={2} data-aos="fade-left">
                            <Typography variant="h5" style={{ marginTop: '2rem', marginBottom: '1rem', color: '#1e2572', fontWeight: 'bold' }}>Contact Info</Typography>
                            <Typography variant="h6" style={{ color: '#1e2572', fontWeight: 'bold' }}>Address</Typography>
                            <Typography>India</Typography>
                            <Typography variant="h6" style={{ color: '#1e2572', fontWeight: 'bold' }}>Phone</Typography>
                            <Typography>+916377675739</Typography>
                            <Typography variant="h6" style={{ color: '#1e2572', fontWeight: 'bold' }}>Email</Typography>
                            <Typography>anmolsahu2k@gmail.com</Typography>
                        </Grid>
                    </Grid>
                </div>
            </Element>
            <div style={{ height: '100%', width: '100%' }}>
                <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient"><stop offset="5%" stopColor="#161a46ff"></stop><stop offset="95%" stopColor="#000000ff"></stop></linearGradient></defs><path d="M 0,600 C 0,600 0,300 0,300 C 99.13875598086128,261.0143540669857 198.27751196172255,222.0287081339713 302,230 C 405.72248803827745,237.9712918660287 514.0287081339712,292.8995215311005 606,288 C 697.9712918660288,283.1004784688995 773.6076555023923,218.3732057416268 857,191 C 940.3923444976077,163.6267942583732 1031.5406698564593,173.60765550239233 1130,198 C 1228.4593301435407,222.39234449760767 1334.2296650717703,261.1961722488038 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" className="transition-all duration-300 ease-in-out delay-150" transform="rotate(0 720 300)"></path></svg>
            </div>
        </>
    )
}

export default LandingPage;