import { push } from "connected-react-router"
import axios from 'axios'
import {store} from '../index'

export const LOGOUT = "LOGOUT"
export const LOGOUT_FAIL = "LOGOUT_FAIL"

const url = 'http://localhost:8000/api/auth'

export const tokenConfig = () => {
    // Get token
    const token = store.getState().auth.login.data.token;
  
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    if (token) {
      config.headers['Authorization'] = `Token ${token}`;
    }
  
    return config;
  };

const logout = () => dispatch => {

  return axios.post(url + "/logout/", null, tokenConfig())
    .then(result => {
      localStorage.removeItem("token")
      return dispatch({
        type: LOGOUT,
        payload: result
      })
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: LOGOUT_FAIL, payload: err.message })
      )
    })
}

export const logoutThenGoToLoginPage = loginData => dispatch => {
    dispatch(push("/"))

    return dispatch(logout(loginData))
}