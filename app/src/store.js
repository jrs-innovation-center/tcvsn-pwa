import { createStore, combineReducers, applyMiddleware } from 'redux'
import { drawer } from './reducers/drawer'
import { resources, currentResource, newResource } from './reducers/resources'
import { categories, currentCategory } from './reducers/categories'
import thunk from 'redux-thunk'

export default createStore(
  combineReducers({
    drawer,
    categories,
    resources,
    currentCategory,
    currentResource,
    newResource
  }),
  applyMiddleware(thunk)
)
