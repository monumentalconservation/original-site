import React, { Component } from 'react';
import Border from './Border'
import HomeIntro from './HomeIntro'
import HomeMainText from './HomeMainText'

// images (some unused)
import lochranza from '../images/sites/lochranza-rainbow.jpg'
import lock from '../images/sites/cearverlock.jpg'
import achnabreck from '../images/sites/achnabreck2.jpg'

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

        <Border alignment="left" />

        {/* next load of grid stuff... */}
        {/* TODO - refcator this... */}
        <section className="secondary-text">
          <div className="f5 f4-m f3-ns grid-item-1 pa4 lh-copy inverted">
            Specifically, we will be looking at exactly what we can measure reliably using visitors photographs and how many images are needed for it to be a reliable method of monitoring. We will be attempting to measure discolouration and colour change, erosion, moss and lichen growth, erosion as well as vandalism. We will also study how many images have to be submitted to allow for a If enough images are submitted, we intend to use AI for the identification and measurement
          </div>
          <img src={achnabreck} className="grid-item-2 grayscale w-100 h-auto" />
          <div className="f5 f4-m f3-ns grid-item-3 pa4 lh-copy inverted">
            The sites selected are widely spread across Scotland and are a healthy mix of castles, neolithic monuments, churches and iron age forts. Check out the <a href="/sites">sites</a> page to see if there is one near you!
          </div>
          <img src={lock} className="grid-item-4 grayscale w-100 h-auto" />
          <div className="f5 f4-m f3-ns grid-item-5 pa4 lh-copy inverted">
            Monument Monitor is a jointly funded PhD research project between <a href="" target="_blank">Historic Environment Scotland</a> (HES) and the <a href="" target="_blank">Institute of Sustainable Heritage</a> at University College London (UCL).  
            Visit our <a href="/about">about</a> page to see who's who.
          </div>
        </section>

      </div>
    );
  }
}

export default Home;