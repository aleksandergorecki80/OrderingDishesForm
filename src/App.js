import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Components
import Order from './components/Order';
import Summary from './components/Summary';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Fragment>
            <Route exact path="/" component={Order} />
            <Route exact path="/summary" component={Summary} />
          </Fragment>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
