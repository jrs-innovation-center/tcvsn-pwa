import { createStore, combineReducers, applyMiddleware } from 'redux'
import { drawer } from './reducers/drawer'
import thunk from 'redux-thunk'

export default createStore(combineReducers({ drawer }), applyMiddleware(thunk))
