import React, { Component } from 'react';

class Summary extends Component {
  render() {
    const meal = this.props.meal
    return (
      <div>
      <h2> Summary</h2>
      {meal}
      </div>
    )
  }
}

export default Summary;
