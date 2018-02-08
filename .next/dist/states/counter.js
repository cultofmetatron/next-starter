'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decrementAction = exports.incrementAction = exports.counterReducer = undefined;

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _util = require('./util');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var initialState = {
  count: 0
};

var responders = [];

var incrementAction = (0, _util.createAction)('Counter:Increment');
var incrementResponder = (0, _util.createResponder)(incrementAction, function (state, action) {
  var amount = action.args.amount;

  return (0, _extends3.default)({}, state, {
    count: state.count + (amount || 1)
  });
});
responders.push(incrementResponder);

var decrementAction = (0, _util.createAction)('Counter:Decrement');
var decrementResponder = (0, _util.createResponder)(decrementAction, function (state, action) {
  var amount = action.args.amount;

  return (0, _extends3.default)({}, state, {
    count: state.count - (amount || 1)
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlcy9jb3VudGVyLmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImNvdW50IiwicmVzcG9uZGVycyIsImluY3JlbWVudEFjdGlvbiIsImluY3JlbWVudFJlc3BvbmRlciIsInN0YXRlIiwiYWN0aW9uIiwiYW1vdW50IiwiYXJncyIsInB1c2giLCJkZWNyZW1lbnRBY3Rpb24iLCJkZWNyZW1lbnRSZXNwb25kZXIiLCJjb3VudGVyUmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTTtTQUFOLEFBQXFCLEFBQ1o7QUFEWSxBQUNuQjs7QUFHRixJQUFJLGFBQUosQUFBaUI7O0FBRWpCLElBQU0sa0JBQWtCLHdCQUF4QixBQUF3QixBQUFhO0FBQ3JDLElBQU0sZ0RBQXFCLEFBQWdCLGlCQUFpQixVQUFBLEFBQUMsT0FBRCxBQUFRLFFBQVc7TUFBQSxBQUNyRSxTQUFXLE9BRDBELEFBQ25ELEtBRG1ELEFBQ3JFLEFBQ1I7O29DQUFBLEFBQ0s7V0FDSSxNQUFBLEFBQU0sU0FBUyxVQUZ4QixBQUVTLEFBQXlCLEFBRW5DO0FBRkc7QUFKSixBQUEyQixDQUFBO0FBTzNCLFdBQUEsQUFBVyxLQUFYLEFBQWdCOztBQUVoQixJQUFNLGtCQUFrQix3QkFBeEIsQUFBd0IsQUFBYTtBQUNyQyxJQUFNLGdEQUFxQixBQUFnQixpQkFBaUIsVUFBQSxBQUFDLE9BQUQsQUFBUSxRQUFXO01BQUEsQUFDckUsU0FBVyxPQUQwRCxBQUNuRCxLQURtRCxBQUNyRSxBQUNSOztvQ0FBQSxBQUNLO1dBQ0ksTUFBQSxBQUFNLFNBQVMsVUFGeEIsQUFFUyxBQUF5QixBQUVuQztBQUZHO0FBSkosQUFBMkIsQ0FBQTtBQU8zQixXQUFBLEFBQVcsS0FBWCxBQUFnQjs7QUFFaEIsSUFBTSxpQkFBaUIsU0FBakIsQUFBaUIsaUJBQXFDO01BQTVCLEFBQTRCLDRFQUF0QixBQUFzQjtNQUFSLEFBQVEsbUJBQzFEOztTQUFPLHlCQUFBLEFBQWMsWUFBZCxBQUEwQixRQUFqQyxBQUFPLEFBQWtDLEFBQzFDO0FBRkQ7O1FBS0UsQSxpQkFBQSxBO1FBQ0EsQSxrQkFBQSxBO1FBQ0EsQSxrQkFBQSxBIiwiZmlsZSI6ImNvdW50ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BldGVyZGVjcm9vcy9wcm9qZWN0cy9udXh0LXN0YXJ0ZXIifQ==