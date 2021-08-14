import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper, Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { getAnalysis, stopAnalysis } from '../../actions/InterviewAnalysis/interviewAnalysis'


const InterviewAnalysisResult = () => {

    const [formData, setFormData] = useState({ conversationId: '' })
    const dispatch = useDispatch()

    const connectionData = useSelector(state => state.interviewAnalysis.connectionData)

    useEffect(() => {
        const ws = new WebSocket(`wss://api.symbl.ai/session/subscribe/${connectionData.connectionId}`, null, null, { 'X-API-Key': connectionData.authToken })
        ws.onopen = (connection) => {
            console.log("Successfully Connected", connection)
        }
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);

            if (data.type === 'message_response') {
                for (let message of data.messages) {
                    console.log('Transcript (more accurate): ', message.payload.content);
                }
            }
            if (data.type === 'topic_response') {
                for (let topic of data.topics) {
                    console.log('Topic detected: ', topic.phrases)
                }
            }
        }
        ws.onerror = (err) => {
            console.error(err);
        };
        ws.onclose = () => {
            dispatch(stopAnalysis(connectionData.connectionId))
        }
    })






    return (
        <>
            <h1>Interview Analysis Result</h1>
        </>
    )
}

export default InterviewAnalysisResult;