import React, { Component } from 'react';
import Border from './Border'
import ImageTile from './ImageTile'
import MasonryLayout from './MasonryLayout'
import SiteImages from './SiteImages'
import SiteImage from './SiteImage'


// TODO - make this responsive...
class Sites extends Component {
  constructor() {
    super()

    this.state = {
      columnCount: this.calculateColumnCount
    }

    window.addEventListener("resize", this.updateColumnCount)
  }

  calculateColumnCount = () => {
    return (window.innerWidth < 1100 ? 1 : 3)
  }

  updateColumnCount = () => {
    this.setState({
      columnCount: this.calculateColumnCount
    })
  }

  render() {
    // const width = window.innerWidth
    const columnCount = (window.innerWidth < 1100 ? 1 : 3)
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
