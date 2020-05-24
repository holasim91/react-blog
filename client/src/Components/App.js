import React from "react";
import { Route, Switch } from "react-router-dom";
import About from './About'
import Home from './Home'
import Login from './RegisterLogin'

function App() {
  return (
    <div>
      <Switch>
        {/* <Route path="/" component={Home} /> */}
        <Route path="/about" exact component={About} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </div>
  );
}

export default App;
