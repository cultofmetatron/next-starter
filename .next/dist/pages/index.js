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

exports.default = (0, _wrapRedux2.default)(Index, function (state) {
  return {
    counter: state.counter
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJpbmNyZW1lbnQiLCJldiIsInByZXZlbnREZWZhdWx0IiwiZGlzcGF0Y2giLCJhbW91bnQiLCJkZWNyZW1lbnQiLCJjb3VudGVyIiwiY291bnQiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNLFFBQVEsU0FBUixBQUFRLE1BQUEsQUFBQyxPQUFVLEFBRXZCOztNQUFNLFlBQVksU0FBWixBQUFZLFVBQUEsQUFBQyxJQUFPLEFBQ3hCO09BQUEsQUFBRyxBQUNIO1VBQUEsQUFBTSxTQUFTLDhCQUFnQixFQUFDLFFBQWhDLEFBQWUsQUFBZ0IsQUFBUyxBQUN6QztBQUhELEFBSUE7TUFBTSxZQUFZLFNBQVosQUFBWSxVQUFBLEFBQUMsSUFBTyxBQUN4QjtPQUFBLEFBQUcsQUFDSDtVQUFBLEFBQU0sU0FBUyw4QkFBZ0IsRUFBQyxRQUFoQyxBQUFlLEFBQWdCLEFBQVMsQUFDekM7QUFIRCxBQUtBOztTQUNFLGdCQUFBLGNBQUEsT0FDRSxzQkFBQSxjQUFBLFFBQUEsTUFBbUIsc0JBQUEsQUFBTSxRQUQzQixBQUNFLEFBQWlDLEFBQ2pDLHdCQUFBLGNBQUEsT0FBRyxNQUFILEFBQVEsSUFBRyxTQUFYLEFBQW9CLGFBRnRCLEFBRUUsU0FDQSxzQkFBQSxjQUFBLE9BQUcsTUFBSCxBQUFRLElBQUcsU0FBWCxBQUFvQixhQUp4QixBQUNFLEFBR0UsQUFHTDtBQWxCRDs7MkNBb0JlLEFBQVUsT0FBTyxVQUFBLEFBQUMsT0FBVSxBQUN6Qzs7YUFDVyxNQURYLEFBQU8sQUFDVSxBQUVsQjtBQUhRLEFBQ0w7QUFGVyxBLENBQUEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BldGVyZGVjcm9vcy9wcm9qZWN0cy9udXh0LXN0YXJ0ZXIifQ==