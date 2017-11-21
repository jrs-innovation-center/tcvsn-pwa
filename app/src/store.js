import { createStore, combineReducers, applyMiddleware } from 'redux'
import { drawer } from './reducers/drawer'
import { resources, currentResource } from './reducers/resources'
import { categories, currentCategory } from './reducers/categories'
import thunk from 'redux-thunk'

export default createStore(
  combineReducers({
    drawer,
    categories,
    resources,
    currentCategory,
    currentResource
  }),
  applyMiddleware(thunk)
)
