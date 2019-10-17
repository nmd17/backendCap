import axios from 'axios'
import { store } from '../index'
import { tokenConfig } from './logout'

export const SET_USER = "SET_USER"

const url = 'http://localhost:8000/api/auth/user/'

export const setCurrentUser = () => dispatch => {
        return axios.get(url, tokenConfig())
            .then(res => {
                console.log(res)
                return dispatch({
                    type: SET_USER,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
}