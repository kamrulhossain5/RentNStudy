import React from 'react';
import ReactDOM from 'react-dom';
import Error from '../pages/Error';
import { BrowserRouter } from 'react-router-dom'

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><Error /></BrowserRouter>, div);
});
