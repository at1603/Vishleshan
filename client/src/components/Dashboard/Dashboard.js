import React, { useLayoutEffect } from 'react';
import clsx from 'clsx';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Tables from './Tables'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Tabs from './Tabs'
import useStyles from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { getconversationlist } from '../../actions/dashboard';

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

export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [gulag, setGulag] = React.useState(true);
    const [tab, setTab] = React.useState(0);
    const dispatch = useDispatch();
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
    // useLayoutEffect(() => {
    //     dispatch(getconversationlist());

    // }, [dispatch]);

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <main className={classes.content}>
                <Button onClick={handleGridToggle} className={classes.toggleGrid}>Cha</Button>
                <FormControlLabel
                    control={<Switch checked={open} onChange={handleGridToggle} />}
                    label="Show"
                />
                <Container maxWidth="xl" className={classes.container}>
                    <Grid container xs={12}>
                        {/* <Grid container item xs={3} style={open ? {} : { display: 'none' }}> */}
                        <Grow in={open} onExited={handleDisplay} onEnter={handleDisplay}>
                            <Grid container item xs={3} style={gulag ? { display: 'none' } : {}} >

                                <Paper style={{ width: '100%', margin: '0 2rem' }} className={classes.paper}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </Paper>
                            </Grid>
                        </Grow>
                        <Grid container spacing={3} item xs={gulag ? 12 : 9}>

                            <Grid item xs={12} >
                                <Paper className={classes.paper}><Tabs onSelectTab={handleTabValue} /></Paper>
                            </Grid>

                            {tab === 0 ? (
                                <Grid item xs={12}>
                                    <Paper className={classes.paper}>
                                        <Tables />
                                    </Paper>
                                </Grid>) : (
                                <>
                                    <Grid item xs={12} md={8} lg={4}>
                                        <Paper className={fixedHeightPaper}>
                                        </Paper>
                                    </Grid>

                                    <Grid item xs={12} md={4} lg={4}>
                                        <Paper className={fixedHeightPaper}>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} md={8} lg={4}>
                                        <Paper className={fixedHeightPaper}>
                                        </Paper>
                                    </Grid>



                                    <Grid item xs={12} md={4} lg={4}>
                                        <Paper className={fixedHeightPaper}>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} md={8} lg={4}>
                                        <Paper className={fixedHeightPaper}>
                                        </Paper>
                                    </Grid>

                                    <Grid item xs={12} md={4} lg={4}>
                                        <Paper className={fixedHeightPaper}>
                                        </Paper>
                                    </Grid>


                                </>
                            )}
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