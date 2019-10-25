import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store/index';
import NotFound from './components/notFound';
import LandingPage from './components/landingPage';
import Footer from './components/footer';
import './styles/index.scss';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
    <Footer />
  </Provider>
);

export default App;
