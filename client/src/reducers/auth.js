import { AUTH } from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
    //change state based on action type and payload
    switch (action.type) {  
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
            return { ...state, authData: action?.data };
        default:
            return state;
    }
};

export default authReducer;