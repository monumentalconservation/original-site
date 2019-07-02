import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import mmtLogo from '../images/mmt-main-logo.png'
import mmtLogoMobile from '../images/mmt-main-logo.png'

const NavLinkContent = ({logo, text}) => (
  // {/* TODO - Make mobile version of logo for better mobile nav */}
  logo ? 
    <img src={`${mmtLogo}`} className="dv center logo"/> : 
    text
)

class NavItem extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {className, logo, href, text, target} = this.props
    return (
      <li className={`mh2-ns tc ${className}`}>
        { target ? 
          <a href={href} target={target} className="link mh2-ns f5 f3-l tc">
            <NavLinkContent {...this.props} />
          </a>
        :
          <NavLink exact to={href} className="link mh2-ns f5 f3-l tc">
            <NavLinkContent {...this.props}/>
          </NavLink>
        }
      </li>
    );
  }
}

export default NavItem;