webpackHotUpdate(5,{

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.decrementAction = exports.incrementAction = exports.counterReducer = undefined;

var _util = __webpack_require__(455);

var _immutable = __webpack_require__(387);

var initialState = (0, _immutable.Map)({
  count: 0
});

var responders = [];

var incrementAction = (0, _util.createAction)('Counter:Increment');
var incrementResponder = (0, _util.createResponder)(incrementAction, function (state, action) {
  var amount = action.args.amount;
  /*
  return {
    ...state,
    count: state.count + (amount || 1)
  }
  */

  return state.set('count', state.get('count') + (amount || 1));
});
responders.push(incrementResponder);

var decrementAction = (0, _util.createAction)('Counter:Decrement');
var decrementResponder = (0, _util.createResponder)(decrementAction, function (state, action) {
  var amount = action.args.amount;
  /*
  return {
    ...state,
    count: state.count - (amount || 1)
  }
  */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlcy9jb3VudGVyLmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImNvdW50IiwicmVzcG9uZGVycyIsImluY3JlbWVudEFjdGlvbiIsImluY3JlbWVudFJlc3BvbmRlciIsInN0YXRlIiwiYWN0aW9uIiwiYW1vdW50IiwiYXJncyIsInNldCIsImdldCIsInB1c2giLCJkZWNyZW1lbnRBY3Rpb24iLCJkZWNyZW1lbnRSZXNwb25kZXIiLCJjb3VudGVyUmVkdWNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUNBOztBQUNBLElBQU07U0FBTixBQUFxQixBQUFJLEFBQ2hCO0FBRGdCLEFBQ3ZCLENBRG1COztBQUlyQixJQUFJLGFBQUosQUFBaUI7O0FBRWpCLElBQU0sa0JBQWtCLHdCQUF4QixBQUF3QixBQUFhO0FBQ3JDLElBQU0sZ0RBQXFCLEFBQWdCLGlCQUFpQixVQUFBLEFBQUMsT0FBRCxBQUFRLFFBQVc7TUFBQSxBQUNyRSxTQUFXLE9BRDBELEFBQ25ELEtBRG1ELEFBQ3JFLEFBQ1I7QUFNQTs7Ozs7OztTQUFPLE1BQUEsQUFBTSxJQUFOLEFBQVUsU0FBUyxNQUFBLEFBQU0sSUFBTixBQUFVLFlBQVksVUFBaEQsQUFBTyxBQUFtQixBQUFnQyxBQUUzRDtBQVZELEFBQTJCLENBQUE7QUFXM0IsV0FBQSxBQUFXLEtBQVgsQUFBZ0I7O0FBRWhCLElBQU0sa0JBQWtCLHdCQUF4QixBQUF3QixBQUFhO0FBQ3JDLElBQU0sZ0RBQXFCLEFBQWdCLGlCQUFpQixVQUFBLEFBQUMsT0FBRCxBQUFRLFFBQVc7TUFBQSxBQUNyRSxTQUFXLE9BRDBELEFBQ25ELEtBRG1ELEFBQ3JFLEFBQ1I7QUFNQTs7Ozs7OztTQUFPLE1BQUEsQUFBTSxJQUFOLEFBQVUsU0FBUyxNQUFBLEFBQU0sSUFBTixBQUFVLFlBQVksVUFBaEQsQUFBTyxBQUFtQixBQUFnQyxBQUMzRDtBQVRELEFBQTJCLENBQUE7QUFVM0IsV0FBQSxBQUFXLEtBQVgsQUFBZ0I7O0FBRWhCLElBQU0saUJBQWlCLFNBQWpCLEFBQWlCLGlCQUFxQztNQUE1QixBQUE0Qiw0RUFBdEIsQUFBc0I7TUFBUixBQUFRLG1CQUMxRDs7U0FBTyx5QkFBQSxBQUFjLFlBQWQsQUFBMEIsUUFBakMsQUFBTyxBQUFrQyxBQUMxQztBQUZEOztRQUtFLEEsaUJBQUEsQTtRQUNBLEEsa0JBQUEsQTtRQUNBLEEsa0JBQUEsQSIsImZpbGUiOiJjb3VudGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wZXRlcmRlY3Jvb3MvcHJvamVjdHMvbnV4dC1zdGFydGVyIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/peterdecroos/projects/nuxt-starter/states/counter.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/peterdecroos/projects/nuxt-starter/states/counter.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5hNjIxODQ3NmY2NTg1NTZlODEzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3RhdGVzL2NvdW50ZXIuanM/ZDNlOGYwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IGNyZWF0ZUFjdGlvbiwgY3JlYXRlUmVzcG9uZGVyLCBydW5SZXNwb25kZXJzIH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7IE1hcCB9IGZyb20gJ2ltbXV0YWJsZSdcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IE1hcCh7XG4gIGNvdW50OiAwXG59KTtcblxubGV0IHJlc3BvbmRlcnMgPSBbXTtcblxuY29uc3QgaW5jcmVtZW50QWN0aW9uID0gY3JlYXRlQWN0aW9uKCdDb3VudGVyOkluY3JlbWVudCcpO1xuY29uc3QgaW5jcmVtZW50UmVzcG9uZGVyID0gY3JlYXRlUmVzcG9uZGVyKGluY3JlbWVudEFjdGlvbiwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgY29uc3QgeyBhbW91bnQgfSA9IGFjdGlvbi5hcmdzO1xuICAvKlxuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIGNvdW50OiBzdGF0ZS5jb3VudCArIChhbW91bnQgfHwgMSlcbiAgfVxuICAqL1xuICByZXR1cm4gc3RhdGUuc2V0KCdjb3VudCcsIHN0YXRlLmdldCgnY291bnQnKSArIChhbW91bnQgfHwgMSkpO1xuXG59KTtcbnJlc3BvbmRlcnMucHVzaChpbmNyZW1lbnRSZXNwb25kZXIpO1xuXG5jb25zdCBkZWNyZW1lbnRBY3Rpb24gPSBjcmVhdGVBY3Rpb24oJ0NvdW50ZXI6RGVjcmVtZW50Jyk7XG5jb25zdCBkZWNyZW1lbnRSZXNwb25kZXIgPSBjcmVhdGVSZXNwb25kZXIoZGVjcmVtZW50QWN0aW9uLCAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBjb25zdCB7IGFtb3VudCB9ID0gYWN0aW9uLmFyZ3M7XG4gIC8qXG4gIHJldHVybiB7XG4gICAgLi4uc3RhdGUsXG4gICAgY291bnQ6IHN0YXRlLmNvdW50IC0gKGFtb3VudCB8fCAxKVxuICB9XG4gICovXG4gIHJldHVybiBzdGF0ZS5zZXQoJ2NvdW50Jywgc3RhdGUuZ2V0KCdjb3VudCcpIC0gKGFtb3VudCB8fCAxKSk7XG59KTtcbnJlc3BvbmRlcnMucHVzaChkZWNyZW1lbnRSZXNwb25kZXIpO1xuXG5jb25zdCBjb3VudGVyUmVkdWNlciA9IGZ1bmN0aW9uKHN0YXRlPWluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHJldHVybiBydW5SZXNwb25kZXJzKHJlc3BvbmRlcnMsIGFjdGlvbiwgc3RhdGUpXG59XG5cbmV4cG9ydCB7XG4gIGNvdW50ZXJSZWR1Y2VyLFxuICBpbmNyZW1lbnRBY3Rpb24sXG4gIGRlY3JlbWVudEFjdGlvblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0YXRlcy9jb3VudGVyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTs7Ozs7OztBQUFBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7Ozs7Ozs7QUFBQTtBQVJBO0FBVUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUNBOzs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=