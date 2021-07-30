import React from 'react';
import { Container, AppBar, Typography, Grow, makeStyles, IconButton, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

import Auth from './components/Auth/Auth';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const App = () => {

    const classes = useStyles()
    return (
        <Container maxWidth='lg'>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grow in >
                <Container>
                    <Auth />
                </Container>
            </Grow>
        </Container>
    )
}

export default App;