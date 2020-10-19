import React from 'react';
import ReactDOM from 'react-dom';
import Error from '../pages/Error';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Error />, div);
});
