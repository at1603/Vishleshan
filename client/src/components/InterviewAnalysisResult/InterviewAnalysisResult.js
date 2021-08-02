import React, { useState } from 'react'
import { TextField, Button, Typography, Paper, Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { getAnalysis } from '../../actions/InterviewAnalysis/interviewAnalysis'


const InterviewAnalysisResult = () => {

    const [formData, setFormData] = useState({ conversationId: '' })
    const dispatch = useDispatch()



    // setFormData({conversationId: useSelector(state => state.interviewAnalysis.conversationId)})
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getAnalysis(formData))
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }


    return (
        <>
            <h1>Interview Analysis Result</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    name='conversationId'
                    value={formData.conversationId}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    fullWidth
                    label='ID'
                ></TextField>
                <Button variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
            </form>
        </>
    )
}

export default InterviewAnalysisResult;