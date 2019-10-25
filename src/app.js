import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import './index.scss';

const App = () => {
    return(
        <Provider store={store}>
          <div className="cool">
            Hello World
          </div>
        </Provider>
      );
}

export default App;