import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Apartments from '../pages/Apartments';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Apartments />, div);
}); 