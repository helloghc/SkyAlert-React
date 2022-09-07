import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import AppSkyAlert from './views/app-sky-alert'
import Suite from './views/suite'
import REDSkyAlert from './views/r-e-d-sky-alert'
import Home from './views/home'
import PorQuSky from './views/por-qu-sky'
import Blog from './views/blog'
import Prensa from './views/prensa'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={AppSkyAlert} exact path="/app" />
        <Route component={Suite} exact path="/suite-de-soluciones" />
        <Route component={REDSkyAlert} exact path="/red-skyalert" />
        <Route component={Home} exact path="/" />
        <Route component={PorQuSky} exact path="/por-que-skyalert" />
        <Route component={Blog} exact path="/blog" />
        <Route component={Prensa} exact path="/prensa" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
