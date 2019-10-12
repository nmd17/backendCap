import { loginThenGoToUserProfile as login } from "../actions"
import axios from "axios";

export const REGISTER = "REGISTER"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAIL = "REGISTER_FAIL"

const url = 'http://localhost:8000/api/auth'

const register = registerData => dispatch => {
    dispatch({
        type: REGISTER
    })
    console.log(registerData)

    return axios.post(url + '/register/', {
        username: registerData['username'],
        password: registerData['password'],
        email: registerData['email'],
        first_name: registerData['first_name'],
        last_name: registerData['last_name']
    })
    .then(res => {
        localStorage.setItem("token", res.data.token)
        return dispatch({
            type: REGISTER_SUCCESS,
            payload: res
        })
    })
    .catch(err => {
        return Promise.reject(
            dispatch({
                type: REGISTER_FAIL, payload: err.message
            })
        )
    })
}

export const registerThenGoToUserProfile = registerData => dispatch => {
    return dispatch(register(registerData))
      .then(() => dispatch(login(registerData)))
  }