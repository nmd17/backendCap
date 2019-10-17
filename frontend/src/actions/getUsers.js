import axios from 'axios'

export const USERS_SUCCEEDED = 'USERS_SUCCEEDED'
export const USERS_FAILED = 'USERS_FAILED'

const url = 'http://localhost:8000/users/'

export const getUsers = () => dispatch => {
    return axios.get(url)
            .then(data => {
                return dispatch({
                    type: USERS_SUCCEEDED,
                    payload: data
                 })
            })
            .catch(err => {
                return Promise.reject(
                    dispatch({
                        type: USERS_FAILED,
                        payload: err.failed
                    })
                )      
            })
}