import axios from 'axios'

export const REPORTS_SUCCEEDED = 'REPORTS_SUCCEEDED'
export const REPORTS_FAILED = 'REPORTS_FAILED'

const url = 'http://localhost:8000/api/post/'

export const getReports = () => dispatch => {
    return axios.get(url)
    .then(data => {
        console.log(data)
        return dispatch({
            type: REPORTS_SUCCEEDED,
            payload: data
         })
    })
    .catch(err => {
        return Promise.reject(
            dispatch({
                type: REPORTS_FAILED,
                payload: err.failed
            })
        )
    })
}