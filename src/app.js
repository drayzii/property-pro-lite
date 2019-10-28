import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './store/index';
import NotFound from './components/notFound';
import LandingPage from './components/landingPage';
import Signup from './components/signup';
import Signin from './components/signin';
import './styles/index.scss';

const App = () => (
  <Provider store={store}>
    <ToastContainer />
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/sign-up" component={Signup} />
        <Route exact path="/sign-in" component={Signin} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
