import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import register from './register'
import conferences from './conferences'
import post from './post'
import reports from './reports'
import users from './users'
import currentUser from './currentUser'


export default history => 
    combineReducers({
        router: connectRouter(history),
        auth,
        register,
        conferences,
        post,
        reports,
        users,
        currentUser
    })