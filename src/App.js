import React from 'react';
import './App.css';
import NumericCounter from './components/NumericCounter';

function App() {
  return (
    <div className="App">
      <NumericCounter initialValue={5} />
    </div>
  );
}

export default App;