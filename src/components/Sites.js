import React, { Component } from 'react';
import Border from './Border'
import ImageTile from './ImageTile'
import MasonryLayout from './MasonryLayout'
import SiteImages from './SiteImages'
import SiteImage from './SiteImage'

class Sites extends Component {
  constructor() {
    super()

    this.state = {
      columnCount: this.calculateColumnCount()
    }
    window.addEventListener("resize", this.updateColumnCount)
  }
  
  updateColumnCount = () => {
    this.setState({
      columnCount: this.calculateColumnCount()
    })
  }
  
  calculateColumnCount = () => {
    var width = window.innerWidth
    if (width < 701) {
      return 1
    } else if (width > 700 && width < 1100) {
      return 2
    } else if (width > 1100) {
      return 3
    }
  }

  render() {
    const {columnCount} = this.state
    return (
      <div className="sites">
        <Border alignment="left" />
        <div className="about ph4 ph0-m mb6 center">
          <MasonryLayout columns={columnCount} gap={25}>
          {
            SiteImages.map(item => {
              return (
                <SiteImage {...item} />
              )
            })
          }
          </MasonryLayout>
        </div>
      </div>
    );
  }
}

export default Sites;
