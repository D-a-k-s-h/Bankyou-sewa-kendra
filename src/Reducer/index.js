import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '../Slices/authSlice'
import dmtReducer from '../Slices/dmtSlice';

const rootReducer = combineReducers({
    auth: authReducer,
    dmt: dmtReducer
})

export default rootReducer;