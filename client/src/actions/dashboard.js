import * as api from '../api';

import { GET_CONVO_LIST, GET_COMPARISON_DATA } from '../constants/actionTypes';

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
export const getcomparisondata = (conversationId1, conversationId2, history) => async (dispatch) => {
    try {
        console.log(conversationId1, conversationId2, "Aaaaaa")
        const { data } = await api.getComparisonData(conversationId1, conversationId2);
        dispatch({ type: GET_COMPARISON_DATA, data })
        console.log(data);
        history.push('/home');

    } catch (error) {
        console.log(error);
    }
}
