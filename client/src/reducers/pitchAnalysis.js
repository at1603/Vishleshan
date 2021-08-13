import { SEND_VIDEO_DATA } from '../constants/actionTypes';

const pitchAnalysisReducer = (state = { pitchAnalysisData: null, conversationData: {}, }, action) => {
    switch (action.type) {
        case SEND_VIDEO_DATA:
            localStorage.setItem('pitchAnalysisData', JSON.stringify({ ...action?.data }));
            return { ...state, conversationData: action?.data };

        default:
            return state;
    }
};

export default pitchAnalysisReducer;