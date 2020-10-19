import React from 'react';
import './App.css';

import Home from './pages/Home';
import Apartments from './pages/Apartments';
import SingleApartment from './pages/SingleApartment';
import Error from './pages/Error';

function App() {
  return (
    <>
      <Home />
      <Apartments />
      <SingleApartment />
      <Error />
    </>
  );
}

export default App;
