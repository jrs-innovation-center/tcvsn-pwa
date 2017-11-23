import { createStore, combineReducers, applyMiddleware } from 'redux'
import { drawer } from './reducers/drawer'
import { resources, currentResource, newResource } from './reducers/resources'
import {
  categories,
  currentCategory,
  category,
  isActive
} from './reducers/categories'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    drawer,
    categories,
    resources,
    currentCategory,
    currentResource,
    category,
    newResource,
    isActive
  }),
  applyMiddleware(thunk)
)
store.subscribe(() => {
  console.log('store.getState()', store.getState())
})
export default store
