import { SET_FAVORITES, ADD_TO_FAVORITES } from '../constants'

import { append, reject, equals, contains } from 'ramda'

export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'SET_FAVORITES':
      return action.payload
    case 'ADD_TO_FAVORITES':
      if (contains(action.payload, state)) {
        return reject(equals(action.payload), state)
      } else {
        return append(action.payload, state)
      }
    default:
      return state
  }
}
