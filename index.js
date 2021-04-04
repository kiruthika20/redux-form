import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {Provider} from 'react-redux';
import store from './store';
import Form from './form';

class TestComp extends Component {
  state= {initialValues: null};
  constructor(props){
    super(props);
  }
  setInitialValue = () => {
    this.setState({ initialValues: { firstName: 'vijay', lastName: 'M' } })
  }
  render() {
    return (
      <div>
        <Form initialValues={this.state.initialValues}  />
        <button onClick={this.setInitialValue}>Initialize from OUT</button>
      </div>)
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'krithika'
    };
  }

  render() {
    return (
      <Provider store={store}>
      <div className='center'>
        <Hello name={this.state.name} />
        <TestComp />
      </div>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
