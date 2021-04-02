import "./App.css"
//import React from 'react';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch,Route} from "react-router-dom"
import { Home } from "./Pages/Home";
import {Gallery} from "./Pages/Gallery";
import {About} from "./Pages/About";



function App() {
  return (
    <>
        <Router>
          <NavBar />

          <div className = "pages">
            <Switch>
              <Route exact path = "/Home" component = {Home} />
              <Route exact path = "/Gallery" component = {Gallery} />
              <Route exact path = "/About" component = {About} />
            </Switch>
          </div>
        </Router>
    </>
  );
}

export default App
