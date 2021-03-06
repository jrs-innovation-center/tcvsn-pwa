import {
  SET_RESOURCES,
  SET_CURRENT_RESOURCE,
  UPDATE_NEW_RES_FORM,
  IS_ACTIVE,
  SET_EDIT_RESOURCE,
  CONFIRM_RESOURCE_DELETE,
  ONCHANGE_EDIT_RES_FORM
} from '../constants'

import { merge, not } from 'ramda'

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
    case CONFIRM_RESOURCE_DELETE:
      console.log('CONFIRM_RESOURCE_DELETE')
      return merge(state, { confirmDelete: not(state.confirmDelete) })
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
    case UPDATE_NEW_RES_FORM:
      return merge(state, action.payload)
    case SET_RESOURCES:
      return newResourceDefault
    default:
      return state
  }
}

export const editResource = (state = newResourceDefault, action) => {
  switch (action.type) {
    case SET_EDIT_RESOURCE:
      // console.log('SET_EDIT_RESOURCE', action.payload)
      return action.payload
    case ONCHANGE_EDIT_RES_FORM:
      // console.log('ACTION', action.payload)
      // console.log('STATE', state)
      return merge(state, action.payload)
    case SET_RESOURCES:
      // console.log('YOU SHOULD NOT BE HERE! SET_RESOURCES')
      return newResourceDefault
    default:
      return state
  }
}

export const isActive = (state = true, action) => {
  switch (action.type) {
    case IS_ACTIVE:
      return action.payload
    default:
      return state
  }
}
