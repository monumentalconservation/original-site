import React, { Component } from 'react';
import ness from '../images/ness.jpg'
import lochDoon from '../images/loch-doon.jpg'


class HomeMainText extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const {alignment} = this.props
    return (
      <section className="main-text mb8">
        <img src={lochDoon} className="grid-item-2 grayscale w-100 h-auto" />
        <div className="f5 f4-m f3-ns grid-item-1 pa4 lh-copy inverted">
          Similar to other heritage institutions of its size, Historic Environment Scotland has over 300 properties in it's care. These range from huge castles in the middle of cities to tumbledown brochs on remote islands. The team of conservation architects do a fantastic job managing their conservation, but they cannot be everywhere at once. It is difficult to monitor long term trends at more remote and less visited locations. 
        </div>
        <div className="f5 f4-m f3-ns grid-item-3 pa4 lh-copy inverted">
          Historic properties however, are popular tourist attractions. In a recent survey by the Department for Digital, Culture Media and Sport, 73% of respondents had visited a heritage site in the past year; a figure which has been rising almost year on year. Visitors carry increasingly more sophisticated mobile phones with which many record their visits and share online. Why not use these photographs to monitor heritage sites remotely?
        </div>
        <img src={ness} className="grid-item-4 grayscale w-100 h-auto" />
        <div className="f5 f4-m f3-ns grid-item-5 pa4 lh-copy inverted">
          Over the next two years this project will run at 20 different sites across Scotland. Signs will ask visitors to take photographs of specific things at each site and submit them via email, whatsapp, twitter or instagram using the hashtag #monumentmonitor. We will then use the photographs to monitor long term issues effecting each site to try and establish to what extent visitors photographs can be used for this purpose. 
        </div>
      </section>

    );
  }
}

export default HomeMainText;