'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

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
    counter: state.counter.toJS()
  };
});

var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).call.apply(_ref, [this].concat(args))), _this), _this.increment = function (ev) {
      ev.preventDefault();
      _this.props.dispatch((0, _counter.incrementAction)({ amount: 1 }));
    }, _this.decrement = function (ev) {
      ev.preventDefault();
      _this.props.dispatch((0, _counter.decrementAction)({ amount: 1 }));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Index, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, _react2.default.createElement('span', null, 'hello world ', this.props.counter.count), _react2.default.createElement('a', { href: '', onClick: this.increment }, ' ++ '), ' |', _react2.default.createElement('a', { href: '', onClick: this.decrement }, ' -- '));
    }
  }]);
  return Index;
}(_react2.default.Component);

exports.default = wrapper(function (props) {
  return _react2.default.createElement(Index, props);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIndyYXBwZXIiLCJzdGF0ZSIsImNvdW50ZXIiLCJ0b0pTIiwiSW5kZXgiLCJpbmNyZW1lbnQiLCJldiIsInByZXZlbnREZWZhdWx0IiwicHJvcHMiLCJkaXNwYXRjaCIsImFtb3VudCIsImRlY3JlbWVudCIsImNvdW50IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxtQ0FBb0IsVUFBQSxBQUFDLE9BQVUsQUFFbkM7OzthQUNXLE1BQUEsQUFBTSxRQURqQixBQUFPLEFBQ0ksQUFBYyxBQUUxQjtBQUhRLEFBQ0w7QUFISixBQUFnQixDQUFBOztJLEFBUVY7Ozs7Ozs7Ozs7Ozs7OzBNQUNKLEEsWUFBWSxVQUFBLEFBQUMsSUFBTyxBQUNsQjtTQUFBLEFBQUcsQUFDSDtZQUFBLEFBQUssTUFBTCxBQUFXLFNBQVMsOEJBQWdCLEVBQUMsUUFBckMsQUFBb0IsQUFBZ0IsQUFBUyxBQUM5QztBLGEsQUFDRCxZQUFZLFVBQUEsQUFBQyxJQUFPLEFBQ2xCO1NBQUEsQUFBRyxBQUNIO1lBQUEsQUFBSyxNQUFMLEFBQVcsU0FBUyw4QkFBZ0IsRUFBQyxRQUFyQyxBQUFvQixBQUFnQixBQUFTLEFBQzlDO0E7Ozs7OzZCQUNRLEFBQ1A7YUFDRSxnQkFBQSxjQUFBLE9BQ0Usc0JBQUEsY0FBQSxRQUFBLE1BQW1CLHFCQUFBLEFBQUssTUFBTCxBQUFXLFFBRGhDLEFBQ0UsQUFBc0MsQUFDdEMsd0JBQUEsY0FBQSxPQUFHLE1BQUgsQUFBUSxJQUFHLFNBQVMsS0FBcEIsQUFBeUIsYUFGM0IsQUFFRSxTQUNBLHNCQUFBLGNBQUEsT0FBRyxNQUFILEFBQVEsSUFBRyxTQUFTLEtBQXBCLEFBQXlCLGFBSjdCLEFBQ0UsQUFHRSxBQUdMOzs7O0VBakJpQixnQkFBTSxBOzswQkFvQkgsVUFBQSxBQUFDLE9BQUQ7U0FBVyw4QkFBQSxBQUFDLE9BQVosQUFBVyxBQUFXO0FBQTlCLEEsQ0FBQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGV0ZXJkZWNyb29zL3Byb2plY3RzL251eHQtc3RhcnRlciJ9