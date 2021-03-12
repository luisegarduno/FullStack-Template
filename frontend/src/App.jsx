import React from 'react';
import './App.css';
import { Home } from './App/Home'
import { LoginPage } from './App/login/LoginPage';
import { CreateAccount } from './App/login/CreateAccount';
import { BrowserRouter as Router,Route, Switch} from "react-router-dom";

const App = props => {
  return(
    <div className = "background1">
      <div className = "layer">
        <Router>
          <Switch>
            <Route exact path ="/" component={LoginPage} />
            <Route exact path="/register" component={CreateAccount} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App;
