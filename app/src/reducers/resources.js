import { SET_RESOURCES, SET_CURRENT_RESOURCE } from '../constants'

export const resources = (state = [], action) => {
  // {type: SET_RESOURCES, payload: resources??? }

  switch (action.type) {
    case SET_RESOURCES:
      return action.payload
    default:
      return state
  }
}

export const currentResource = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_RESOURCE:
      return action.payload
    default:
      return state
  }
}
