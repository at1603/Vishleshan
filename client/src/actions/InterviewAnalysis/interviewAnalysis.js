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

export const stopAnalysis = (formData) => async (dispatch) => {
    try {
        console.log(formData)
        const { data } = await api.stopAnalysis(formData)
        dispatch({ type: STOP_ANALYSIS, data })
    } catch (error) {
        console.log(error);
    }
}