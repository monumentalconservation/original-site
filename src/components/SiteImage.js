import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';

import ImageLoader from './ImageLoader';

class SiteImage extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {image, name} = this.props
    return (
      <div className="site">
        <LazyLoad 
          debounce={false}
          offsetVertical={500}>
            <ImageLoader 
              src={image}
              alt={name}
            />

          {/* <img 
            className="grayscale" 
            src=
            alt={name}
            /> */}
        </LazyLoad>
        <div className="site-name">
          <h3 className="f3 ma0">{name}</h3>
        </div>
      </div>
    );
  }
}

export default SiteImage;
