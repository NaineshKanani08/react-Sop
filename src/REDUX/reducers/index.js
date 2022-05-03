import {combineReducers} from 'redux'
import IncDecCount from './reducers'
import UserReducer from './userReducer';
// import productReducer from './productReducer'

const rootReducer = combineReducers({
    IncDecCount,
    UserReducer
    // productReducer
})
export default rootReducer;