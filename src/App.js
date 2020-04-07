import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Header from "./components/Header";

function App() {
  return (
    <Router>
    <div>
      {/* <Header /> */}
      <Switch>
          <Route exact path={["/", "/Portfolio"]}>
            <Portfolio />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route>
            <Portfolio />
          </Route>
        </Switch>
     
    </div>
    </Router>
  );
}

export default App;
