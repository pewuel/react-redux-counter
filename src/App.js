import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import IncreaseButton from './components/IncreaseButton';
import Counter from './components/Counter';
import Timer from './components/Timer';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="app">
              <div className="app__wrap">
                  <div className="app__values">
                      <Counter />
                      <Timer/>
                  </div>
                  <IncreaseButton />
              </div>
          </div>
        </Provider>
    );
  }
}

export default App;


