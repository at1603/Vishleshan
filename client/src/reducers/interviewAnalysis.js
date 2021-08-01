import { JOIN, GET } from '../constants/actionTypes';

const interviewAnalysisReducer = (state = { interviewAnalysisData: null }, action) => {
    switch (action.type) {
        case JOIN:
            return { ...state, interviewAnalysisData: action?.data };
        case GET:
            return { ...state, interviewAnalysisData: action?.data };
        default:
            return state;
    }
};

export default interviewAnalysisReducer;