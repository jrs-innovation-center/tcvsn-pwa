import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Resources from './pages/resources/index'
import ShowResource from './pages/resources/show'
import About from './pages/about'
import InMemory from './pages/in-memory'
import Legal from './pages/legal'

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/resources/:id" component={ShowResource} />
          <Route path="/resources" component={Resources} />
          <Route path="/about" component={About} />
          <Route path="/in-memory" component={InMemory} />
          <Route path="/legal" component={Legal} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
