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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var wrapRedux = function wrapRedux(getProps) {
  return function (component) {
    getProps = getProps || function (state) {
      return {};
    };

    var makeStore = function makeStore(initialState, options) {
      return (0, _redux.createStore)(_states2.default, initialState);
    };
    return (0, _nextReduxWrapper2.default)(makeStore, getProps)(component);
  };
};

exports.default = wrapRedux;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyYXAtcmVkdXguanMiXSwibmFtZXMiOlsid3JhcFJlZHV4IiwiZ2V0UHJvcHMiLCJjb21wb25lbnQiLCJzdGF0ZSIsIm1ha2VTdG9yZSIsImluaXRpYWxTdGF0ZSIsIm9wdGlvbnMiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFDQSxJQUFNLFlBQVksU0FBWixBQUFZLFVBQUMsQUFBRCxVQUFjLEFBQzlCO1NBQU8sVUFBQyxBQUFELFdBQWUsQUFDcEI7ZUFBVyxZQUFhLFVBQUMsQUFBRCxPQUFXLEFBQ2pDO2FBQU8sQUFBUCxBQUNEO0FBRkQsQUFJQTs7UUFBTSxZQUFZLFNBQVosQUFBWSxVQUFDLEFBQUQsY0FBZSxBQUFmLFNBQTJCLEFBQzNDO2FBQU8sMENBQXFCLEFBQXJCLEFBQVAsQUFDRDtBQUZELEFBR0E7V0FBTyxnQ0FBVSxBQUFWLFdBQXFCLEFBQXJCLFVBQStCLEFBQS9CLEFBQVAsQUFDRDtBQVRELEFBVUQ7QUFYRDs7a0JBYWUsQSIsImZpbGUiOiJ3cmFwLXJlZHV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wZXRlcmRlY3Jvb3MvcHJvamVjdHMvbnV4dC1zdGFydGVyIn0=