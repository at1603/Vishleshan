import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Typography, Paper, Grid } from '@material-ui/core'
import { GoogleLogin } from 'react-google-login';
import { signin, signup } from '../../actions/auth';

import Input from './Input';

const Auth = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
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

    // const googleFailure = (error) => {
    //     console.log(error)
    //     console.log("Google Sign In was unsuccessful. Try Again!");
    // };

    // const googleSuccess = async (res) => {
    //     const result = res?.profileObj;
    //     const token = res?.tokenId;

    //     try {
    //         dispatch({ type: 'AUTH', data: { result, token } });

    //         history.push('/');
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

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

                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Button onClick={switchMode}>{isSignup ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}</Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    )
}

export default Auth