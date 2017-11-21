import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Resources from './pages/resources'
import ShowResource from './pages/resources/show'
import NewResource from './pages/resources/new'
import About from './pages/about'
import InMemory from './pages/in-memory'
import Legal from './pages/legal'
import Categories from './pages/categories'
import ShowCategory from './pages/categories/show'
// import RecipeReviewCard from "./pages/categories/show";

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resources/new" component={NewResource} />
          <Route path="/resources/:id" component={ShowResource} />
          <Route path="/resources" component={Resources} />
          <Route path="/categories/:id" component={ShowCategory} />
          <Route path="/categories" component={Categories} />
          <Route path="/about" component={About} />
          <Route path="/in-memory" component={InMemory} />
          <Route path="/legal" component={Legal} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
