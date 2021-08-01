import { combineReducers } from 'redux';
import auth from './auth';
import interviewAnalysis from './interviewAnalysis';

export default combineReducers({
    auth,
    interviewAnalysis
});