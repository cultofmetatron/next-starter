'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var createAction = function createAction(label) {
  var action = function action(args) {
    return {
      type: label,
      args: args
    };
  };
  action.label = label;
  return action;
};

var createResponder = function createResponder(actionGen, responderCB) {
  var responder = function responder(state, action) {
    if (action.type === 'Counter:Increment') {}
    if (actionGen.label === action.type) {
      return responderCB(state, action);
    } else {
      return null;
    }
  };
  responder.label = actionGen.label;
  return responder;
};

var runResponders = function runResponders(responders, action, state) {
  for (var index in responders) {
    var newState = responders[index](state, action);
    if (newState) {
      return newState;
    }
  }
  return state;
};

exports.createAction = createAction;
exports.runResponders = runResponders;
exports.createResponder = createResponder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlcy91dGlsLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUFjdGlvbiIsImxhYmVsIiwiYWN0aW9uIiwiYXJncyIsInR5cGUiLCJjcmVhdGVSZXNwb25kZXIiLCJhY3Rpb25HZW4iLCJyZXNwb25kZXJDQiIsInJlc3BvbmRlciIsInN0YXRlIiwicnVuUmVzcG9uZGVycyIsInJlc3BvbmRlcnMiLCJpbmRleCIsIm5ld1N0YXRlIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQUksZUFBZSxTQUFmLEFBQWUsYUFBQSxBQUFDLE9BQVUsQUFDNUI7TUFBTSxTQUFTLFNBQVQsQUFBUyxPQUFBLEFBQUMsTUFBRDs7WUFBVyxBQUNsQixBQUNOO1lBRmEsQUFBVyxBQUVsQjtBQUZrQixBQUN4QjtBQURGLEFBSUE7U0FBQSxBQUFPLFFBQVAsQUFBZSxBQUNmO1NBQUEsQUFBTyxBQUNSO0FBUEQ7O0FBU0EsSUFBSSxrQkFBa0IsU0FBbEIsQUFBa0IsZ0JBQUEsQUFBQyxXQUFELEFBQVksYUFBZ0IsQUFDaEQ7TUFBSSxZQUFZLFNBQVosQUFBWSxVQUFBLEFBQVMsT0FBVCxBQUFnQixRQUFRLEFBQ3RDO1FBQUksT0FBQSxBQUFPLFNBQVgsQUFBb0IscUJBQXFCLEFBRXhDLENBQ0Q7UUFBSSxVQUFBLEFBQVUsVUFBVSxPQUF4QixBQUErQixNQUFNLEFBQ25DO2FBQU8sWUFBQSxBQUFZLE9BQW5CLEFBQU8sQUFBbUIsQUFDM0I7QUFGRCxXQUVPLEFBQ0w7YUFBQSxBQUFPLEFBQ1I7QUFDRjtBQVRELEFBVUE7WUFBQSxBQUFVLFFBQVEsVUFBbEIsQUFBNEIsQUFDNUI7U0FBQSxBQUFPLEFBQ1I7QUFiRDs7QUFlQSxJQUFJLGdCQUFnQixTQUFoQixBQUFnQixjQUFBLEFBQUMsWUFBRCxBQUFhLFFBQWIsQUFBcUIsT0FBVSxBQUNqRDtPQUFLLElBQUwsQUFBUyxTQUFULEFBQWtCLFlBQVksQUFDNUI7UUFBSSxXQUFXLFdBQUEsQUFBVyxPQUFYLEFBQWtCLE9BQWpDLEFBQWUsQUFBeUIsQUFDeEM7UUFBQSxBQUFJLFVBQVUsQUFDWjthQUFBLEFBQU8sQUFDUjtBQUNGO0FBQ0Q7U0FBQSxBQUFPLEFBQ1I7QUFSRCxBQVVBOztRQUFBLEFBQ0U7UUFERixBQUVFO1FBRkYsQUFHRSIsImZpbGUiOiJ1dGlsLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wZXRlcmRlY3Jvb3MvcHJvamVjdHMvbnV4dC1zdGFydGVyIn0=