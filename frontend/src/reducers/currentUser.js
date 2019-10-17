import { SET_USER} from "../actions"


const initialState = {
  id: null,
  username: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        id: action.payload.id,
        username: action.payload.username
      }
    default:
      return state
  }
}