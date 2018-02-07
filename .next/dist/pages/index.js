'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _wrapRedux = require('../wrap-redux');

var _wrapRedux2 = _interopRequireDefault(_wrapRedux);

var _counter = require('../states/counter');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/peterdecroos/projects/nuxt-starter/pages/index.js?entry';


var Index = function Index(props) {

  var increment = function increment(ev) {
    ev.preventDefault();
    props.dispatch((0, _counter.incrementAction)({ amount: 1 }));
  };
  var decrement = function decrement(ev) {
    ev.preventDefault();
    props.dispatch((0, _counter.decrementAction)({ amount: 1 }));
  };

  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, 'hello world ', props.count), _react2.default.createElement('a', { href: '', onClick: increment, __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, ' ++ '), ' |', _react2.default.createElement('a', { href: '', onClick: decrement, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, ' -- '));
};

exports.default = (0, _wrapRedux2.default)(Index, function (state) {
  return {
    count: state.counter.count
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIndyYXBSZWR1eCIsImluY3JlbWVudEFjdGlvbiIsImRlY3JlbWVudEFjdGlvbiIsIkluZGV4IiwicHJvcHMiLCJpbmNyZW1lbnQiLCJldiIsInByZXZlbnREZWZhdWx0IiwiZGlzcGF0Y2giLCJhbW91bnQiLCJkZWNyZW1lbnQiLCJjb3VudCIsInN0YXRlIiwiY291bnRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLEFBQU8sQUFBZTs7OztBQUN0QixBQUFTLEFBQWlCLEFBQXVCOzs7Ozs7O0FBRWpELElBQU0sUUFBUSxTQUFSLEFBQVEsTUFBQSxBQUFDLE9BQVUsQUFFdkI7O01BQU0sWUFBWSxTQUFaLEFBQVksVUFBQSxBQUFDLElBQU8sQUFDeEI7T0FBQSxBQUFHLEFBQ0g7VUFBQSxBQUFNLFNBQVMsOEJBQWdCLEVBQUMsUUFBaEMsQUFBZSxBQUFnQixBQUFTLEFBQ3pDO0FBSEQsQUFJQTtNQUFNLFlBQVksU0FBWixBQUFZLFVBQUEsQUFBQyxJQUFPLEFBQ3hCO09BQUEsQUFBRyxBQUNIO1VBQUEsQUFBTSxTQUFTLDhCQUFnQixFQUFDLFFBQWhDLEFBQWUsQUFBZ0IsQUFBUyxBQUN6QztBQUhELEFBS0E7O3lCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBQW1CLHNCQURyQixBQUNFLEFBQXlCLEFBQ3pCLHdCQUFBLGNBQUEsT0FBRyxNQUFILEFBQVEsSUFBRyxTQUFYLEFBQW9CO2dCQUFwQjtrQkFBQTtBQUFBO0tBRkYsQUFFRSxTQUNBLHNCQUFBLGNBQUEsT0FBRyxNQUFILEFBQVEsSUFBRyxTQUFYLEFBQW9CO2dCQUFwQjtrQkFBQTtBQUFBO0tBSkosQUFDRSxBQUdFLEFBR0w7QUFsQkQsQUFvQkE7OzJDQUFlLEFBQVUsT0FBTyxVQUFBLEFBQUMsT0FBVSxBQUN6Qzs7V0FDUyxNQUFBLEFBQU0sUUFEZixBQUFPLEFBQ2dCLEFBRXhCO0FBSFEsQUFDTDtBQUZKLEFBQWUsQ0FBQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGV0ZXJkZWNyb29zL3Byb2plY3RzL251eHQtc3RhcnRlciJ9