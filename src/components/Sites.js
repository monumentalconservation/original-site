import React, { Component } from 'react';
import Border from './Border'
import ImageTile from './ImageTile'
import MasonryLayout from './MasonryLayout'
import SiteImages from './SiteImages'
import SiteImage from './SiteImage'



class Sites extends Component {
  render() {
    return (
      <div className="sites">
        <Border alignment="left" />
        <div className="about ph4 ph0-m mb6 center">
          <MasonryLayout columns={3} gap={25}>
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
