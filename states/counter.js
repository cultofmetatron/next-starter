
import { createAction, createResponder, runResponders } from './util';

const initialState = {
  count: 0
};

let responders = [];

const incrementAction = createAction('Counter:Increment');
const incrementResponder = createResponder(incrementAction, (state, action) => {
  const { amount } = action.args;
  return {
    ...state,
    count: state.count + (amount || 1)
  }
});
responders.push(incrementResponder);

const decrementAction = createAction('Counter:Decrement');
const decrementResponder = createResponder(decrementAction, (state, action) => {
  const { amount } = action.args;
  return {
    ...state,
    count: state.count - (amount || 1)
  }
});
responders.push(decrementResponder);

const counterReducer = function(state=initialState, action) {
  return runResponders(responders, action, state)
}

export {
  counterReducer,
  incrementAction,
  decrementAction
}