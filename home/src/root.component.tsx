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
import Signup from './page/Signup';
// import store from './store'

const NavLink = props => (
  <li>
    <Link {...props} />
  </li>
);

class AnimationExample extends React.Component<any, any> {
   render() {
    const { globalEventDistributor, store} = this.props
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
                    <Route path="/signin" render={(props) => <Signin {...props} globalEvent={globalEventDistributor} />} />
                    <Route path="/signup" render={(props) => <Signup {...props} globalEvent={globalEventDistributor} />} />
                    <Route render={() => <div>Not Found</div>} />
                  </Switch>
                </div>
              </div>
            )}
          />
        </Router>
      </Provider>
    )
  }
};


export default AnimationExample;