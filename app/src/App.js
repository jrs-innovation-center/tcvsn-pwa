import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home'
import Resources from './pages/resources'

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/resources" component={Resources} />
      </div>
    </BrowserRouter>
  )
}

export default App
