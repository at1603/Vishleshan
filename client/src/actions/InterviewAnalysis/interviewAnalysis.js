import * as api from '../../api';
import { JOIN } from '../../constants/actionTypes';


export const joinZoomCall = (formData) => async (dispatch) => {
    try {
        console.log(formData)
        const { data } = await api.joinZoomCall(formData);
        dispatch({ type: JOIN, data });

    } catch (error) {
        console.log(error);
    }
}