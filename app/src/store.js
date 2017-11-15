import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export default createStore(
  combineReducers({
    drawer: (state = { open: true }, action) => {
      switch (action.type) {
        case 'TOGGLE_DRAWER':
          return { open: !state.open }
        default:
          return state
      }
    }
  }),
  applyMiddleware(thunk)
)
