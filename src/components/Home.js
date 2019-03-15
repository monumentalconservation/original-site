import React, { Component } from 'react';
import takingPhotograph from '../images/taking-a-picture.png'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <section>
          <div>
            Monument Monitor is a collaborative research project between Historic Environment Scotland and University College London which aims to assess how we can visitors photographs of our properties to inform our site conservation and monitoring efforts.
          </div>
          <img src={takingPhotograph}/>
          <div>To what extent can we 'crowdsource conservation'?</div>
        </section>
      </div>
    );
  }
}

export default Home;