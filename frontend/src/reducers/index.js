import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import register from './register'
import conferences from './conferences'


export default history => 
    combineReducers({
        router: connectRouter(history),
        auth,
        register,
        conferences
    })