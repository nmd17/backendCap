import axios from 'axios'

export const CONFERENCES_SUCCEEDED = 'CONFERENCES_SUCCEEDED'
export const CONFERENCES_FAILED = 'CONFERENCES_FAILED'

const url = 'http://localhost:8000/conferences/'

export const getConferences = () => dispatch => {
    return axios.get(url)
    .then(data => {
        console.log(data.data)
        return dispatch({
           type: CONFERENCES_SUCCEEDED,
           payload: data
        })
    })
    .catch(err => {
        return Promise.reject(
            dispatch({
                type: CONFERENCES_FAILED,
                payload: err.failed
            })
        )
    })
}