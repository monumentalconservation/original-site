import React, { Component } from 'react';
import Border from './Border'
import HomeIntro from './HomeIntro'
import HomeMainText from './HomeMainText'

// images (some unused)
import lochranza from '../images/lochranza-rainbow.jpg'

class Home extends Component {
  render() {
    return (
      <div className="Home">

        <HomeIntro />
        
        <Border alignment="left" />
        
        <HomeMainText />

        <Border alignment="right" />

        <h1 className="f3 f2-m f1-l normal tc ma5 ">
          To what extent can we 'crowdsource conservation'?
        </h1>

        <section className="image-line grayscale">
          <img alt="Rainbow over Lochranza castle" src={lochranza}/>
        </section>

      </div>
    );
  }
}

export default Home;