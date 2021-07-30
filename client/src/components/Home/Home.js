import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            <Button component={Link} to="/auth" variant="contained" color="primary">Sign Up</Button>
        </>
    )
}

export default Home