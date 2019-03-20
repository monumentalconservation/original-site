import React, { Component } from 'react';
import takingPhotograph from '../images/me-photo.jpg'
import lochranza from '../images/lochranza-rainbow.jpg'

class Home extends Component {
  render() {
    return (
      <div className="Home">

        {/* this is felx in mobile veiw - grid tablet and desktop */}
        <section className="leader flex flex-wrap">
          {/* <div className="lead-text"> */}
            <h2 className="f3 f2-l normal lh-title-ns mh4 mb4 ma0-ns mt3-l ">
              {/* <div className="mb4"> */}
                Monument Monitor is a collaborative research project between Historic Environment Scotland and University College London which aims to assess how we can visitors photographs of our properties to inform our site conservation and monitoring efforts.
              {/* </div> */}
            </h2>
          {/* </div> */}
          <div className="photo">
            <img className="" src={takingPhotograph}/>
          </div>
          {/* <div> */}
            <h1 className="f3 f2-ns tc tl-ns mv4 ma0-ns">
              To what extent can we 'crowdsource conservation'?
            </h1>
          {/* </div> */}
        </section>
        <section className="image-line">
          <img src={lochranza}/>
        </section>
      </div>
    );
  }
}

export default Home;