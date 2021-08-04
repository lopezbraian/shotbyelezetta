import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./layout";

import Home from "./page/Home";
import Video from "./page/Video";
import About from "./page/About";
import Photography from "./page/Photography";
import Photos from './page/Photo'

export default function MyRouter() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/videos"
          render={(props) => (
            <Layout {...props}>
              <Video {...props} />
            </Layout>
          )}
        ></Route>
        <Route
          exact
          path="/about"
          render={(props) => (
            <Layout {...props}>
              <About {...props} />
            </Layout>
          )}
        ></Route>
        <Route
          exact
          path="/photos/:category"
          render={(props) => (
            <Layout typeMenuMini={true} {...props}>
              <Photography {...props} />
            </Layout>
          )}
        ></Route>
        <Route
          exact
          path="/photos"
          render={(props) => (
            <Layout typeMenuMini={true} {...props}>
              <Photos {...props} />
            </Layout>
          )}
        ></Route>
        <Route
          path="/"
          render={(props) => (
            <Layout {...props}>
              <Home {...props} />{" "}
            </Layout>
          )}
        ></Route>
      </Switch>
    </Router>
  );
}
