import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ScrollToTop from './components/scroll-to-top'
import Page from './page'

export default () => (
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <Route
          exact
          path="/"
          component={props => {
            return <Page page="summary" {...props} />
          }}
        />
        <Route
          path="/:page"
          component={props => {
            return <Page page={props.match.params.page} {...props} />
          }}
        />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
)
