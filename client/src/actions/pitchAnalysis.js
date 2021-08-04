import * as api from '../api';
import { SEND_VIDEO_DATA } from '../constants/actionTypes';

export const sendVideoData = (formData) => async (dispatch) => {
    try {
        console.log(formData)
        const { data } = await api.sendVideoData(formData);
        dispatch({ type: SEND_VIDEO_DATA, data });

    } catch (error) {
        console.log(error);
    }
}