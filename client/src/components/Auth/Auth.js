import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Typography, Paper, Grid } from '@material-ui/core'
import { signin, signup } from '../../actions/auth';

import Input from './Input';

const Auth = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(true);
    const dispatch = useDispatch()
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault()
        if (isSignup) {
            dispatch(signup(formData, history))
        } else {
            dispatch(signin(formData, history))
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    }

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    return (
        <Paper>
            <form onSubmit={handleSubmit}>
                <Typography>Create An Account!</Typography>
                <Grid container spacing={2}>
                    {isSignup && (
                        <>
                            <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                            <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                        </>
                    )}

                    <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                    <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                    {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                </Grid>
                <Button type="submit" fullWidth variant="contained" color="primary">
                    {isSignup ? 'Sign Up' : 'Sign In'}
                </Button>
            </form>
        </Paper>
    )
}

export default Auth