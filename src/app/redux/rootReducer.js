import {combineReducers} from '@reduxjs/toolkit'
import counterReducer from "./slices/counter/counterSlice";
import themeReducer from "./slices/theme/themeSlice";

// Redux: Root Reducer
const reducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer,
})

// Destroy redux state
const rootReducer = (state, action) => {
  return reducer(state, action)
}

// Exports
export default rootReducer
