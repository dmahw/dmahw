import React from 'react';
import './App.css';
import HeroHeader from './components/HeroHeader';
import NavigationBar from './components/NavigationBar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar></NavigationBar>
      </header>
      <HeroHeader></HeroHeader>

    </div>
  );
}

export default App;
