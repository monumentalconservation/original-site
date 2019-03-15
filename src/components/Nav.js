import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import NavItem from './NavItem'


class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <ul className="list flex flex-wrap flex-nowrap-ns justify-between items-center mv4-l ">
          {menu.map(item => (
            <NavItem {...item} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Nav;


const menu = [
  {
    text: 'Home',
    logo: true,
    className: 'order-3-ns w-100 w-30-ns mb3 mb0-ns',
    href: '/'
  },
  {
    text: 'About',
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
    href: '/'
  },
  {
    text: 'Your Data',
    className: 'order-5-ns w-20',
    href: 'gdpr'
  }
];