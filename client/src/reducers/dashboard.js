import { GET_COMPARISON_DATA } from '../constants/actionTypes';
import { GET_CONVO_LIST } from '../constants/actionTypes';

const dashboardReducer = (state = { comparisonData: {}, conversationList: {} }, action) => {
    switch (action.type) {
        case GET_COMPARISON_DATA:
            localStorage.setItem('comparisonData', JSON.stringify({ ...action?.data }));
            return { ...state, comparisonData: action?.data };
        case GET_CONVO_LIST:
            return { ...state, conversationList: action?.data };
        default:
            return state;
    }
};

export default dashboardReducer;