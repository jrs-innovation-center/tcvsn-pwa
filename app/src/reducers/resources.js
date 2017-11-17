import { SET_RESOURCES } from '../constants'

export const resources = (state = [], action) => {
  // {type: SET_RESOURCES, payload: resources??? }

  switch (action.type) {
    case SET_RESOURCES:
      return action.payload
    default:
      return state
  }
}
