import { createStore, combineReducers, applyMiddleware } from 'redux'
import { drawer } from './reducers/drawer'
import { resources, currentResource } from './reducers/resources'
import thunk from 'redux-thunk'

export default createStore(
  combineReducers({ drawer, resources, currentResource }),
  applyMiddleware(thunk)
)
