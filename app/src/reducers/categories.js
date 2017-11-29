import {
  SET_CATEGORIES,
  SET_CURRENT_CATEGORY,
  UPDATE_NEW_FORM,
  IS_ACTIVE,
  SET_EDIT_CATEGORY,
  ONCHANGE_EDIT_CAT_FORM,
  CONFIRM_CATEGORY_DELETE,
  DENY_CATEGORY_DELETE
} from '../constants'
import { merge, not } from 'ramda'

export const categories = (state = [], action) => {
  // {type: SET_RESOURCES, payload: resources??? }

  switch (action.type) {
    case SET_CATEGORIES:
      return action.payload
    default:
      return state
  }
}

// ```
// Sample action.payload
// {
// "_id": "category_basic-needs-assistance",
// "_rev": "9-1001719ff37b19781b95788794ab4a75",
// "type": "category",
// "name": "Basic Needs Assistance",
// "shortDesc": "shelter, food, emergency",
// "desc": "Basic Needs Assistance includes organizations that provide one or more of the following services: shelter facilities for the homeless and for those escaping situations of domestic violence, food/supplemental nutrition resources, and single-transaction emergency financial assistance in cases of involuntary hardship...",
// "icon": "add_circle",
// "confirmDelete": false
// }
// ```

export const currentCategory = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_CATEGORY:
      return action.payload
    case CONFIRM_CATEGORY_DELETE:
      return merge(state, {
        confirmDelete: not(state.confirmDelete)
      })
    case DENY_CATEGORY_DELETE:
      return merge(state, {
        denyDelete: not(state.denyDelete),
        denyDeleteMsg: action.payload
      })
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
