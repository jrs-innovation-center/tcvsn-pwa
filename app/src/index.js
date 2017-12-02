import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'
import './App.css'
import { SET_FAVORITES } from './constants'
import 'typeface-roboto'

// import { setResources } from './action-creators/resources'
// import { setCategories } from './action-creators/categories'
// import {setResourceFilters} from './action-creators/resourceFilters'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// store.dispatch(setResources)
// store.dispatch(setCategories)
// store.dispatch(setResourceFilters)

registerServiceWorker()

// added HMR to app
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(<NextApp />, document.getElementById('root'))
  })
}

// load favorites
if (window.localStorage.getItem('favorites')) {
  store.dispatch({
    type: SET_FAVORITES,
    payload: JSON.parse(window.localStorage.getItem('favorites'))
  })
}
