import React from 'react';
import './css/HobbiesInterests.css';

import HobbiesInterestsNavBar from './HobbiesInterestsNavBar';

class HobbiesInterests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hobbiesInterestsActive: 'badminton',
      references: {
        refBadminton: React.createRef(),
        refVolleyball: React.createRef(),
        refSkiing: React.createRef(),
        refSpikeball: React.createRef(),
        refAutomotiveDriving: React.createRef(),
        refPianoMusic: React.createRef(),
        refNature: React.createRef(),
        refTechnology: React.createRef(),
      }
    }
    this.handleHobbiesInterestsNavBarClick = this.handleHobbiesInterestsNavBarClick.bind(this)
  }

  handleHobbiesInterestsNavBarClick(id, reference) {
    this.setState({
      hobbiesInterestsActive: id
    })
    if (reference !== null) {
      window.scrollTo({top: (reference.current.offsetTop - 175), left: 0, behavior: "smooth"})
    }
  }

  render () {
    return (
      <div>
        <HobbiesInterestsNavBar 
          hobbiesInterestsActive = {this.state.hobbiesInterestsActive}
          handleHobbiesInterestsNavBarClick = {this.handleHobbiesInterestsNavBarClick}
          references = {this.state.references}
        />
        <div className="hobbies-interests-container">
          <h1 className="hobbies-interests-header">Hobbies & Interests</h1>

          {/* <BadmintonContent /> */}

          <div className="hobbies-interests-row">
            <div className="hobbies-interests-col">
              <h2 ref={this.state.references.refBadminton} className="hobbies-interests-heading-1">Badminton</h2>
              <p className="hobbies-interests-1-1">
                I first started playing badminton when I was in elementary school and continued playing until grade 8, the year 2009. It was the longest sport that I was interested in, however I never played it seriously and quickly lost interest in it in middle school. Since, I rarely played any sports outside of school, instead I joined other extra curricular activities such as Stagecraft and Leadership.
                <br /><br />
                Starting in the summer of 2018 when I moved to Vancouver for a co-op position, I started playing badminton again, and made many new friends from it. I pretty much started as a beginner, however from playing at least twice a week to nearly every single day, I have learned a lot and now able to play extremely well against intermediate players. While my skill level is far from participating in tournaments, I am extremely grateful for playing badminton again as it got me interested in playing sports again, and I have made many new connections from it.
                <br /><br />
                To this day, I still play badminton frequently, slowly getting better at it, and meeting new people. It is a community that I am glad to be part of and hope to entice more of my friends to join. It is a great team bonding experience, allowing to you to really get to know someone based on their attitude and teamwork skills.
              </p>
            </div>
            <div className="hobbies-interests-col">
              <div className="hobbies-interests-1-2"></div>
            </div>
          </div>

          <div className="hobbies-interests-row-breaker"></div>

          <div className="hobbies-interests-row">
            <div className="hobbies-interests-col">
              <h2 ref={this.state.references.refVolleyball} className="hobbies-interests-heading-2">Volleyball</h2>
              <p className="hobbies-interests-2-1">
                In January of 2019, I started playing volleyball. My friends that I met through badminton convinced me to try volleyball and join their league at UVic. This league ran for 4 months, and was based on a ladder format, where points would be scored for every win, allowing your team to climbing up the ladder and play against higher skilled teams. Each team was a team of 6, and I only knew 2 of my teammates. I am thankful to have met such wonderful people playing in this league.
                <br></br><br></br>
                I barely knew how volleyball worked initially, or even how to bump or set a volleyball. From continuous practice and playing, learning from my teammates, and doing some research, I have gotten significantly better since the beginning. I pretty much play volleyball just as often as I play badminton now, playing at drop-ins with my friends, and in leagues on teams. I never thought I would be so interested in volleyball, but I guess you will never know until you try.
              </p>
            </div>
            <div className="hobbies-interests-col">
              <div className="hobbies-interests-2-2"></div>
            </div>
          </div>

          <div className="hobbies-interests-row-breaker"></div>

          <div className="hobbies-interests-row">
            <div className="hobbies-interests-col">
              <h2 ref={this.state.references.refSkiing} className="hobbies-interests-heading-3">Skiing</h2>
              <p className="hobbies-interests-3-1">
                Since I was a kid, I continuously went skiing every season at least once. In my mind, it is one of those sports where you should really enjoy while you can as you can only go so often on the west coast. My parents initially taught me the basics in skiing, however from there, it was on my own, purely learning through trial and error, and from my sisters and friends. 
                <br></br><br></br>
                I have tried snowboarding a couple times, however I found that I enjoyed skiing significantly more, mostly because I feel more agile and enjoy being able to move both my legs freely. Maybe in the future I will give snowboarding another try, however at this time, I will be continuing to ski.
                <br></br><br></br>
                Overall, the planning, preparing, traveling to the slopes, having fun, and then traveling back only to shower, clean up, and eat a large meal all makes up for a wonderful time and activity with your friends and family. 
              </p>
            </div>
            <div className="hobbies-interests-col">
              <div className="hobbies-interests-3-2"></div>
            </div>
          </div>

          <div className="hobbies-interests-row-breaker"></div>

          <div className="hobbies-interests-row">
            <div className="hobbies-interests-col">
              <h2 ref={this.state.references.refSpikeball} className="hobbies-interests-heading-4">Spikeball</h2>
              <p className="hobbies-interests-4-1">
                Roundnet, also known as Spikeball, is a sport that was first introduced to me by a few strangers at a park. I was particularly intrigued by it and watched them play for a couple rounds, eventually bringing me to have a small discussion and play a few rounds with them. Since then, myself, my friends, and my family play it casually and is always an awesome activity to play at the beach, the park, or the backyard.
                <br></br><br></br>
                One of the things I love about Spikeball is that the learning curve is extremely small. Someone who is completely new to the game could join in and still have an awesome time. Additionally, Spikeball doesn’t require much space nor equipment, as compared to badminton and volleyball. Simply gather a few of your friends, find some open space, setup the net, and have great time.
              </p>
            </div>
            <div className="hobbies-interests-col">
              <div className="hobbies-interests-4-2"></div>
            </div>
          </div>

          <div className="hobbies-interests-row-breaker"></div>

          <div className="hobbies-interests-row">
            <div className="hobbies-interests-col">
              <h2 ref={this.state.references.refAutomotiveDriving} className="hobbies-interests-heading-5">Automotive & Driving</h2>
              <p className="hobbies-interests-5-1">
                Beginning of my grade 12 year, 2013, I increasingly grew interest into the automotive field. Me and my friends would help each other modify our cars, ranging from car maintenance to modifications to the vehicle itself. As a side project, we built our own go kart with a small engine, welded steel pipe for the frame, and many other small parts. From this, I learned a lot about the technical aspects of a vehicle allowing to me to really understand how everything operates, make responsible purchasing decisions on used vehicles, and troubleshooting and maintaining vehicles throughout their lifetime.
                <br></br><br></br>
                Additionally, I quite enjoy driving, whether its in traffic or out on scenic roads. It really helps me destress and clears my mind, enabling me to think about each thought individually. 
                <br></br><br></br>
                On the other side of things from a joyful standpoint, just controlling the vehicle dynamics excites me. Being able to control such a large machinery and understanding how the physics works while driving really connects me to the vehicle and puts a smile on my face majority of the time.
                <br></br><br></br>
                PS. I do not own a Supra.
              </p>
            </div>
            <div className="hobbies-interests-col">
              <div className="hobbies-interests-5-2"></div>
            </div>
          </div>

          <div className="hobbies-interests-row-breaker"></div>

          <div className="hobbies-interests-row">
            <div className="hobbies-interests-col">
              <h2 ref={this.state.references.refPianoMusic} className="hobbies-interests-heading-6">Piano & Music</h2>
              <p className="hobbies-interests-6-1">
                Since I was a child, I started taking lessons to play piano. At the beginning, I was very interested in learning and playing, however as I grew going into grade 8, I lost my passion in it, only finishing up to 8 of the 10 levels in piano. I never really appreciated the skill until my first-year university. From here, I realized that piano has helped me in many ways, from pitch perfect hearing, hand manipulation skills, to even enhancing my creativity in designs, and understanding the passion and effort that is in many art pieces.
                <br></br><br></br>
                Closer to my final year in university, I started playing piano again, learning many new songs on my own. Piano is something in my home that isn’t digitalized but purely analog, making it a nice break away from electronics and technology, and another way for me to clear my mind and listen to my playing.
              </p>
            </div>
            <div className="hobbies-interests-col">
              <div className="hobbies-interests-6-2"></div>
            </div>
          </div>

          {/* <div className="hobbies-interests-row">
            <div className="hobbies-interests-col">
              <h2 className="hobbies-interests-heading-7">Music</h2>
              <p className="hobbies-interests-7-1">Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem </p>
            </div>
            <div className="hobbies-interests-col">
              <div className="hobbies-interests-7-2"></div>
            </div>
          </div> */}

          <div className="hobbies-interests-row-breaker"></div>

          <div className="hobbies-interests-row">
            <div className="hobbies-interests-col">
              <h2 ref={this.state.references.refNature} className="hobbies-interests-heading-8">Nature</h2>
              <p className="hobbies-interests-8-1">
                With a world that is surrounded by technology, it is nice to still admire the nature and wilderness that lies outside the city. Every so often, I would go on hikes, drive out to the mountains, go camping, just to get away from the city for a bit. It is truly a different perspective to view from the world from, allowing to have any open mind and organize your thoughts.
              </p>
            </div>
            <div className="hobbies-interests-col">
              <div className="hobbies-interests-8-2"></div>
            </div>
          </div>

          <div className="hobbies-interests-row-breaker"></div>


          <div className="hobbies-interests-row">
            <div ref={this.state.references.refTechnology} className="hobbies-interests-col">
              <h2 className="hobbies-interests-heading-9">Technology</h2>
              <p className="hobbies-interests-9-1">
                The advancements of technology since I was young is truly amazing. To this day, I still follow many technology news and media networks, all reporting on the latest research and development of technology today. It excites me to think how far we have come and what lies ahead in just a couple years. 
                <br></br><br></br>
                In high school, I took a huge interest in computers, and how they work and function, leading me to build my own computer. Additionally, I also quite enjoyed gaming with all my friends online, building up teamwork and communication skills. This led me to hosting servers, as a result, learning about networks and routing, CPU load, and a bit of programming. My early interest in computers, video games, and technology led me to pursue engineering, eventually deciding to get my Bachelors in Software Engineering.
              </p>
            </div>
            <div className="hobbies-interests-col">
              <div className="hobbies-interests-9-2"></div>
            </div>
          </div>

        </div>
      </div> 
    )
  }
}

export default HobbiesInterests;