
import { createAction, createResponder, runResponders, actionI, actionDispatcherI } from './util';
import { Map } from 'immutable'

const initialState = Map({
  count: 0
});

let responders = [];

interface amountI extends actionI {
  args: {
    amount: Number;
  };
}

const incrementAction: actionDispatcherI = createAction('Counter:Increment');
const incrementResponder = createResponder(incrementAction, (state, action: amountI) => {
  const { amount } = action.args;
  return state.set('count', state.get('count') + (amount || 1));

});
responders.push(incrementResponder);

const decrementAction: actionDispatcherI = createAction('Counter:Decrement');
const decrementResponder = createResponder(decrementAction, (state, action: amountI) => {
  const { amount } = action.args;
  return state.set('count', state.get('count') - (amount || 1));
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