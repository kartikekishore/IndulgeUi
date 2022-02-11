import './App.css';
import React  from "react";
import { Landing, Home} from "./views";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
       <Switch>
       <Route path="/" exact component={Landing} />
       <Route path="/home" exact component={Home} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
