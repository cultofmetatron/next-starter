'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _states = require('./states');

var _states2 = _interopRequireDefault(_states);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapRedux = function wrapRedux(component, getProps) {
  getProps = getProps || function (state) {
    return {};
  };

  var makeStore = function makeStore(initialState, options) {
    return (0, _redux.createStore)(_states2.default, initialState);
  };
  return (0, _nextReduxWrapper2.default)(makeStore, getProps)(component);
};

exports.default = wrapRedux;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyYXAtcmVkdXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJjcmVhdGVTdG9yZSIsIndpdGhSZWR1eCIsInJlZHVjZXIiLCJ3cmFwUmVkdXgiLCJjb21wb25lbnQiLCJnZXRQcm9wcyIsInN0YXRlIiwibWFrZVN0b3JlIiwiaW5pdGlhbFN0YXRlIiwib3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsQUFBTyxBQUFQLEFBQWUsQUFBZjs7OztBQUNBLEFBQVEsQUFBUjs7QUFDQSxBQUFPLEFBQVA7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBb0IsQUFBcEI7Ozs7OztBQUNBLElBQU0sWUFBWSxTQUFaLEFBQVksVUFBQyxBQUFELFdBQVksQUFBWixVQUF5QixBQUN6QzthQUFXLFlBQWEsVUFBQyxBQUFELE9BQVcsQUFDakM7V0FBTyxBQUFQLEFBQ0Q7QUFGRCxBQUlBOztNQUFNLFlBQVksU0FBWixBQUFZLFVBQUMsQUFBRCxjQUFlLEFBQWYsU0FBMkIsQUFDM0M7V0FBTyxBQUFZLEFBQVosMENBQXFCLEFBQXJCLEFBQVAsQUFDRDtBQUZELEFBR0E7U0FBTyxnQ0FBVSxBQUFWLFdBQXFCLEFBQXJCLFVBQStCLEFBQS9CLEFBQVAsQUFDRDtBQVRELEFBV0E7O2tCQUFlLEFBQWYiLCJmaWxlIjoid3JhcC1yZWR1eC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGV0ZXJkZWNyb29zL3Byb2plY3RzL251eHQtc3RhcnRlciJ9