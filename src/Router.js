import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './layout'

import Home from './page/Home'
import Video from './page/Video'
import About from './page/About'

export default function MyRouter() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/videos"
          render={() => (
            <Layout>
              <Video />
            </Layout>
          )}
        ></Route>
        <Route
          exact
          path="/about"
          render={(props) => (
            <Layout {...props}>
              <About />
            </Layout>
          )}
        ></Route>
        <Route
          exact
          path="/"
          render={(props) => (
            <Layout {...props}>
              <Home />
            </Layout>
          )}
        ></Route>
      </Switch>
    </Router>
  )
}
