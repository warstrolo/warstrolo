import React from 'react';
import Header from './blocs/header';
import Hero from './blocs/hero';
import Skils from './blocs/skils';
import logo from './logo.svg';


function App() {
  return (
    <div className="bg-base-300">
    <Header/>
    <Hero/>
    <Skils/>
    </div>
  );
}

export default App;
