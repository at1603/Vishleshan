import { SEND_VIDEO_DATA } from '../constants/actionTypes';

const pitchAnalysisReducer = (state = { pitchAnalysisData: null, conversationData: {}, connection: {} }, action) => {
    switch (action.type) {
        case SEND_VIDEO_DATA:
            return { ...state, conversationData: action?.data };
        default:
            return state;
    }
};

export default pitchAnalysisReducer;