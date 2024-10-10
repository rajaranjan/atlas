import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import App from './App';


let wrapper
const mockStore = configureStore([])
const store = mockStore({})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});