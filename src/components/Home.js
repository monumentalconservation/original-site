import React, { Component } from 'react';
import takingPhotograph from '../images/me-photo.jpg'
import lochranza from '../images/lochranza-rainbow.jpg'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <section className="flex flex-wrap ">
          <div className="w-60-ns">
            <h2 className="f2 normal lh-title-ns mt3 pl5-ns">
              {/* <div className="mb4"> */}
                Monument Monitor is a collaborative research project between Historic Environment Scotland and University College London which aims to assess how we can visitors photographs of our properties to inform our site conservation and monitoring efforts.
              {/* </div> */}
            </h2>
          </div>
          <div className="w-40-ns mt7">
            <img className="" src={takingPhotograph}/>
          </div>
          <div>
            <h1>
              To what extent can we 'crowdsource conservation'?
            </h1>
          </div>
        </section>
        <section>
          <img src={lochranza}/>
        </section>
      </div>
    );
  }
}

export default Home;