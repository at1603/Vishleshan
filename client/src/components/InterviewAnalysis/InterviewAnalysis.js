import React, { useState } from 'react'
import { TextField, Button, Typography, Paper, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { joinZoomCall } from '../../actions/InterviewAnalysis/interviewAnalysis'


const InterviewAnalysis = () => {

    const [formData, setFormData] = useState({ url: '' })
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(joinZoomCall(formData))
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }


    return (
        <>
            <h1>Interview Analysis</h1>
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

export default InterviewAnalysis;