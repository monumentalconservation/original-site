import React, { Component } from 'react';
import ImageTile from './ImageTile'
import Border from './Border'


class ArticleLink extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {alignment, styles, title, link, description, imageLink} = this.props

    return (  
        <div className="w-100">
          <Border alignment={alignment} />
            <a href={link}target="_blank" className="link">
              <div className={`flex mb3 ${styles}`}>
                <div className="w-20">
                  <img 
                    className="" 
                    src={imageLink} />
                </div>
                <div className="w-80 ph4">
                  <h3 className="mt0">{title}</h3>
                  <p 
                    className="">
                    {description}
                  </p>
                </div>
              </div>
            </a>
        </div>

    );
  }
}

export default ArticleLink;
