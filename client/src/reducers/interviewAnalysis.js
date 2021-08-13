import { JOIN_CALL, GET_INTERVIEW_ANALYSIS, STOP_ANALYSIS } from '../constants/actionTypes';

const interviewAnalysisReducer = (state = { interviewAnalysisData: null, connectionData: {}, connection: {} }, action) => {
    switch (action.type) {
        case JOIN_CALL:
            return { ...state, connectionData: action?.data };
        case GET_INTERVIEW_ANALYSIS:
            return { ...state, interviewAnalysisData: action?.data };
        case STOP_ANALYSIS:
            return { ...state, connection: action?.data };
        default:
            return state;
    }
};

export default interviewAnalysisReducer;