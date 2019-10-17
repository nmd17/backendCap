import axios from 'axios'
import {tokenConfig} from './logout'
import { push } from 'connected-react-router'


export const POST = 'POST'
export const POST_SUCCESS = 'POST_SUCCESS'
export const POST_FAILED = 'POST_FAILED'

const url = 'http://localhost:8000/api/post/'


export const post = postData => dispatch => {
    dispatch({
        type: POST
    })
    console.log(postData)
    return axios.post(url, {
        body: postData['body'],
        first_name: postData['first_name'],
        last_name: postData['last_name'],
        conference: postData['conference']
    }, tokenConfig() )
    .then(res => {
        return dispatch({
            type: POST_SUCCESS,
            payload: res
        })
    })
    .catch(err => {
        return Promise.reject(
            dispatch({
                type: POST_FAILED,
                payload: err.message
            })
        )
    })
}

export const postThenGoHome = postData => dispatch => {
    return dispatch(post(postData))
      .then(() => dispatch(push('/')))
  }
