import React, { Component } from 'react';

class Border extends Component {
  constructor(props) {
    super(props)
  }
  // TODO: animate this to they mooooove
  render() {
    const {alignment} = this.props
    return (
      <section className={`border-${alignment}`}></section>
    );
  }
}

export default Border;