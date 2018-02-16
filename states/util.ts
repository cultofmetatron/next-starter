import { Map } from 'immutable'

interface actionI {
  type: String;
  args: Object;
}

//a function that returns a action
interface actionDispatcherI {
  (args: Object) : actionI;
  label: String;
  wasCalled() : actionI;
}

let createAction = (label: String): actionDispatcherI => {

  const action : Function = (args: Object) => ({
      type: label,
      args: args
    })
  action.label = label;
  return action;
}

interface actionResponderI {
  (state: Map<String, any>, action: actionI) : Map<String, any>;
}

let createResponder = (actionGen: actionDispatcherI, responderCB: Function): Function => {
  let responder = function(state: Map<String, any>, action: actionI) {
    if (actionGen.label === action.type) {
      return responderCB(state, action)
    } else {
      return null;
    }
  }
  responder.label = actionGen.label;
  return responder;
};

let runResponders = (responders: Array<actionResponderI>, action: actionI, state): Map<String, any> => {
  for (let index in responders) {
    let newState = responders[index](state, action)
    if (newState) {
      return newState;
    }
  }
  return state;
}

export {
  actionDispatcherI,
  actionI,
  createAction,
  runResponders,
  createResponder
}