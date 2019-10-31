import React from 'react';
import './css/WorkExperience.css';
import './css/WorkExperienceSmall.css';
import MediaQuery from 'react-responsive'


class WorkExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      workExperienceActiveId: 'corvus-energy',
    }
  }

  render () {
    return (
      
      <div>
        <MediaQuery minWidth={800}>
          <div ref={this.props.reference} className="work-experience-background">
            <div className="work-experience-container">
              <h1 className="work-experience-header">Work Experience</h1>

              <div className="work-experience-row-1">
                <div className="work-experience-words-1">
                  <div className="work-experience-heading-container">
                    <div className="work-experience-logo-1"></div>
                    <div className="work-experience-heading-words-1">
                      <h2 className="work-experience-heading-1">Corvus Energy</h2>
                      <i className="work-experience-subtitle-1">Software Developer | May 2018 - December 2018</i>
                    </div>
                  </div>
                  <p className="work-experience-text-1">
                    Working as a Software Developer, I was responsible for analyzing and implementing features into an application that helps Corvus Energy clients and service personal communicate with Corvus Energy Storage Systems. Such features were built using HTML, JavaScript, and CSS; utilizing the JavaScript frameworks; Electron and Vue.js. 
                  </p>

                </div>
                <div className="work-experience-image-1">
                  <div className="work-experience-photo-1"></div>
                </div>
              </div>

              <div className="work-experience-row-2">
                <div className="work-experience-image-2">
                  <div className="work-experience-photo-2"></div>
                </div>
                <div className="work-experience-words-2">
                  <div className="work-experience-heading-container">
                    <div className="work-experience-logo-2"></div>
                    <div className="work-experience-heading-words-2">
                      <h2 className="work-experience-heading-2">GE Digital</h2>
                      <i className="work-experience-subtitle-2">Quality Assurance Engineer | September 2016 - April 2017</i>
                    </div>
                  </div>
                  <p className="work-experience-text-2">
                    As a Quality Assurance Engineer, it was my responsibility to develop automated and manual test suites, deploying virtual environments for testing, and performed extensive testing around new features and security measures. In our department, we focused on network and cybersecurity for commercial and industrial applications.
                  </p>
                </div>
              </div>

              <div className="work-experience-row-3">
                <div className="work-experience-words-3">
                  <div className="work-experience-heading-container">
                    <div className="work-experience-logo-3"></div>
                    <div className="work-experience-heading-words-3">
                      <h2 className="work-experience-heading-3">Ridge Theatre Playhouse</h2>
                      <i className="work-experience-subtitle-3">Lighting & Sound Technician | September 2010 - August 2014</i>
                    </div>
                  </div>
                  <p className="work-experience-text-3">
                    Working as a lighting and sound technician, I was responsible designing lighting plots for shows and musicals. During such events, I would operate the lighting or sound board and oversaw requests from the Ridge Theatre Playhouse clients.
                  </p>
                </div>
                <div className="work-experience-image-3">
                  <div className="work-experience-photo-3"></div>
                </div>
              </div>

              <div className="work-experience-row-4">
                <div className="work-experience-image-4">
                  <div className="work-experience-photo-4"></div>
                </div>
                <div className="work-experience-words-4">
                  <div className="work-experience-heading-container">
                    <div className="work-experience-logo-4"></div>
                    <div className="work-experience-heading-words-4">
                      <h2 className="work-experience-heading-4">The Beach House Restaurant</h2>
                      <i className="work-experience-subtitle-4">Kitchen Staff | July 2014 - August 2014</i>
                    </div>
                  </div>
                  <p className="work-experience-text-4">
                    As a kitchen staff at the Beach House Restaurant, I was responsible for meal preparation and dishwashing. It has taught me to find efficient solutions quickly and adapt to heavy workloads during peak hours.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={800}>
          <div ref={this.props.reference} className="work-experience-background-small">
            <div className="work-experience-container-small">
              <h1 className="work-experience-header-small">Work Experience</h1>

              <div className="work-experience-row-1-small">
                <div className="work-experience-heading-container-1-small">
                  <div className="work-experience-logo-1-small"></div>
                  <h2 className="work-experience-workplace-1-small">Corvus Energy</h2>
                  <div>
                    <i className="work-experience-subtitle-1-small">Software Developer | May 2018 - December 2018</i>
                  </div>
                </div>
                <p className="work-experience-text-1-small">
                  Working as a Software Developer, I was responsible for analyzing and implementing features into an application that helps Corvus Energy clients and service personal communicate with Corvus Energy Storage Systems. Such features were built using HTML, JavaScript, and CSS; utilizing the JavaScript frameworks; Electron and Vue.js. 
                </p>
              </div>

              <div className="work-experience-row-2-small">
                <div className="work-experience-heading-container-2-small">
                  <div className="work-experience-logo-2-small"></div>
                  <h2 className="work-experience-workplace-2-small">GE Digital</h2>
                  <div>
                    <i className="work-experience-subtitle-2-small">Quality Assurance Engineer | September 2016 - April 2017</i>
                  </div>
                </div>
                <p className="work-experience-text-2-small">
                  As a Quality Assurance Engineer, it was my responsibility to develop automated and manual test suites, deploying virtual environments for testing, and performed extensive testing around new features and security measures. In our department, we focused on network and cybersecurity for commercial and industrial applications.
                </p>
              </div>

              <div className="work-experience-row-3-small">
                <div className="work-experience-heading-container-3-small">
                  <div className="work-experience-logo-3-small"></div>
                  <h2 className="work-experience-workplace-3-small">Ridge Theatre Playhouse</h2>
                  <div>
                    <i className="work-experience-subtitle-3-small">Lighting & Sound Technician | September 2010 - August 2014</i>
                  </div>
                </div>
                <p className="work-experience-text-3-small">
                  Working as a lighting and sound technician, I was responsible designing lighting plots for shows and musicals. During such events, I would operate the lighting or sound board and oversaw requests from the Ridge Theatre Playhouse clients.
                </p>
              </div>

              <div className="work-experience-row-4-small">
                <div className="work-experience-heading-container-4-small">
                  <div className="work-experience-logo-4-small"></div>
                  <h2 className="work-experience-workplace-4-small">The Beach House Restaurant</h2>
                  <div>
                    <i className="work-experience-subtitle-4-small">Kitchen Staff | July 2014 - August 2014</i>
                  </div>
                </div>
                <p className="work-experience-text-4-small">
                  As a kitchen staff at the Beach House Restaurant, I was responsible for meal preparation and dishwashing. It has taught me to find efficient solutions quickly and adapt to heavy workloads during peak hours.
                </p>
              </div>

              
            </div>
          </div>
        </MediaQuery>
      </div> 
    )
  }
}

export default WorkExperience;