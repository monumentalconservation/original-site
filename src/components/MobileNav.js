import React, { Component } from 'react';
import NavItem from './NavItem'

import mmtLogoMobile from '../images/mmt-main-logo.png'
import menu from '../images/menu.png'

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
          <span className="fl w-third">
            <img 
              src={menu} 
              className="h2 ma3" 
              onClick={this.toggleMenu}
            />
          </span>
          <img src={mmtLogoMobile} className="h3" />
        </div>
        <div className="mobile-nav-child absolute w-100">
          <ul 
            style={{
              transform: showMenu? 'none' : 'translateY(-100%)'
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
    className: 'order-1-ns w-20',
    href: '/about'
  },
  {
    text: 'Sites',
    className: 'order-2-ns w-20',
    href: '/sites'
  },
  {
    text: 'Blog',
    className: 'order-4-ns w-20',
    href: 'https://roosrambles.com/',
    target: "_blank"
  },
  {
    text: 'Your Data',
    className: 'order-5-ns w-20',
    href: 'gdpr'
  }
];