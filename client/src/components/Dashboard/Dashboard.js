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
                Vishleshan
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
    const userData = JSON.parse(localStorage.getItem('profile'))


    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const isoToDate = (createdAt) => {
        var date = new Date(createdAt);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var dt = date.getDate();

        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }
        return (dt + '-' + month + '-' + year);

    }
    return (
        <div className={classes.root} style={{ backgroundImage: 'url("https://wallpapercave.com/wp/wp7752259.jpg")' }}>
            <main className={classes.content}>
                <Container maxWidth="xl" className={classes.container}>
                    <Grid container xs={12}>
                        <Grid container spacing={3} item xs={12}>

                            <Grid item xs={8} style={{ margin: '3rem auto 0' }} >
                                <Paper className={classes.paper}><Tabs onSelectTab={handleTabValue} /></Paper>
                            </Grid>

                            {tab === 0 ? (
                                <Grow in={open}>
                                    <Grid item xs={8} style={{ margin: 'auto' }}>
                                        <Paper className={classes.paper}>
                                            <Tables />
                                        </Paper>
                                    </Grid>
                                </Grow>) : (
                                <>



                                    <Grow in={open}>
                                        <Grid container item xs={5} style={{ height: "25rem", margin: 'auto' }} >
                                            <Paper style={{ width: '100%', margin: '0 2rem', height: '100%', textAlign: 'center' }} className={classes.paper}>
                                                <Avatar alt="Remy Sharp" src="" />
                                                <Typography>Email: {userData.result.email}</Typography>
                                                <Typography>Name: {userData.result.name}</Typography>
                                                <Typography>Joined On: {isoToDate(userData.result.joinedOn)}</Typography>
                                            </Paper>
                                        </Grid>
                                    </Grow>




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