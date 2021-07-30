import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Container, AppBar, Typography, Grow, makeStyles, IconButton, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

import Home from './components/Home/Home'
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
        <BrowserRouter>
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
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" exact component={Auth} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App;