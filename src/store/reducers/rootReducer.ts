import { combineReducers } from "redux";
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
export default (history:History<any>) => combineReducers({
    router: connectRouter(history),

});