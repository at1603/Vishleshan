import React, { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import { LOGOUT } from '../../constants/actionTypes'
import { AppBar, Typography, IconButton, Toolbar, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from './styles';

const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const classes = useStyles()

    const logout = () => {
        dispatch({ type: LOGOUT });
        history.push('/');
        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])
    return (
        <AppBar position="static" className={classes.appBar}>
            <a href="/"><img className={classes.titleImage} src="https://fontmeme.com/permalink/210804/b5f47598f9d6a5548eee06b1d5a9d444.png" alt="samarkan-font" border="0" /></a>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button className={classes.button} variant="contained" color="secondary" onClick={logout} >Log Out</Button>
                    </div>
                ) : (
                    <Button component={Link} className={classes.button} to="/auth" variant="contained" color="primary" >Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar