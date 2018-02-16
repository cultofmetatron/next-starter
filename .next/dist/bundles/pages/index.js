module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _wrapRedux = __webpack_require__("./wrap-redux.js");

var _wrapRedux2 = _interopRequireDefault(_wrapRedux);

var _counter = __webpack_require__("./states/counter.ts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'span',
          null,
          'hello world ',
          this.props.counter.count
        ),
        _react2.default.createElement(
          'a',
          { href: '', onClick: this.increment },
          ' ++ '
        ),
        ' |',
        _react2.default.createElement(
          'a',
          { href: '', onClick: this.decrement },
          ' -- '
        )
      );
    }
  }]);
  return Index;
}(_react2.default.Component);

exports.default = wrapper(function (props) {
  return _react2.default.createElement(Index, props);
});

/***/ }),

/***/ "./sagas/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _effects = __webpack_require__("redux-saga/effects");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(rootSaga);

function rootSaga() {
  return _regenerator2.default.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked, this);
};

exports.default = rootSaga;

/***/ }),

/***/ "./states/auth.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authReducer = undefined;

var _immutable = __webpack_require__("immutable");

var initialState = (0, _immutable.Map)({
  foo: "bar"
});

var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  return state;
};

exports.authReducer = authReducer;

/***/ }),

/***/ "./states/counter.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decrementAction = exports.incrementAction = exports.counterReducer = undefined;

var _util = __webpack_require__("./states/util.ts");

var _immutable = __webpack_require__("immutable");

var initialState = (0, _immutable.Map)({
    count: 0
});
var responders = [];
var incrementAction = (0, _util.createAction)('Counter:Increment');
var incrementResponder = (0, _util.createResponder)(incrementAction, function (state, action) {
    var amount = action.args.amount;

    return state.set('count', state.get('count') + (amount || 1));
});
responders.push(incrementResponder);
var decrementAction = (0, _util.createAction)('Counter:Decrement');
var decrementResponder = (0, _util.createResponder)(decrementAction, function (state, action) {
    var amount = action.args.amount;

    return state.set('count', state.get('count') - (amount || 1));
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

/***/ }),

/***/ "./states/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__("redux");

var _auth = __webpack_require__("./states/auth.js");

var _counter = __webpack_require__("./states/counter.ts");

var reducer = (0, _redux.combineReducers)({
  auth: _auth.authReducer,
  counter: _counter.counterReducer
});

exports.default = reducer;

/***/ }),

/***/ "./states/util.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var createAction = function createAction(label) {
    var action = function action(args) {
        return {
            type: label,
            args: args
        };
    };
    action.label = label;
    return action;
};
var createResponder = function createResponder(actionGen, responderCB) {
    var responder = function responder(state, action) {
        if (actionGen.label === action.type) {
            return responderCB(state, action);
        } else {
            return null;
        }
    };
    responder.label = actionGen.label;
    return responder;
};
var runResponders = function runResponders(responders, action, state) {
    for (var index in responders) {
        var newState = responders[index](state, action);
        if (newState) {
            return newState;
        }
    }
    return state;
};
exports.createAction = createAction;
exports.runResponders = runResponders;
exports.createResponder = createResponder;

/***/ }),

/***/ "./wrap-redux.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _redux = __webpack_require__("redux");

var _nextReduxWrapper = __webpack_require__("next-redux-wrapper");

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _states = __webpack_require__("./states/index.js");

var _states2 = _interopRequireDefault(_states);

var _reduxSaga = __webpack_require__("redux-saga");

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _sagas = __webpack_require__("./sagas/index.js");

var _sagas2 = _interopRequireDefault(_sagas);

var _nextReduxSaga = __webpack_require__("next-redux-saga");

var _nextReduxSaga2 = _interopRequireDefault(_nextReduxSaga);

var _immutable = __webpack_require__("immutable");

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/core-js/object/get-prototype-of":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),

/***/ "babel-runtime/helpers/classCallCheck":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),

/***/ "babel-runtime/helpers/createClass":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),

/***/ "babel-runtime/helpers/inherits":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),

/***/ "babel-runtime/helpers/possibleConstructorReturn":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "immutable":
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "next-redux-saga":
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-saga":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map