import React, { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import { LOGOUT } from '../../constants/actionTypes'
import { AppBar, Typography, IconButton, Toolbar, Button } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import Scroll from 'react-scroll'
import './styles.js'


import useStyles from './styles';

const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const classes = useStyles()
    const ScrollLink = Scroll.Link


    const logout = () => {
        setUser(null);
        dispatch({ type: LOGOUT });

        history.push('/');

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
        <AppBar position="sticky" className={classes.appBar}>
            <Toolbar className={classes.leftToolbar}>
                <a href="/"><img className={classes.titleImage} src="https://fontmeme.com/permalink/210804/b5f47598f9d6a5548eee06b1d5a9d444.png" alt="samarkan-font" border="0" /></a>
                <div style={{ marginLeft: '2rem' }}>
                    {user?.result ? (<Typography component={Link} className={classes.userName} variant="h6" to='/home'>GO TO HOME</Typography>) : (
                        <>
                            <a href="#" className={classes.leftLinks}>
                                <ScrollLink
                                    to="about-us"
                                    spy={true}
                                    smooth={true}
                                    duration={800}
                                    // className='some-class' 
                                    activeClass={classes.selected}
                                >
                                    <Typography className={classes.userName} variant="h6">ABOUT</Typography>
                                </ScrollLink>
                            </a>
                            <a href="#" className={classes.leftLinks}  >
                                <ScrollLink
                                    to="our-services"
                                    spy={true}
                                    smooth={true}
                                    duration={800}
                                    // className='some-class'
                                    activeClass={classes.selected}
                                >
                                    <Typography className={classes.userName} variant="h6">SERVICES</Typography>
                                </ScrollLink>
                            </a>
                            <a href="#" className={classes.leftLinks}  >
                                <ScrollLink
                                    to="our-team"
                                    spy={true}
                                    smooth={true}
                                    duration={800}
                                    // className='some-class'
                                    activeClass={classes.selected}
                                >
                                    <Typography className={classes.userName} variant="h6">TEAM</Typography>
                                </ScrollLink>
                            </a>
                            <a href="#" className={classes.leftLinks}>
                                <ScrollLink
                                    to="contact-us"
                                    spy={true}
                                    smooth={true}
                                    duration={800}
                                    // className='some-class'
                                    activeClass={classes.selected}
                                >
                                    <Typography className={classes.userName} variant="h6">CONTACT</Typography>
                                </ScrollLink>
                            </a>
                        </>)}
                </div>
            </Toolbar>
            <Toolbar className={classes.rightToolbar}>
                {user?.result ? (
                    <div className={classes.profile}>
                        <Typography component={Link} className={classes.userName} variant="h6" to='/dashboard'>{user.result.name}</Typography>
                        <Button className={classes.button} variant="contained" color="secondary" onClick={logout} >Log Out</Button>
                    </div>
                ) : (
                    <Button component={Link} className={classes.button} to="/auth" variant="contained" color="primary" style={{ marginRight: '120px' }} >Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}
// <Button component={Link} className={classes.button} to="/auth" variant="contained" color="primary" >Sign In</Button>
export default Navbar