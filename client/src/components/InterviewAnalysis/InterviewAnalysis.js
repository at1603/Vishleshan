import React, { useState } from 'react'
import { TextField, Button, Typography, Paper, Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { joinZoomCall, stopAnalysis } from '../../actions/InterviewAnalysis/interviewAnalysis'


const InterviewAnalysis = () => {

    const [formData, setFormData] = useState({ url: '' })
    const [stopForm, setstopForm] = useState({ connectionId: "" })

    const dispatch = useDispatch()

    const connectionId = useSelector(state => state.interviewAnalysis.connection)
    console.log(connectionId, "arararara")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(joinZoomCall(formData))
    }

    const handleStopSubmit = (e) => {
        e.preventDefault()
        dispatch(stopAnalysis({ connectionId }))
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
            {connectionId !== null &&
                <form onSubmit={handleStopSubmit}>
                    <Button variant='contained' color='primary' size='large' type='submit' fullWidth>Stop Analysis</Button>
                </form>
            }

        </>
    )
}

export default InterviewAnalysis;