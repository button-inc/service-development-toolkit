import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from 'component-library-gov/lib/Button';
import Button2 from 'component-library/lib/Button';

function App() {
  return (
    <div className="App">
      <Button primary>CLICK</Button>
      <Button2 primary>CLICK</Button2>
    </div>
  );
}

export default App;
