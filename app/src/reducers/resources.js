import {
  SET_RESOURCES,
  SET_CURRENT_RESOURCE,
  UPDATE_NEW_FORM
} from '../constants'

import { merge } from 'ramda'

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
const newResourceDefault = {
  categoryId: '',
  formalName: '',
  name: '',
  shortDesc: '',
  purpose: '',
  website: ''
}
export const newResource = (state = newResourceDefault, action) => {
  switch (action.type) {
    case UPDATE_NEW_FORM:
      console.log('ACTION', action.payload)
      console.log('STATE', state)
      return merge(state, action.payload)
    default:
      return state
  }
}
