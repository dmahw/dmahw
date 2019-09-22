import React from 'react';
import './css/WorkExperience.css';

import WorkExperienceNavBar from './WorkExperienceNavBar';

class WorkExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workExperienceActiveId: 'corvus-energy',
      references: {
        refCorvusEnergy: React.createRef(),
        refGEDigital: React.createRef(),
        refRidgeTheatrePlayhouse: React.createRef(),
        refBeachHouse: React.createRef(),
      }
    }
    this.handleWorkExperienceNavBarClick = this.handleWorkExperienceNavBarClick.bind(this)
  }

  handleWorkExperienceNavBarClick(id, reference) {
    this.setState({
      workExperienceActiveId: id
    })
    if (reference !== null) {
      window.scrollTo({top: (reference.current.offsetTop - 175), left: 0, behavior: "smooth"})
    }
  }

  render () {
    return (
      <div className="work-experience-background">
        <WorkExperienceNavBar 
          workExperienceActiveId = {this.state.workExperienceActiveId}
          handleWorkExperienceNavBarClick = {this.handleWorkExperienceNavBarClick}
          references = {this.state.references}
        />
        <div className="work-experience-container">
          <h1 className="work-experience-header">Work Experience</h1>

          <div className="work-experience-row">
            <div className="work-experience-col">
              <div className="work-experience-heading-container">
                <div className="work-experience-logo-1"></div>
                <h2 ref={this.state.references.refCorvusEnergy} className="work-experience-heading-1">Corvus Energy</h2>
              </div>
              <p className="work-experience-1-1">Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
            </div>
            <div className="work-experience-col">
              <div className="work-experience-1-2"></div>
            </div>
          </div>

          <div className="work-experience-row-breaker"></div>

          <div className="work-experience-row">
            <div className="work-experience-col">
              <div className="work-experience-heading-container">
                <div className="work-experience-logo-2"></div>
                <h2 ref={this.state.references.refGEDigital} className="work-experience-heading-2">GE Digital</h2>
              </div>
              <p className="work-experience-2-1">Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
            </div>
            <div className="work-experience-col">
              <div className="work-experience-2-2"></div>
            </div>
          </div>

          <div className="work-experience-row-breaker"></div>

          <div className="work-experience-row">
            <div className="work-experience-col">
              <div className="work-experience-heading-container">
                <div className="work-experience-logo-3"></div>
                <h2 ref={this.state.references.refRidgeTheatrePlayhouse} className="work-experience-heading-3">Ridge Theatre Playhouse</h2>
              </div>
              <p className="work-experience-3-1">Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
            </div>
            <div className="work-experience-col">
              <div className="work-experience-3-2"></div>
            </div>
          </div>

          <div className="work-experience-row-breaker"></div>

          <div className="work-experience-row">
            <div className="work-experience-col">
              <div className="work-experience-heading-container">
                <div className="work-experience-logo-4"></div>
                <h2 ref={this.state.references.refBeachHouse} className="work-experience-heading-4">The Beach House Restaurant</h2>
              </div>
              <p className="work-experience-4-1">Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
            </div>
            <div className="work-experience-col">
              <div className="work-experience-4-2"></div>
            </div>
          </div>
          
        </div>
      </div> 
    )
  }
}

export default WorkExperience;