'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _wrapRedux = require('../wrap-redux');

var _wrapRedux2 = _interopRequireDefault(_wrapRedux);

var _counter = require('../states/counter');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var wrapper = (0, _wrapRedux2.default)(function (state) {
  return {
    counter: state.counter
  };
});

var Index = function Index(props) {

  var increment = function increment(ev) {
    ev.preventDefault();
    props.dispatch((0, _counter.incrementAction)({ amount: 1 }));
  };
  var decrement = function decrement(ev) {
    ev.preventDefault();
    props.dispatch((0, _counter.decrementAction)({ amount: 1 }));
  };

  return _react2.default.createElement('div', null, _react2.default.createElement('span', null, 'hello world ', props.counter.count), _react2.default.createElement('a', { href: '', onClick: increment }, ' ++ '), ' |', _react2.default.createElement('a', { href: '', onClick: decrement }, ' -- '));
};

exports.default = wrapper(Index);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIndyYXBwZXIiLCJzdGF0ZSIsImNvdW50ZXIiLCJJbmRleCIsInByb3BzIiwiaW5jcmVtZW50IiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsImRpc3BhdGNoIiwiYW1vdW50IiwiZGVjcmVtZW50IiwiY291bnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxtQ0FBb0IsVUFBQSxBQUFDLE9BQVUsQUFDbkM7O2FBQ1csTUFEWCxBQUFPLEFBQ1UsQUFFbEI7QUFIUSxBQUNMO0FBRkosQUFBZ0IsQ0FBQTs7QUFNaEIsSUFBTSxRQUFRLFNBQVIsQUFBUSxNQUFBLEFBQUMsT0FBVSxBQUV2Qjs7TUFBTSxZQUFZLFNBQVosQUFBWSxVQUFBLEFBQUMsSUFBTyxBQUN4QjtPQUFBLEFBQUcsQUFDSDtVQUFBLEFBQU0sU0FBUyw4QkFBZ0IsRUFBQyxRQUFoQyxBQUFlLEFBQWdCLEFBQVMsQUFDekM7QUFIRCxBQUlBO01BQU0sWUFBWSxTQUFaLEFBQVksVUFBQSxBQUFDLElBQU8sQUFDeEI7T0FBQSxBQUFHLEFBQ0g7VUFBQSxBQUFNLFNBQVMsOEJBQWdCLEVBQUMsUUFBaEMsQUFBZSxBQUFnQixBQUFTLEFBQ3pDO0FBSEQsQUFLQTs7U0FDRSxnQkFBQSxjQUFBLE9BQ0Usc0JBQUEsY0FBQSxRQUFBLE1BQW1CLHNCQUFBLEFBQU0sUUFEM0IsQUFDRSxBQUFpQyxBQUNqQyx3QkFBQSxjQUFBLE9BQUcsTUFBSCxBQUFRLElBQUcsU0FBWCxBQUFvQixhQUZ0QixBQUVFLFNBQ0Esc0JBQUEsY0FBQSxPQUFHLE1BQUgsQUFBUSxJQUFHLFNBQVgsQUFBb0IsYUFKeEIsQUFDRSxBQUdFLEFBR0w7QUFsQkQ7O2tCQW9CZSxRQUFBLEFBQVEsQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGV0ZXJkZWNyb29zL3Byb2plY3RzL251eHQtc3RhcnRlciJ9