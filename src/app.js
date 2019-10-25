import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store/index';
import HelloWorld from './components/helloWorld';
import NotFound from './components/notFound';
import './index.scss';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/hello-world" component={HelloWorld} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
