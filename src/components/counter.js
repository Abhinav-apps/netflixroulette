import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initialValue || 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({ value: prevState.value + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ value: prevState.value - 1 }));
  };

  render() {
    return React.createElement('div', null,    
      React.createElement('h1', null, `Current count: ${this.state.value}`),
      React.createElement('button', { onClick: this.increment }, 'Increment count'),
      React.createElement('button', { onClick: this.decrement }, 'Decrement count')
    );
  }
}

export default Counter;