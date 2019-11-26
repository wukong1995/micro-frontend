import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store'
import Index from './pages/Index'

const AnimationExample = () => {
  return (
    <Provider store={store}>
      <Router basename="/list">
        <Route
          render={() => (
            <div style={{ position: 'relative', height: '100%' }}>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/index" />}
              />

              <div>
                <Switch>
                  <Route path="/index" component={Index} />
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