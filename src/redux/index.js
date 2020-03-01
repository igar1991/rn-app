import { createStore, combineReducers } from 'redux'
import { postReduser } from './post'

const rootReducer = combineReducers({
    post: postReduser
})

export default createStore(rootReducer)