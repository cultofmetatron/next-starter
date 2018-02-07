let createAction = (label) => {
  const action = (args) => ({
    type: label,
    args: args
  });
  action.label = label;
  return action;
}

let createResponder = (actionGen, responderCB) => {
  let responder = function(state, action) {
    if (action.type === 'Counter:Increment') {
     
    }
    if (actionGen.label === action.type) {
      return responderCB(state, action)
    } else {
      return null;
    }
  }
  responder.label = actionGen.label;
  return responder;
};

let runResponders = (responders, action, state) => {
  for (let index in responders) {
    let newState = responders[index](state, action)
    if (newState) {
      return newState
    }
  }
  return state;
}

export {
  createAction,
  runResponders,
  createResponder
}