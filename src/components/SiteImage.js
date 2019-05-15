import React, { Component } from 'react';

class SiteImage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {image, name} = this.props
    return (
      <div className="site">
        <img 
          className="grayscale" 
          src={image}
          alt={name}
        />
        <div className="site-name">
          <h3 className="f3 ma0">{name}</h3>
        </div>
      </div>
    );
  }
}

export default SiteImage;
