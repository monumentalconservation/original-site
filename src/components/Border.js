import React, { Component } from 'react';

class Border extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const {alignment} = this.props
    return (
      <section className={`border-${alignment}`}></section>
    );
  }
}

export default Border;