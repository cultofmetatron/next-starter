
import { createStore, combineReducers } from "redux";

import { authReducer } from './auth';
import { counterReducer } from './counter';

const reducer = combineReducers({
  auth: authReducer,
  counter: counterReducer
});

export default reducer;
