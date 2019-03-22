import React, { Component } from 'react';
import takingPhotograph from '../images/me-photo-min.jpg'

class HomeIntro extends Component {  
  render() {
    return (
      <section className="leader mh5-ns">
        <h2 className="f3 f2-l normal lh-title-ns w-70-ns mh4 mb4 mv5-l ">
            Monument Monitor is a collaborative research project between Historic Environment Scotland and University College London which aims to assess how we can visitors photographs of our properties to inform our site conservation and monitoring efforts.
        </h2>
        <div className="photo w-100 overflow-auto pb5-ns">
          <img className="w-60-ns fr-ns grayscale" src={takingPhotograph}/>
        </div>
      </section>
    );
  }
}

export default HomeIntro;