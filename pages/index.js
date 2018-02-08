
import React from 'react';
import wrapRedux from '../wrap-redux';
import { incrementAction, decrementAction } from '../states/counter';

const wrapper = wrapRedux((state) => {
  return {
    counter: state.counter
  };
});


class Index extends React.Component {
  increment = (ev) => {
    ev.preventDefault();
    this.props.dispatch(incrementAction({amount: 1}));
  }
  decrement = (ev) => {
    ev.preventDefault();
    this.props.dispatch(decrementAction({amount: 1}));
  }
  render() {
    return (
      <div>
        <span>hello world {this.props.counter.count}</span>
        <a href="" onClick={this.increment} > ++ </a> |
        <a href="" onClick={this.decrement} > -- </a> 
      </div>
    );
  }
}

export default wrapper((props) => <Index {...props} />);