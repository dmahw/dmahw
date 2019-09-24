import React from 'react';
import './App.css';
import PrimaryNavigationBar from './components/PrimaryNavigation'
import PrimaryContent from './components/PrimaryContent'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      primaryNavigationBarSelection: 'home',
      references: {
        refHome: React.createRef(),
        refAboutMe: React.createRef(),
        refEducation: React.createRef(),
        refWorkExperience: React.createRef(),
        refHobbiesInterests: React.createRef(),
        // refProjects: React.createRef(),
        refContact: React.createRef(),
      }
    }
    this.handlePrimaryNavigationBarClick = this.handlePrimaryNavigationBarClick.bind(this)
  }

  handlePrimaryNavigationBarClick(primaryNavigationBarSelectionId, reference) {
    this.setState({
      primaryNavigationBarSelection: primaryNavigationBarSelectionId
    });
    if (reference !== null && reference !== undefined) {
      window.scrollTo({top: (reference.current.offsetTop - 200), left: 0, behavior: "smooth"})
    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <PrimaryNavigationBar
          primaryNavigationBarSelection = {this.state.primaryNavigationBarSelection}
          handlePrimaryNavigationBarClick = {this.handlePrimaryNavigationBarClick}
          references = {this.state.references}
        />
        <PrimaryContent 
          primaryNavigationBarSelection = {this.state.primaryNavigationBarSelection}
          references = {this.state.references}
        />
        <footer className="App-footer">
          <b>David Mah</b>
          <br></br>
          <br></br>
          React JS
          <br></br>
          Hosted by Amazon Web Services
        </footer>
      </div>
    );
  }
}

export default App;
