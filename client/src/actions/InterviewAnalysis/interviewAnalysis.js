import * as api from '../../api';
import { JOIN, GET } from '../../constants/actionTypes';


export const joinZoomCall = (formData) => async (dispatch) => {
    try {
        console.log(formData)
        const { data } = await api.joinZoomCall(formData);
        dispatch({ type: JOIN, data });

    } catch (error) {
        console.log(error);
    }
}

export const getAnalysis = (formData) => async (dispatch) => {
    try {
        console.log(formData)
        const { data } = await api.getAnalysis(formData)
        dispatch({ type: GET, data })
    } catch (error) {
        console.log(error);
    }
}