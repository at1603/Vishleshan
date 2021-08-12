import { SEND_VIDEO_DATA } from '../constants/actionTypes';
import { GET_VIDEO_DATA } from '../constants/actionTypes';
import { GET_CONVO_LIST } from '../constants/actionTypes';

const pitchAnalysisReducer = (state = { pitchAnalysisData: null, conversationData: {}, connection: {} }, action) => {
    switch (action.type) {
        case SEND_VIDEO_DATA:
            localStorage.setItem('pitchAnalysisData', JSON.stringify({ ...action?.data }));
            return { ...state, conversationData: action?.data };
        case GET_VIDEO_DATA:
            return action?.data;
        case GET_CONVO_LIST:
            return action?.data;
        default:
            return state;
    }
};

export default pitchAnalysisReducer;