import {
  SET_CATEGORIES,
  SET_CURRENT_CATEGORY,
  UPDATE_NEW_FORM,
  IS_ACTIVE,
  SET_EDIT_CATEGORY,
  ONCHANGE_EDIT_CAT_FORM
} from '../constants'
import { merge } from 'ramda'
export const categories = (state = [], action) => {
  // {type: SET_RESOURCES, payload: resources??? }

  switch (action.type) {
    case SET_CATEGORIES:
      return action.payload
    default:
      return state
  }
}

export const currentCategory = (state = [], action) => {
  switch (action.type) {
    case SET_CURRENT_CATEGORY:
      return action.payload
    default:
      return state
  }
}
const setDefaultCategory = { name: '', desc: '', shortDesc: '', icon: '' }
export const category = (state = setDefaultCategory, action) => {
  switch (action.type) {
    case UPDATE_NEW_FORM:
      return merge(state, action.payload)
    case SET_CATEGORIES:
      return setDefaultCategory
    default:
      return state
  }
}

export const editCategory = (state = setDefaultCategory, action) => {
  switch (action.type) {
    case SET_EDIT_CATEGORY:
      return action.payload
    case ONCHANGE_EDIT_CAT_FORM:
      return merge(state, action.payload)
    case SET_CATEGORIES:
      return setDefaultCategory
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
