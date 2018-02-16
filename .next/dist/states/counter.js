'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decrementAction = exports.incrementAction = exports.counterReducer = undefined;

var _util = require('./util');

var _immutable = require('immutable');

var initialState = (0, _immutable.Map)({
  count: 0
});

var responders = [];

var incrementAction = (0, _util.createAction)('Counter:Increment');
var incrementResponder = (0, _util.createResponder)(incrementAction, function (state, action) {
  var amount = action.args.amount;
  /*
  return {
    ...state,
    count: state.count + (amount || 1)
  }
  */

  return state.set('count', state.get('count') + (amount || 1));
});
responders.push(incrementResponder);

var decrementAction = (0, _util.createAction)('Counter:Decrement');
var decrementResponder = (0, _util.createResponder)(decrementAction, function (state, action) {
  var amount = action.args.amount;
  /*
  return {
    ...state,
    count: state.count - (amount || 1)
  }
  */

  return state.set('count', state.get('count') - (amount || 1));
});
responders.push(decrementResponder);

var counterReducer = function counterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  return (0, _util.runResponders)(responders, action, state);
};

exports.counterReducer = counterReducer;
exports.incrementAction = incrementAction;
exports.decrementAction = decrementAction;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlcy9jb3VudGVyLmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImNvdW50IiwicmVzcG9uZGVycyIsImluY3JlbWVudEFjdGlvbiIsImluY3JlbWVudFJlc3BvbmRlciIsInN0YXRlIiwiYWN0aW9uIiwiYW1vdW50IiwiYXJncyIsInNldCIsImdldCIsInB1c2giLCJkZWNyZW1lbnRBY3Rpb24iLCJkZWNyZW1lbnRSZXNwb25kZXIiLCJjb3VudGVyUmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBLElBQU07U0FBTixBQUFxQixBQUFJLEFBQ2hCO0FBRGdCLEFBQ3ZCLENBRG1COztBQUlyQixJQUFJLGFBQUosQUFBaUI7O0FBRWpCLElBQU0sa0JBQWtCLHdCQUF4QixBQUF3QixBQUFhO0FBQ3JDLElBQU0sZ0RBQXFCLEFBQWdCLGlCQUFpQixVQUFBLEFBQUMsT0FBRCxBQUFRLFFBQVc7TUFBQSxBQUNyRSxTQUFXLE9BRDBELEFBQ25ELEtBRG1ELEFBQ3JFLEFBQ1I7QUFNQTs7Ozs7OztTQUFPLE1BQUEsQUFBTSxJQUFOLEFBQVUsU0FBUyxNQUFBLEFBQU0sSUFBTixBQUFVLFlBQVksVUFBaEQsQUFBTyxBQUFtQixBQUFnQyxBQUUzRDtBQVZELEFBQTJCLENBQUE7QUFXM0IsV0FBQSxBQUFXLEtBQVgsQUFBZ0I7O0FBRWhCLElBQU0sa0JBQWtCLHdCQUF4QixBQUF3QixBQUFhO0FBQ3JDLElBQU0sZ0RBQXFCLEFBQWdCLGlCQUFpQixVQUFBLEFBQUMsT0FBRCxBQUFRLFFBQVc7TUFBQSxBQUNyRSxTQUFXLE9BRDBELEFBQ25ELEtBRG1ELEFBQ3JFLEFBQ1I7QUFNQTs7Ozs7OztTQUFPLE1BQUEsQUFBTSxJQUFOLEFBQVUsU0FBUyxNQUFBLEFBQU0sSUFBTixBQUFVLFlBQVksVUFBaEQsQUFBTyxBQUFtQixBQUFnQyxBQUMzRDtBQVRELEFBQTJCLENBQUE7QUFVM0IsV0FBQSxBQUFXLEtBQVgsQUFBZ0I7O0FBRWhCLElBQU0saUJBQWlCLFNBQWpCLEFBQWlCLGlCQUFxQztNQUE1QixBQUE0Qiw0RUFBdEIsQUFBc0I7TUFBUixBQUFRLG1CQUMxRDs7U0FBTyx5QkFBQSxBQUFjLFlBQWQsQUFBMEIsUUFBakMsQUFBTyxBQUFrQyxBQUMxQztBQUZEOztRQUtFLEEsaUJBQUEsQTtRQUNBLEEsa0JBQUEsQTtRQUNBLEEsa0JBQUEsQSIsImZpbGUiOiJjb3VudGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wZXRlcmRlY3Jvb3MvcHJvamVjdHMvbnV4dC1zdGFydGVyIn0=