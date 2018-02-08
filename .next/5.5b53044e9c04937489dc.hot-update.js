webpackHotUpdate(5,{

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(43);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(44);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(48);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _wrapRedux = __webpack_require__(414);

var _wrapRedux2 = _interopRequireDefault(_wrapRedux);

var _counter = __webpack_require__(405);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIndyYXBwZXIiLCJzdGF0ZSIsImNvdW50ZXIiLCJJbmRleCIsImluY3JlbWVudCIsImV2IiwicHJldmVudERlZmF1bHQiLCJwcm9wcyIsImRpc3BhdGNoIiwiYW1vdW50IiwiZGVjcmVtZW50IiwiY291bnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNLG1DQUFvQixVQUFBLEFBQUMsT0FBVSxBQUNuQzs7YUFDVyxNQURYLEFBQU8sQUFDVSxBQUVsQjtBQUhRLEFBQ0w7QUFGSixBQUFnQixDQUFBOztBQU1oQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJLEFBc0JNOzs7Ozs7Ozs7Ozs7OzswTUFDSixBLFlBQVksVUFBQSxBQUFDLElBQU8sQUFDbEI7U0FBQSxBQUFHLEFBQ0g7WUFBQSxBQUFLLE1BQUwsQUFBVyxTQUFTLDhCQUFnQixFQUFDLFFBQXJDLEFBQW9CLEFBQWdCLEFBQVMsQUFDOUM7QSxhLEFBQ0QsWUFBWSxVQUFBLEFBQUMsSUFBTyxBQUNsQjtTQUFBLEFBQUcsQUFDSDtZQUFBLEFBQUssTUFBTCxBQUFXLFNBQVMsOEJBQWdCLEVBQUMsUUFBckMsQUFBb0IsQUFBZ0IsQUFBUyxBQUM5QztBOzs7Ozs2QkFDUSxBQUNQO2FBQ0UsZ0JBQUEsY0FBQSxPQUNFLHNCQUFBLGNBQUEsUUFBQSxNQUFtQixxQkFBQSxBQUFLLE1BQUwsQUFBVyxRQURoQyxBQUNFLEFBQXNDLEFBQ3RDLHdCQUFBLGNBQUEsT0FBRyxNQUFILEFBQVEsSUFBRyxTQUFTLEtBQXBCLEFBQXlCLGFBRjNCLEFBRUUsU0FDQSxzQkFBQSxjQUFBLE9BQUcsTUFBSCxBQUFRLElBQUcsU0FBUyxLQUFwQixBQUF5QixhQUo3QixBQUNFLEFBR0UsQUFHTDs7OztFQWpCaUIsZ0JBQU0sQTs7MEJBb0JILFVBQUEsQUFBQyxPQUFEO1NBQVcsOEJBQUEsQUFBQyxPQUFaLEFBQVcsQUFBVztBQUE5QixBLENBQUEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL3BldGVyZGVjcm9vcy9wcm9qZWN0cy9udXh0LXN0YXJ0ZXIifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/peterdecroos/projects/nuxt-starter/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/peterdecroos/projects/nuxt-starter/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(82)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS41YjUzMDQ0ZTljMDQ5Mzc0ODlkYy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MDQxOTJlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd3JhcFJlZHV4IGZyb20gJy4uL3dyYXAtcmVkdXgnO1xuaW1wb3J0IHsgaW5jcmVtZW50QWN0aW9uLCBkZWNyZW1lbnRBY3Rpb24gfSBmcm9tICcuLi9zdGF0ZXMvY291bnRlcic7XG5cbmNvbnN0IHdyYXBwZXIgPSB3cmFwUmVkdXgoKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY291bnRlcjogc3RhdGUuY291bnRlclxuICB9O1xufSk7XG5cbi8qXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xuXG4gIGNvbnN0IGluY3JlbWVudCA9IChldikgPT4ge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcHJvcHMuZGlzcGF0Y2goaW5jcmVtZW50QWN0aW9uKHthbW91bnQ6IDF9KSk7XG4gIH1cbiAgY29uc3QgZGVjcmVtZW50ID0gKGV2KSA9PiB7XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICBwcm9wcy5kaXNwYXRjaChkZWNyZW1lbnRBY3Rpb24oe2Ftb3VudDogMX0pKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzcGFuPmhlbGxvIHdvcmxkIHtwcm9wcy5jb3VudGVyLmNvdW50fTwvc3Bhbj5cbiAgICAgIDxhIGhyZWY9XCJcIiBvbkNsaWNrPXtpbmNyZW1lbnR9ID4gKysgPC9hPiB8XG4gICAgICA8YSBocmVmPVwiXCIgb25DbGljaz17ZGVjcmVtZW50fSA+IC0tIDwvYT4gXG4gICAgPC9kaXY+XG4gICk7XG59XG4qL1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGluY3JlbWVudCA9IChldikgPT4ge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChpbmNyZW1lbnRBY3Rpb24oe2Ftb3VudDogMX0pKTtcbiAgfVxuICBkZWNyZW1lbnQgPSAoZXYpID0+IHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZGVjcmVtZW50QWN0aW9uKHthbW91bnQ6IDF9KSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8c3Bhbj5oZWxsbyB3b3JsZCB7dGhpcy5wcm9wcy5jb3VudGVyLmNvdW50fTwvc3Bhbj5cbiAgICAgICAgPGEgaHJlZj1cIlwiIG9uQ2xpY2s9e3RoaXMuaW5jcmVtZW50fSA+ICsrIDwvYT4gfFxuICAgICAgICA8YSBocmVmPVwiXCIgb25DbGljaz17dGhpcy5kZWNyZW1lbnR9ID4gLS0gPC9hPiBcbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcigocHJvcHMpID0+IDxJbmRleCB7Li4ucHJvcHN9IC8+KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBOztBQUVBO0FBQUE7QUFGQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUVBO0FBQUE7QUFFQTtBQUVBO0FBQUE7Ozs7OztBQUdBO0FBQ0E7Ozs7QUFYQTtBQUNBO0FBbUJBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9