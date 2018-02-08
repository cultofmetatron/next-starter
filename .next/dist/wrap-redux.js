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

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _sagas = require('./sagas');

var _sagas2 = _interopRequireDefault(_sagas);

var _nextReduxSaga = require('next-redux-saga');

var _nextReduxSaga2 = _interopRequireDefault(_nextReduxSaga);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var wrapRedux = function wrapRedux(getProps) {
  return function (component) {
    getProps = getProps || function (state) {
      return {};
    };

    var sagaMiddleware = (0, _reduxSaga2.default)(_sagas2.default);

    var makeStore = function makeStore(initialState, options) {
      var store = (0, _redux.createStore)(_states2.default, initialState, (0, _redux.applyMiddleware)(sagaMiddleware));
      store.runSagaTask = function () {
        store.sagaTask = sagaMiddleware.run(_sagas2.default);
      };
      // run the rootSaga initially
      store.runSagaTask();
      return store;
    };

    return (0, _nextReduxWrapper2.default)(makeStore, getProps)((0, _nextReduxSaga2.default)(component));
  };
};

exports.default = wrapRedux;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyYXAtcmVkdXguanMiXSwibmFtZXMiOlsid3JhcFJlZHV4IiwiZ2V0UHJvcHMiLCJjb21wb25lbnQiLCJzdGF0ZSIsInNhZ2FNaWRkbGV3YXJlIiwibWFrZVN0b3JlIiwiaW5pdGlhbFN0YXRlIiwib3B0aW9ucyIsInN0b3JlIiwicnVuU2FnYVRhc2siLCJzYWdhVGFzayIsInJ1biJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU0sWUFBWSxTQUFaLEFBQVksVUFBQyxBQUFELFVBQWMsQUFDOUI7U0FBTyxVQUFDLEFBQUQsV0FBZSxBQUNwQjtlQUFXLFlBQWEsVUFBQyxBQUFELE9BQVcsQUFDakM7YUFBTyxBQUFQLEFBQ0Q7QUFGRCxBQUlBOztRQUFNLGlCQUFpQixpQ0FBdkIsQUFFQTs7UUFBTSxZQUFZLFNBQVosQUFBWSxVQUFDLEFBQUQsY0FBZSxBQUFmLFNBQTJCLEFBQzNDO1VBQUksUUFBUSwwQ0FFVixBQUZVLGNBR1YsNEJBQWdCLEFBQWhCLEFBSFUsQUFBWixBQUtBO1lBQU0sQUFBTixjQUFvQixZQUFNLEFBQ3hCO2NBQU0sQUFBTixXQUFpQixlQUFlLEFBQWYsWUFBakIsQUFDRDtBQUZELEFBR0E7QUFDQTtZQUFNLEFBQU4sQUFDQTthQUFPLEFBQVAsQUFDRDtBQVpELEFBaUJBOztXQUFPLGdDQUFVLEFBQVYsV0FBcUIsQUFBckIsVUFBK0IsNkJBQWMsQUFBZCxBQUEvQixBQUFQLEFBQ0Q7QUF6QkQsQUEwQkQ7QUEzQkQ7O2tCQTZCZSxBIiwiZmlsZSI6IndyYXAtcmVkdXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BldGVyZGVjcm9vcy9wcm9qZWN0cy9udXh0LXN0YXJ0ZXIifQ==