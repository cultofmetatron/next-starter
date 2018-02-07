webpackHotUpdate(5,{

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decrementAction = exports.incrementAction = exports.counterReducer = undefined;

var _extends2 = __webpack_require__(103);

var _extends3 = _interopRequireDefault(_extends2);

var _util = __webpack_require__(446);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  count: 0
};

var responders = [];

var incrementAction = (0, _util.createAction)('Counter:Increment');
var incrementResponder = (0, _util.createResponder)(incrementAction, function (state, action) {
  var amount = action.args.amount;

  return (0, _extends3.default)({}, state, {
    count: state.count + (amount || 1)
  });
});
responders.push(incrementResponder);

var decrementAction = (0, _util.createAction)('Counter:Decrement');
var decrementResponder = (0, _util.createResponder)(decrementAction, function (state, action) {
  var amount = action.args.amount;

  return (0, _extends3.default)({}, state, {
    count: state.count - (amount || 1)
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlcy9jb3VudGVyLmpzIl0sIm5hbWVzIjpbImNyZWF0ZUFjdGlvbiIsImNyZWF0ZVJlc3BvbmRlciIsInJ1blJlc3BvbmRlcnMiLCJpbml0aWFsU3RhdGUiLCJjb3VudCIsInJlc3BvbmRlcnMiLCJpbmNyZW1lbnRBY3Rpb24iLCJpbmNyZW1lbnRSZXNwb25kZXIiLCJzdGF0ZSIsImFjdGlvbiIsImFtb3VudCIsImFyZ3MiLCJwdXNoIiwiZGVjcmVtZW50QWN0aW9uIiwiZGVjcmVtZW50UmVzcG9uZGVyIiwiY291bnRlclJlZHVjZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsQUFBUyxBQUFjLEFBQWlCLEFBQXFCOzs7O0FBRTdELElBQU07U0FBTixBQUFxQixBQUNaO0FBRFksQUFDbkI7O0FBR0YsSUFBSSxhQUFKLEFBQWlCOztBQUVqQixJQUFNLGtCQUFrQix3QkFBeEIsQUFBd0IsQUFBYTtBQUNyQyxJQUFNLGdEQUFxQixBQUFnQixpQkFBaUIsVUFBQSxBQUFDLE9BQUQsQUFBUSxRQUFXO01BQUEsQUFDckUsU0FBVyxPQUQwRCxBQUNuRCxLQURtRCxBQUNyRSxBQUNSOztvQ0FBQSxBQUNLO1dBQ0ksTUFBQSxBQUFNLFNBQVMsVUFGeEIsQUFFUyxBQUF5QixBQUVuQztBQUZHO0FBSkosQUFBMkIsQ0FBQTtBQU8zQixXQUFBLEFBQVcsS0FBWCxBQUFnQjs7QUFFaEIsSUFBTSxrQkFBa0Isd0JBQXhCLEFBQXdCLEFBQWE7QUFDckMsSUFBTSxnREFBcUIsQUFBZ0IsaUJBQWlCLFVBQUEsQUFBQyxPQUFELEFBQVEsUUFBVztNQUFBLEFBQ3JFLFNBQVcsT0FEMEQsQUFDbkQsS0FEbUQsQUFDckUsQUFDUjs7b0NBQUEsQUFDSztXQUNJLE1BQUEsQUFBTSxTQUFTLFVBRnhCLEFBRVMsQUFBeUIsQUFFbkM7QUFGRztBQUpKLEFBQTJCLENBQUE7QUFPM0IsV0FBQSxBQUFXLEtBQVgsQUFBZ0I7O0FBRWhCLElBQU0saUJBQWlCLFNBQWpCLEFBQWlCLGlCQUFxQztNQUE1QixBQUE0Qiw0RUFBdEIsQUFBc0I7TUFBUixBQUFRLG1CQUMxRDs7U0FBTyx5QkFBQSxBQUFjLFlBQWQsQUFBMEIsUUFBakMsQUFBTyxBQUFrQyxBQUMxQztBQUZELEFBSUE7O1FBQUEsQUFDRTtRQURGLEFBRUU7UUFGRixBQUdFIiwiZmlsZSI6ImNvdW50ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BldGVyZGVjcm9vcy9wcm9qZWN0cy9udXh0LXN0YXJ0ZXIifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/peterdecroos/projects/nuxt-starter/states/counter.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/peterdecroos/projects/nuxt-starter/states/counter.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45OGI3NjU1ZWZlMzhlNDAzMGVhNy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3RhdGVzL2NvdW50ZXIuanM/OTAyODI0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGNyZWF0ZUFjdGlvbiwgY3JlYXRlUmVzcG9uZGVyLCBydW5SZXNwb25kZXJzIH0gZnJvbSAnLi91dGlsJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBjb3VudDogMFxufTtcblxubGV0IHJlc3BvbmRlcnMgPSBbXTtcblxuY29uc3QgaW5jcmVtZW50QWN0aW9uID0gY3JlYXRlQWN0aW9uKCdDb3VudGVyOkluY3JlbWVudCcpO1xuY29uc3QgaW5jcmVtZW50UmVzcG9uZGVyID0gY3JlYXRlUmVzcG9uZGVyKGluY3JlbWVudEFjdGlvbiwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgY29uc3QgeyBhbW91bnQgfSA9IGFjdGlvbi5hcmdzO1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGNvdW50OiBzdGF0ZS5jb3VudCArIChhbW91bnQgfHwgMSlcbiAgfVxufSk7XG5yZXNwb25kZXJzLnB1c2goaW5jcmVtZW50UmVzcG9uZGVyKTtcblxuY29uc3QgZGVjcmVtZW50QWN0aW9uID0gY3JlYXRlQWN0aW9uKCdDb3VudGVyOkRlY3JlbWVudCcpO1xuY29uc3QgZGVjcmVtZW50UmVzcG9uZGVyID0gY3JlYXRlUmVzcG9uZGVyKGRlY3JlbWVudEFjdGlvbiwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgY29uc3QgeyBhbW91bnQgfSA9IGFjdGlvbi5hcmdzO1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGNvdW50OiBzdGF0ZS5jb3VudCAtIChhbW91bnQgfHwgMSlcbiAgfVxufSk7XG5yZXNwb25kZXJzLnB1c2goZGVjcmVtZW50UmVzcG9uZGVyKTtcblxuY29uc3QgY291bnRlclJlZHVjZXIgPSBmdW5jdGlvbihzdGF0ZT1pbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICByZXR1cm4gcnVuUmVzcG9uZGVycyhyZXNwb25kZXJzLCBhY3Rpb24sIHN0YXRlKVxufVxuXG5leHBvcnQge1xuICBjb3VudGVyUmVkdWNlcixcbiAgaW5jcmVtZW50QWN0aW9uLFxuICBkZWNyZW1lbnRBY3Rpb25cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdGF0ZXMvY291bnRlci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==