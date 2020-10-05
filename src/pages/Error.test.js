import React from 'react';
import ReactDOM from 'react-dom';
import Error from './Error';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Error />, div);
});