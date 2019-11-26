import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Provider } from 'react-redux';
import Signin from './page/Signin';
import SignUp from './page/SignUp';
import store from './store'

const NavLink = props => (
  <li>
    <Link {...props} />
  </li>
);

const AnimationExample = () => {
  return (
    <Provider store={store}>
      <Router basename="/home">
        <Route
          render={() => (
            <div style={{ position: 'relative', height: '100%' }}>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/signin" />}
              />

              <ul>
                <NavLink to="/signin">signin</NavLink>
                <NavLink to="/signup">signup</NavLink>
              </ul>

              <div>
                <Switch>
                  <Route path="/signin" component={Signin} />
                  <Route path="/signup" component={SignUp} />
                  <Route render={() => <div>Not Found</div>} />
                </Switch>
              </div>
            </div>
          )}
        />
      </Router>
    </Provider>
  )
};


export default AnimationExample;