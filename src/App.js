import React from "react";

import Topbar from "./components/topbar/Topbar";
import Header from "./components/header/Header";

import Dashbord from "./components/dashbord/Dashbord";

import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Topbar />

          <Header
            title="we R stupid life"
            para="inspire & get inspire"
            paragraph="beautifuly crafted motivational products,for your daily boost off inspiration"
            button="get started"
          />
          <Dashbord />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            {/* <Route path="/blogData">
              <Blog />
              <SinglePost />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
