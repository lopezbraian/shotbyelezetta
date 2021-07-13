import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./layout";

import Home from "./page/Home";
import Video from "./page/Video";

import photo2 from "./assets/album/image3.jpg";
import photo1 from "./assets/album/image1.jpg";
import photo3 from "./assets/album/image4.jpg";
import photo4 from "./assets/album/image6.jpg";
import photo5 from "./assets/album/image9.jpg";
import photo6 from "./assets/album/image11.jpg";

const images = [photo1, photo2, photo3, photo4, photo5, photo6];

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
          path="/"
          render={() => (
            <Layout>
              <Home data={images} />
            </Layout>
          )}
        ></Route>
      </Switch>
    </Router>
  );
}
