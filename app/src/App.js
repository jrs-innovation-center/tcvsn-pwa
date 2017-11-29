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
import Categories from './pages/categories'
import NewCategory from './pages/categories/new'
import ShowCategory from './pages/categories/show'
import EditCategory from './pages/categories/edit'
// import RecipeReviewCard from "./pages/categories/show";
import history from './history'
import ScrollToTop from './ScrollToTop'
const App = props => {
  return (
    <Router history={history}>
      <ScrollToTop>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/resources/new' component={NewResource} />
            <Route exact path='/resources/:id/edit' component={EditResource} />
            <Route path='/resources/:id' component={ShowResource} />
            <Route exact path='/resources' component={Resources} />
            <Route exact path='/categories/new' component={NewCategory} />
            <Route path='/categories/:id/edit' component={EditCategory} />
            <Route path='/categories/:id' component={ShowCategory} />
            <Route exact path='/categories' component={Categories} />
            <Route path='/about' component={About} />
            <Route path='/in-memory' component={InMemory} />
            <Route path='/legal' component={Legal} />
          </Switch>
        </div>
      </ScrollToTop>
    </Router>
  )
}

export default App
