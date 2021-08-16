import * as api from '../api';

import { GET_CONVO_LIST, GET_COMPARISON_DATA, FETCH_ANALYSIS_RESULT } from '../constants/actionTypes';

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
        history.push('/comparison');

    } catch (error) {
        console.log(error);
    }
}

export const fetchanalysisresult = (conversationId, history) => async (dispatch) => {
    try {
        const { data } = await api.fetchAnalysisResult(conversationId);
        dispatch({ type: FETCH_ANALYSIS_RESULT, data: data.analysisData });
        console.log(data.analysisData, "in fetch");
        history.push('/pitchAnalysisResult');
    } catch (error) {
        console.log(error);

    }
}
