import React from 'react';
import './App.css';
import HeroHeader from './components/HeroHeader';
import NavigationBar from './components/NavigationBar'

function App() {
  return (
    <div className="App">
      <head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      </head> 
      <header className="App-header">
        <NavigationBar></NavigationBar>
      </header>
      <HeroHeader></HeroHeader>
    </div>
  );
}

export default App;
