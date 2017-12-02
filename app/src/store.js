import { createStore, combineReducers, applyMiddleware } from 'redux'
import { drawer } from './reducers/drawer'
import {
  resources,
  currentResource,
  newResource,
  editResource
} from './reducers/resources'
import {
  categories,
  currentCategory,
  category,
  editCategory,
  isActive
} from './reducers/categories'
import { favorites } from './reducers/favorites'

import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    drawer,
    categories,
    resources,
    currentCategory,
    currentResource,
    category,
    editCategory,
    newResource,
    editResource,
    isActive,
    favorites
  }),
  applyMiddleware(thunk)
)
store.subscribe(() => {
  console.log('store.getState()', store.getState())
})
export default store
