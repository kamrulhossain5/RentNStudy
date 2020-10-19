import React from 'react';
import ReactDOM from 'react-dom';
import SingleApartment from '../pages/SingleApartment';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SingleApartment />, div);
});
