import { combineReducers } from 'redux';
import dateReducer from './dateReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
    date: dateReducer,
    error: errorReducer,
    auth: authReducer
});