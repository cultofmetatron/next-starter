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

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var wrapRedux = function wrapRedux(getProps) {
  return function (component) {
    getProps = getProps || function (state) {
      return {};
    };

    var sagaMiddleware = (0, _reduxSaga2.default)(_sagas2.default);

    var makeStore = function makeStore() {
      var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments[1];

      // Nasty duck typing, you should find a better way to detect
      for (var key in initialState) {
        if (!initialState[key].toJS) initialState[key] = _immutable2.default.fromJS(initialState[key]);
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndyYXAtcmVkdXguanMiXSwibmFtZXMiOlsid3JhcFJlZHV4IiwiZ2V0UHJvcHMiLCJjb21wb25lbnQiLCJzdGF0ZSIsInNhZ2FNaWRkbGV3YXJlIiwibWFrZVN0b3JlIiwiaW5pdGlhbFN0YXRlIiwib3B0aW9ucyIsImtleSIsInRvSlMiLCJmcm9tSlMiLCJzdG9yZSIsInJ1blNhZ2FUYXNrIiwic2FnYVRhc2siLCJydW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLElBQU0sWUFBWSxTQUFaLEFBQVksVUFBQyxBQUFELFVBQWMsQUFDOUI7U0FBTyxVQUFDLEFBQUQsV0FBZSxBQUNwQjtlQUFXLFlBQWEsVUFBQyxBQUFELE9BQVcsQUFDakM7YUFBTyxBQUFQLEFBQ0Q7QUFGRCxBQUlBOztRQUFNLGlCQUFpQixpQ0FBdkIsQUFFQTs7UUFBTSxZQUFZLFNBQVosQUFBWSxZQUFnQztVQUEvQixBQUErQixtRkFBaEIsQUFBZ0I7VUFBWixBQUFZLG9CQUNoRDs7QUFDQTtXQUFLLElBQUksQUFBVCxPQUFnQixBQUFoQixjQUE4QixBQUM1QjtZQUFJLENBQUMsYUFBYSxBQUFiLEtBQWtCLEFBQXZCLE1BQ0UsYUFBYSxBQUFiLE9BQW9CLG9CQUFVLEFBQVYsT0FBaUIsYUFBYSxBQUFiLEFBQWpCLEFBQXBCLEFBQ0g7QUFFRDs7VUFBSSxRQUFRLDBDQUVWLEFBRlUsY0FHWCw0QkFBZ0IsQUFBaEIsQUFIVyxBQUFaLEFBS0E7WUFBTSxBQUFOLGNBQW9CLFlBQU0sQUFDeEI7Y0FBTSxBQUFOLFdBQWlCLGVBQWUsQUFBZixZQUFqQixBQUNEO0FBRkQsQUFHQTtBQUNBO1lBQU0sQUFBTixBQUNBO2FBQU8sQUFBUCxBQUNEO0FBbEJELEFBdUJBOztXQUFPLGdDQUFVLEFBQVYsV0FBcUIsQUFBckIsVUFBK0IsNkJBQWMsQUFBZCxBQUEvQixBQUFQLEFBQ0Q7QUEvQkQsQUFnQ0Q7QUFqQ0Q7O2tCQW1DZSxBIiwiZmlsZSI6IndyYXAtcmVkdXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BldGVyZGVjcm9vcy9wcm9qZWN0cy9udXh0LXN0YXJ0ZXIifQ==