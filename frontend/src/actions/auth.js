import axios from 'axios'
import { push } from 'connected-react-router'



export const LOGIN = "LOGIN"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAIL = "LOGIN_FAIL"

const url = 'http://localhost:8000/api/auth'

const login = loginData => dispatch => {
    dispatch({
        type: LOGIN
    })
    
    return axios.post(url + "/login/", {
        username: loginData['username'],
        password: loginData['password']
    })
    .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.token)
        return dispatch({
            type: LOGIN_SUCCESS,
            payload: res
        })
    })
    .catch(err => {
        return Promise.reject(
            dispatch({
                type: LOGIN_FAIL,
                payload: err.message
            })
        )
    })
}


export const loginThenGoToUserProfile = loginData => dispatch => {
    return dispatch(login(loginData)).then(() => dispatch(push("/")))
}
