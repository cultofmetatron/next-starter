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

var _dec, _class;

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

/*
const Index = (props) => {

  const increment = (ev) => {
    ev.preventDefault();
    props.dispatch(incrementAction({amount: 1}));
  }
  const decrement = (ev) => {
    ev.preventDefault();
    props.dispatch(decrementAction({amount: 1}));
  }

  return (
    <div>
      <span>hello world {props.counter.count}</span>
      <a href="" onClick={increment} > ++ </a> |
      <a href="" onClick={decrement} > -- </a> 
    </div>
  );
}
*/
var Index = (_dec = (0, _wrapRedux2.default)(function (state) {
  return {
    counter: state.counter
  };
}), _dec(_class = function (_React$Component) {
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
}(_react2.default.Component)) || _class);
exports.default = wrapper(function (props) {
  return _react2.default.createElement(Index, props);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIndyYXBwZXIiLCJzdGF0ZSIsImNvdW50ZXIiLCJJbmRleCIsImluY3JlbWVudCIsImV2IiwicHJldmVudERlZmF1bHQiLCJwcm9wcyIsImRpc3BhdGNoIiwiYW1vdW50IiwiZGVjcmVtZW50IiwiY291bnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU0sbUNBQW9CLFVBQUEsQUFBQyxPQUFVLEFBQ25DOzthQUNXLE1BRFgsQUFBTyxBQUNVLEFBRWxCO0FBSFEsQUFDTDtBQUZKLEFBQWdCLENBQUE7O0FBTWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUEwQk0sQSx5Q0FMSyxVQUFBLEFBQUMsT0FBVSxBQUNwQjs7YUFDVyxNQURYLEFBQU8sQUFDVSxBQUVsQjtBQUhRLEFBQ0w7QUFGSCxBLENBQUE7Ozs7Ozs7Ozs7Ozs7OzBNLEFBTUMsWUFBWSxVQUFBLEFBQUMsSUFBTyxBQUNsQjtTQUFBLEFBQUcsQUFDSDtZQUFBLEFBQUssTUFBTCxBQUFXLFNBQVMsOEJBQWdCLEVBQUMsUUFBckMsQUFBb0IsQUFBZ0IsQUFBUyxBQUM5QztBLGFBQ0QsQSxZQUFZLFVBQUEsQUFBQyxJQUFPLEFBQ2xCO1NBQUEsQUFBRyxBQUNIO1lBQUEsQUFBSyxNQUFMLEFBQVcsU0FBUyw4QkFBZ0IsRUFBQyxRQUFyQyxBQUFvQixBQUFnQixBQUFTLEFBQzlDO0E7Ozs7OzZCQUNRLEFBQ1A7YUFDRSxnQkFBQSxjQUFBLE9BQ0Usc0JBQUEsY0FBQSxRQUFBLE1BQW1CLHFCQUFBLEFBQUssTUFBTCxBQUFXLFFBRGhDLEFBQ0UsQUFBc0MsQUFDdEMsd0JBQUEsY0FBQSxPQUFHLE1BQUgsQUFBUSxJQUFHLFNBQVMsS0FBcEIsQUFBeUIsYUFGM0IsQUFFRSxTQUNBLHNCQUFBLGNBQUEsT0FBRyxNQUFILEFBQVEsSUFBRyxTQUFTLEtBQXBCLEFBQXlCLGFBSjdCLEFBQ0UsQUFHRSxBQUdMOzs7O0VBakJpQixnQixBQUFNOzBCQW9CSCxVQUFBLEFBQUMsT0FBRDtTQUFXLDhCQUFBLEFBQUMsT0FBWixBQUFXLEFBQVc7QUFBOUIsQSxDQUFBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wZXRlcmRlY3Jvb3MvcHJvamVjdHMvbnV4dC1zdGFydGVyIn0=