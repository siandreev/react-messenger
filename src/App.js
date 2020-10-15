import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Window, AuthorizationForm, RegistrationForm} from "modules";

import 'styles/authorization-panel.scss'
import 'styles/app.scss';

function App() {


  return (
      <Router>
          <Switch>
              <Route path="/login" exact>
                  <div className="authorization-panel">
                      <AuthorizationForm />
                  </div>
              </Route>
              <Route path="/signup" exact>
                  <div className="authorization-panel">
                      <RegistrationForm />
                  </div>
              </Route>
              <Route path="/" exact>
                  <Window />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
