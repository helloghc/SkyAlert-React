import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import App from './views/app'
import SuitedeSoluciones from './views/suitede-soluciones'
import REDSkyAlert from './views/r-e-d-sky-alert'
import Home from './views/home'
import PorQuSkyAlert from './views/por-qu-sky-alert'
import Blog from './views/blog'
import Prensa from './views/prensa'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={App} path="/app" />
        <Route
          exact
          component={SuitedeSoluciones}
          path="/suite-de-soluciones"
        />
        <Route exact component={REDSkyAlert} path="/red-skyalert" />
        <Route exact component={Home} path="/" />
        <Route exact component={PorQuSkyAlert} path="/por-que-skyalert" />
        <Route exact component={Blog} path="/blog" />
        <Route exact component={Prensa} path="/prensa" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
