
import wrapRedux from '../wrap-redux';
import { incrementAction, decrementAction } from '../states/counter';

const Index = (props) => {

  const increment = (ev) => {
    ev.preventDefault();
    props.dispatch(incrementAction({amount: 1}));
  }
  const decrement = (ev) => {
    ev.preventDefault()
    props.dispatch(decrementAction({amount: 1}));
  }

  return (
    <div>
      <span>hello world {props.count}</span>
      <a href="" onClick={increment} > ++ </a> |
      <a href="" onClick={decrement} > -- </a> 
    </div>
  );
}

export default wrapRedux(Index, (state) => {
  return {
    count: state.counter.count
  };
});