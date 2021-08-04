import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { sendVideoData } from '../../actions/pitchAnalysis'
import { TextField, Button } from '@material-ui/core';


const PitchAnalysis = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({url: ""})
    
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(sendVideoData(formData))
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <>
            <h1>Pitch Analysis</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    name='url'
                    value={formData.url}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    fullWidth
                    label='URL'
                ></TextField>
                <Button variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
            </form>
        </>
    )
}

export default PitchAnalysis;