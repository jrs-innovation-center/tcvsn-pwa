import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Resources from './pages/resources'
import About from './pages/about'
import InMemory from './pages/in-memory'
import Legal from './pages/legal'

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/resources" component={Resources} />
        <Route path="/about" component={About} />
        <Route path="/in-memory" component={InMemory} />
        <Route path="/legal" component={Legal} />
      </div>
    </BrowserRouter>
  )
}

export default App
