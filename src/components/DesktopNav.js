import React, { Component } from 'react';
import NavItem from './NavItem'

class DesktopNav extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul className="list flex flex-wrap flex-nowrap-ns justify-between items-center mv4-l pa0">
        {menu.map(item => (
          <NavItem {...item} />
        ))}
      </ul>
    );
  }
}

export default DesktopNav;


const menu = [
  {
    text: 'Home',
    logo: true,
    className: 'order-3-ns w-100 w-30-ns mb3 mb0-ns',
    href: '/'
  },
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
    text: 'Results & Publications',
    className: 'order-4-ns w-20',
    href: '/results'
  },
  {
    text: 'Your Data',
    className: 'order-5-ns w-20',
    href: 'gdpr'
  }
];