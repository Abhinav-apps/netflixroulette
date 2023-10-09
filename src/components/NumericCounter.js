import React, { Component } from 'react';

class NumericCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initialValue || 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ value: prevState.value + 1 }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({ value: prevState.value - 1 }));
  };

  render() {
    return React.createElement('div', null,
      React.createElement('p', null, `Value: ${this.state.value}`),
      React.createElement('button', { onClick: this.handleIncrement }, 'Increment B'),
      React.createElement('button', { onClick: this.handleDecrement }, 'Decrement B')
    );
  }
}

export default NumericCounter;