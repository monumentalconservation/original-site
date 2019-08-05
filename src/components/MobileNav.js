import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import NavItem from './NavItem'

import mmtLogoMobile from '../images/mmt-main-logo-mobile.png'
import menu from '../images/menu.png'

// TODO - refactor this!
class MobileNav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showMenu: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  toggleMenu() {
    this.setState((prevState, props) => ({
      showMenu: !prevState.showMenu
    }));
  }

  closeMenu() {
    this.setState({
      showMenu: false
    })
  }

  render() {
    const {showMenu} = this.state
    return (
      <div>

        <div className="mobile-nav-header">
          <span className="fl w-20 w-third-ns">
            <img 
              src={menu} 
              className="ham h2 ma3" 
              alt="menu icon"
              onClick={this.toggleMenu}
            />
          </span>
            <NavLink exact to={"/"}>
              <img 
                src={mmtLogoMobile} 
                alt="Monument Monitor logo"
                className="mobile-logo h3" />
            </NavLink>
        </div>
        <div className="mobile-nav-child w-100">
          <ul 
            style={{
              "display" : showMenu? 'flex' : "none"
            }}
            className="list flex flex-wrap flex-nowrap-ns justify-between items-center mv4-l pa0">
            {navChildLinks.map(item => (
              <NavItem {...item} />
            ))}
          </ul>
        </div>

      </div>
    );
  }
}

export default MobileNav;


const navChildLinks = [
  {
    text: 'The Team',
    className: 'order-1-ns w-100 w-20-ns pv1 pv0-ns',
    href: '/about'
  },
  {
    text: 'Sites',
    className: 'order-2-ns w-100 w-20-ns pv1 pv0-ns',
    href: '/sites'
  },
  {
    text: 'Publications',
    className: 'order-4-ns w-100 w-20-ns pv1 pv0-ns',
    href: '/results'
  },
  {
    text: 'Your Data',
    className: 'order-5-ns w-100 w-20-ns pv1 pv0-ns',
    href: '/gdpr'
  }
];