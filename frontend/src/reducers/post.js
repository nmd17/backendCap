import {POST, POST_SUCCESS, POST_FAILED } from '../actions'

const initialState = {
    post_loading: false, 
    post: null,
    postError: null
}

export default (state = initialState, action) => {
    switch (action.type) {
      case POST:
        return {
          ...state,
          registerLoading: true,
          registerError: null
        }
      case POST_SUCCESS:
        return { 
          ...state,
          register: action.payload,
          registerLoading: false,
          id: action.payload.id
        }
      case POST_FAILED:
        return {
          ...state,
          registerError: action.payload,
          registerLoading: false
        }
  
      default:
        return state;
    }
  }