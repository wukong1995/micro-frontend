import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Provider } from 'react-redux';
// import store from './store'
import Index from './pages/Index'

class ListRoot extends React.Component<any, any> {
  render() {
    const { globalEventDistributor, store } = this.props
    console.log('pppp')
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
                    <Route exact path="/index" render={(props) => <Index {...props} globalEvent={globalEventDistributor} />} />
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
}

export default ListRoot;