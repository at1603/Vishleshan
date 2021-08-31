import React from 'react';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Tabs from './Tabs'

import SummaryAnalysis from './SummaryAnalysis/SummaryAnalysis';
import LanguageAnalysis from './LanguageAnalysis/LanguageAnalysis';
import SentimentAnalysis from './SentimentAnalysis/SentimentAnalysis';
import SuggestionPage from './SuggestionPage/SuggestionPage';

import useStyles from './styles'
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function PitchAnalysisResult() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [gulag, setGulag] = React.useState(true);
    const [tab, setTab] = React.useState(0);
    const handleTabValue = (tabValue) => {
        setTab(tabValue)
    }
    const handleGridToggle = () => {
        setOpen(!open);
    };
    const handleDisplay = () => {
        // setTimeout(() => {


        // }, 1000)
        setGulag(!gulag);
    }

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root} style={{ backgroundImage: 'url("https://www.setaswall.com/wp-content/uploads/2017/12/Blue-And-Black-Wallpaper-44-1920x1080.jpg")' }}>
            <main className={classes.content}>
                {/* <Button onClick={handleGridToggle} className={classes.toggleGrid}>Cha</Button>
                <FormControlLabel
                    control={<Switch checked={open} onChange={handleGridToggle} />}
                    label="Show"
                /> */}
                <Container maxWidth="xl" className={classes.container}>
                    <Grid container xs={12}>
                        {/* <Grid container item xs={3} style={open ? {} : { display: 'none' }}> */}
                        {/* <Grow in={open} onExited={handleDisplay} onEnter={handleDisplay}>
                            <Grid container item xs={3} style={gulag ? { display: 'none' } : {}} >

                                <Paper style={{ width: '100%', margin: '0 2rem' }} className={classes.paper}>
                                    
                                </Paper>
                            </Grid>
                        </Grow> */}
                        <Grid container spacing={3} item xs={12}>

                            <Grid item xs={12} style={{ margin: 'auto' }}>
                                <Paper className={classes.paper}><Tabs onSelectTab={handleTabValue} /></Paper>
                            </Grid>

                            {tab === 0 ? (
                                <>
                                    <SummaryAnalysis />
                                </>
                            ) : (tab === 1 ? <LanguageAnalysis /> : (tab === 2 ? <SentimentAnalysis /> : <SuggestionPage />))}
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
}