import React, { Component } from 'react';
import takingPhotograph from '../images/me-photo-min.jpg'
import lochranza from '../images/lochranza-rainbow.jpg'
import ness from '../images/ness.jpg'
import lochDoon from '../images/loch-doon.jpg'
import achnabreck from '../images/achnabreck.jpg'

class Home extends Component {
  render() {
    return (
      <div className="Home">

        {/* this is felx in mobile veiw - grid tablet and desktop */}
        <section className="leader mh5-ns">
          <h2 className="f3 f2-l normal lh-title-ns w-70-ns mh4 mb4 mv5-l ">
              Monument Monitor is a collaborative research project between Historic Environment Scotland and University College London which aims to assess how we can visitors photographs of our properties to inform our site conservation and monitoring efforts.
          </h2>
          <div className="photo w-100 overflow-auto pb5-ns">
            <img className="w-60-ns fr-ns grayscale" src={takingPhotograph}/>
          </div>
        </section>

        <section className="border-left"></section>
        
        
        
        <section className="main-text mb8">
          <img src={lochDoon} className="grid-item-2 grayscale" />
          <div className="f3 grid-item-1 pa4 lh-copy inverted">
            Similar to other heritage institutions of its size, Historic Environment Scotland has over 300 properties in it's care. These range from huge castles in the middle of cities to tumbledown brochs on remote islands. The team of conservation architects do a fantastic job managing their conservation, but they cannot be everywhere at once. It is difficult to monitor long term trends at more remote and less visited locations. 
          </div>
          <div className="f3 grid-item-3 pa4 lh-copy inverted">
            Historic properties however, are popular tourist attractions. In a recent survey by the Department for Digital, Culture Media and Sport, 73% of respondents had visited a heritage site in the past year; a figure which has been rising almost year on year. Visitors carry increasingly more sophisticated mobile phones with which many record their visits and share online. Why not use these photographs to monitor heritage sites remotely?
          </div>
          <img src={ness} className="grid-item-4 grayscale" />
          <div className="f3 grid-item-5 pa4 lh-copy inverted">
            Over the next two years this project will run at 20 different sites across Scotland. Signs will ask visitors to take photographs of specific things at each site and submit them via email, whatsapp, twitter or instagram using the hashtag #monumentmonitor. We will then use the photographs to monitor long term issues effecting each site to try and establish to what extent visitors photographs can be used for this purpose. 
          </div>
        </section>

        <section className="border-right"></section>

        <h1 className="f3 f2-m f1-l normal tc ma5 ">
          To what extent can we 'crowdsource conservation'?
        </h1>
          {/* </div> */}
        <section className="image-line grayscale">
          <img src={lochranza}/>
        </section>

      </div>
    );
  }
}

export default Home;