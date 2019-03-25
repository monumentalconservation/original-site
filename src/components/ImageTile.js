import React, { Component } from 'react';

// overlay for image tile
const Overlay = ({showInfo, title, text, twitter, email}) => (
  <div 
    className="absolute w-100 h-100 flex items-center pa3 pa4-ns overlay"
    style={{
      transform: showInfo? 'none' : 'translateY(-100%)'
    }}
  >
    <div>
      <h1 className="f5 f3-ns mt0 mb2 regular lh-title">{title}</h1>
      <p className="lh-copy-ns mt0 mb2 f6 f4-s measure-l">{text}</p>
      <p className="lh-copy-ns mt0 mb2 f5 f4-s measure-l tc">{twitter}</p>
      <p className="lh-copy-ns mv0 f5 f4-s measure-l tc">{email}</p>
    </div>
  </div>
)

class ImageTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false
    };
    // explicitly bind this to made our function
    this.toggleInfo = this.toggleInfo.bind(this);
    this.closeInfo = this.closeInfo.bind(this);
  }

  toggleInfo() {
    this.setState((prevState, props) => ({
      showInfo: !prevState.showInfo
    }));
  }

  closeInfo() {
    this.setState({
      showInfo: false
    })
  }

  render () {
    const {title, text, image, email, twitter, className} = this.props
    const {showInfo} = this.state
    return (
      <div 
        className={`ph0-l w-100 overflow-hidden pointer attraction ${className}`} 
        onClick={this.toggleInfo}
        // onMouseLeave={this.closeInfo}
      >
        <div className="relative">
          <Overlay {...this.props}{...this.state}/>
          <img src={`${image}`} className="db grayscale" />
        </div>
      </div>
    )
  }
}

export default ImageTile;
