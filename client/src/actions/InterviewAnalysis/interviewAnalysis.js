import * as api from '../../api';
import { JOIN_CALL, GET_INTERVIEW_ANALYSIS, STOP_ANALYSIS } from '../../constants/actionTypes';


export const joinZoomCall = (formData) => async (dispatch) => {
    try {
        console.log(formData)
        const { data } = await api.joinZoomCall(formData);
        dispatch({ type: JOIN_CALL, data });

    } catch (error) {
        console.log(error);
    }
}

export const getAnalysis = (formData) => async (dispatch) => {
    try {
        console.log(formData)
        const { data } = await api.getAnalysis(formData)

        dispatch({ type: GET_INTERVIEW_ANALYSIS, data })
    } catch (error) {
        console.log(error);
    }
}

export const stopAnalysis = (formData, history) => async (dispatch) => {
    try {
        console.log(formData)
        const { data } = await api.stopAnalysis(formData)
        console.log(data)
        dispatch({ type: STOP_ANALYSIS, data }).then(history.push('/interviewAnalysisResult'))
    } catch (error) {
        console.log(error);
    }
}