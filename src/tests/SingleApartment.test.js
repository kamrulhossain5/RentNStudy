import React from 'react';
import ReactDOM from 'react-dom';
import SingleApartment from '../pages/SingleApartment';
import { BrowserRouter } from 'react-router-dom'

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><SingleApartment /></BrowserRouter>, div);
});
