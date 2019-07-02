import React, { Component } from 'react';

import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      isMobile: this.checkIfMobile()
    }
    window.addEventListener("resize", this.updateIfMobile)
  }

  // TODO: refactor this out
  updateIfMobile = () => {
    this.setState({
      isMobile: this.checkIfMobile()
    })
  }
  
  checkIfMobile = () => {
    var width = window.innerWidth
    return (width < 700) ?  true : false
  }

  render() {
    const {isMobile} = this.state
    return (
      <div className="Nav">
        { isMobile ? <MobileNav /> : <DesktopNav /> }
      </div>
    );
  }
}

export default Nav;

