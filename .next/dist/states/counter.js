'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decrementAction = exports.incrementAction = exports.counterReducer = undefined;

var _extends2 = require('next/node_modules/babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlcy9jb3VudGVyLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUFjdGlvbiIsImNyZWF0ZVJlc3BvbmRlciIsInJ1blJlc3BvbmRlcnMiLCJpbml0aWFsU3RhdGUiLCJjb3VudCIsInJlc3BvbmRlcnMiLCJpbmNyZW1lbnRBY3Rpb24iLCJpbmNyZW1lbnRSZXNwb25kZXIiLCJzdGF0ZSIsImFjdGlvbiIsImFtb3VudCIsImFyZ3MiLCJwdXNoIiwiZGVjcmVtZW50QWN0aW9uIiwiZGVjcmVtZW50UmVzcG9uZGVyIiwiY291bnRlclJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsQUFBUyxBQUFjLEFBQWlCLEFBQXFCOzs7O0FBRTdELElBQU07U0FBTixBQUFxQixBQUNaO0FBRFksQUFDbkI7O0FBR0YsSUFBSSxhQUFKLEFBQWlCOztBQUVqQixJQUFNLGtCQUFrQix3QkFBeEIsQUFBd0IsQUFBYTtBQUNyQyxJQUFNLGdEQUFxQixBQUFnQixpQkFBaUIsVUFBQSxBQUFDLE9BQUQsQUFBUSxRQUFXO01BQUEsQUFDckUsU0FBVyxPQUQwRCxBQUNuRCxLQURtRCxBQUNyRSxBQUNSOztvQ0FBQSxBQUNLO1dBQ0ksTUFBQSxBQUFNLFNBQVMsVUFGeEIsQUFFUyxBQUF5QixBQUVuQztBQUZHO0FBSkosQUFBMkIsQ0FBQTtBQU8zQixXQUFBLEFBQVcsS0FBWCxBQUFnQjs7QUFFaEIsSUFBTSxrQkFBa0Isd0JBQXhCLEFBQXdCLEFBQWE7QUFDckMsSUFBTSxnREFBcUIsQUFBZ0IsaUJBQWlCLFVBQUEsQUFBQyxPQUFELEFBQVEsUUFBVztNQUFBLEFBQ3JFLFNBQVcsT0FEMEQsQUFDbkQsS0FEbUQsQUFDckUsQUFDUjs7b0NBQUEsQUFDSztXQUNJLE1BQUEsQUFBTSxTQUFTLFVBRnhCLEFBRVMsQUFBeUIsQUFFbkM7QUFGRztBQUpKLEFBQTJCLENBQUE7QUFPM0IsV0FBQSxBQUFXLEtBQVgsQUFBZ0I7O0FBRWhCLElBQU0saUJBQWlCLFNBQWpCLEFBQWlCLGlCQUFxQztNQUE1QixBQUE0Qiw0RUFBdEIsQUFBc0I7TUFBUixBQUFRLG1CQUMxRDs7U0FBTyx5QkFBQSxBQUFjLFlBQWQsQUFBMEIsUUFBakMsQUFBTyxBQUFrQyxBQUMxQztBQUZELEFBSUE7O1FBQUEsQUFDRTtRQURGLEFBRUU7UUFGRixBQUdFIiwiZmlsZSI6ImNvdW50ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BldGVyZGVjcm9vcy9wcm9qZWN0cy9udXh0LXN0YXJ0ZXIifQ==