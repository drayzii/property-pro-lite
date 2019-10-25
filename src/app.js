import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store/index';
import NotFound from './components/notFound';
import LandingPage from './components/landingPage';
import Signup from './components/signup';
import './styles/index.scss';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={Signup} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
