import React from 'react';
import './App.css';
import PrimaryNavigationBar from './components/PrimaryNavigation'
import PrimaryContent from './components/PrimaryContent'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      primaryNavigationBarSelection: 'hobbies-interests',
    }
    this.handlePrimaryNavigationBarClick = this.handlePrimaryNavigationBarClick.bind(this)
  }

  handlePrimaryNavigationBarClick(primaryNavigationBarSelectionId) {
    this.setState({
      primaryNavigationBarSelection: primaryNavigationBarSelectionId
    });
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <PrimaryNavigationBar
          primaryNavigationBarSelection = {this.state.primaryNavigationBarSelection}
          handlePrimaryNavigationBarClick = {this.handlePrimaryNavigationBarClick}
        />
        <PrimaryContent 
          primaryNavigationBarSelection = {this.state.primaryNavigationBarSelection}
        />
      </div>
    );
  }
}

export default App;
