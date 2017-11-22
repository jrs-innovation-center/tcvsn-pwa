import React from 'react'
import { Switch, Router, Route } from 'react-router-dom'
import Home from './pages/home'
import Resources from './pages/resources'
import ShowResource from './pages/resources/show'
import NewResource from './pages/resources/new'
import About from './pages/about'
import InMemory from './pages/in-memory'
import Legal from './pages/legal'
import Categories from './pages/categories'
import NewCategory from './pages/categories/new'
import ShowCategory from './pages/categories/show'
// import RecipeReviewCard from "./pages/categories/show";
import history from './history'

const App = props => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resources/new" component={NewResource} />
          <Route path="/resources/:id" component={ShowResource} />
          <Route path="/resources" component={Resources} />
          <Route path="/categories/new" component={NewCategory} />
          <Route path="/categories/:id" component={ShowCategory} />
          <Route path="/categories" component={Categories} />
          <Route path="/about" component={About} />
          <Route path="/in-memory" component={InMemory} />
          <Route path="/legal" component={Legal} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
