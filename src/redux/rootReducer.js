import { combineReducers } from "redux"

import counterReducer from "./counter/counter.reducers"

const rootReducer = combineReducers( {
    counter: counterReducer,
} );

export default rootReducer;