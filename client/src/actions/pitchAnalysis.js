import * as api from '../api';
import { SEND_VIDEO_DATA } from '../constants/actionTypes';
import { GET_VIDEO_DATA } from '../constants/actionTypes';
import { GET_CONVO_LIST } from '../constants/actionTypes';

export const sendvideodata = (formData, history) => async (dispatch) => {
    try {
        console.log(formData.getAll('file'), "bla")
        const { data } = await api.sendVideoData(formData);
        dispatch({ type: SEND_VIDEO_DATA, data });
        history.push('/pitchAnalysisResult')
    } catch (error) {
        console.log(error);
    }
}

export const getvideodata = (conversationId1, conversationId2, history) => async (dispatch) => {
    try {
        const { data } = await api.getVideoData(conversationId1, conversationId2);
        dispatch({ type: GET_VIDEO_DATA, data })
        history.push('/');
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

export const getconversationlist = () => async (dispatch) => {
    try {
        console.log("in getconvo");
        const { data } = await api.getConversationList();
        dispatch({ type: GET_CONVO_LIST, data });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

