import { JOIN_CALL, GET_INTERVIEW_ANALYSIS, STOP_ANALYSIS } from '../constants/actionTypes';

const interviewAnalysisReducer = (state = { interviewAnalysisData: null, connection: null }, action) => {
    switch (action.type) {
        case JOIN_CALL:
            return { ...state, connection: action?.data };
        case GET_INTERVIEW_ANALYSIS:
            return { ...state, interviewAnalysisData: action?.data };
        case STOP_ANALYSIS:
            return state
        default:
            return state;
    }
};

export default interviewAnalysisReducer;