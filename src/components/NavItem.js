import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import mmtLogo from '../images/mmt-main-logo.png'


class NavItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {className, logo, href, text} = this.props
    return (
      <li className={`mh2-ns f6 f4-l tc ${className}`}>
        {/* NavLink gives use exact and accurate styles for page we are on */}
        <NavLink exact to={href} className="link mh2-ns f6 f3-l tc">
        {/* TODO - Make mobile version of logo for better mobile nav */}
          {
            logo ? 
              <img src={`${mmtLogo}`} className="dv center logo"/> : 
              text
          }
        </NavLink>
      </li>
    );
  }
}

export default NavItem;