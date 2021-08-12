import * as api from '../api';

import { GET_CONVO_LIST } from '../constants/actionTypes';

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
export const getComparisonData = () => async (dispatch) => {
    try {
        console.log("in getcomparison");
        const { data } = await api.getConversationList();
        dispatch({ type: GET_CONVO_LIST, data });
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

