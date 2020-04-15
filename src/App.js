import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Header from "./components/Header";

function App() {
  return (
    <HashRouter basename="/">
      <div class="aboutDiv">
        <Switch>
          <Route exact path="/about" >
            <About />
          </Route>
          <Route exact path="/contact" >
            <Contact />
          </Route>
          <Route exact path="/Portfolio">
            <Portfolio />
          </Route>
        </Switch>
        <Route exact path={"/"} >
          <Portfolio />
        </Route>

      </div>
    </HashRouter>
  );
}

export default App;
