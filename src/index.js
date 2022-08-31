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
        <Route exact component={AppSkyAlert} path="/app" />
        <Route exact component={Suite} path="/suite-de-soluciones" />
        <Route exact component={REDSkyAlert} path="/red-skyalert" />
        <Route exact component={Home} path="/" />
        <Route exact component={PorQuSky} path="/por-que-skyalert" />
        <Route exact component={Blog} path="/blog" />
        <Route exact component={Prensa} path="/prensa" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
