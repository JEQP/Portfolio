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
    <div>
      <Switch>
          <Route exact path={["/", "/Portfolio"]} component={Portfolio}>
            {/* <Portfolio /> */}
          </Route>
          <Route exact path="/about" component={About}>
            {/* <About /> */}
          </Route>
          <Route exact path="/contact" component={Contact}>
            <Contact />
          </Route>
          <Route>
            {/* <Portfolio /> */}
          </Route>
        </Switch>
     
    </div>
    </HashRouter>
  );
}

export default App;
