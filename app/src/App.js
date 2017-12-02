import React from 'react'
import { Switch, Router, Route } from 'react-router-dom'
import Home from './pages/home'
import Resources from './pages/resources'
import EditResource from './pages/resources/edit'
import ShowResource from './pages/resources/show'
import NewResource from './pages/resources/new'
import About from './pages/about'
import InMemory from './pages/in-memory'
import Legal from './pages/legal'
import Login from './pages/login'
import Callback from './pages/callback'
import Logout from './pages/logout'

import Categories from './pages/categories'
import NewCategory from './pages/categories/new'
import ShowCategory from './pages/categories/show'
import EditCategory from './pages/categories/edit'
// import RecipeReviewCard from "./pages/categories/show";
import history from './history'
import ScrollToTop from './ScrollToTop'
import Auth from './auth'

const auth = new Auth()
const withAuth = Component => {
  return props => {
    return <Component {...props} {...auth} />
  }
}

const protectedRoute = Component => {
  return props => {
    if (auth.isAuthenticated()) {
      return <Component {...props} />
    } else {
      return <h1>Access Denied</h1>
    }
  }
}

const App = props => {
  return (
    <Router history={history}>
      <ScrollToTop>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/resources/new"
              component={protectedRoute(NewResource)}
            />
            <Route
              exact
              path="/resources/:id/edit"
              component={protectedRoute(EditResource)}
            />
            <Route path="/resources/:id" component={withAuth(ShowResource)} />
            <Route exact path="/resources" component={withAuth(Resources)} />
            <Route
              exact
              path="/categories/new"
              component={protectedRoute(NewCategory)}
            />
            <Route
              path="/categories/:id/edit"
              component={protectedRoute(EditCategory)}
            />
            <Route path="/categories/:id" component={withAuth(ShowCategory)} />
            <Route exact path="/categories" component={withAuth(Categories)} />
            <Route path="/about" component={About} />
            <Route path="/in-memory" component={InMemory} />
            <Route path="/legal" component={Legal} />
            <Route path="/login" component={withAuth(Login)} />
            <Route path="/callback" component={withAuth(Callback)} />
            <Route path="/logout" component={withAuth(Logout)} />
          </Switch>
        </div>
      </ScrollToTop>
    </Router>
  )
}

export default App
