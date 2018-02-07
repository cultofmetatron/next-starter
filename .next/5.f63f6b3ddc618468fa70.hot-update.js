webpackHotUpdate(5,{

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _wrapRedux = __webpack_require__(402);

var _wrapRedux2 = _interopRequireDefault(_wrapRedux);

var _counter = __webpack_require__(445);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/peterdecroos/projects/nuxt-starter/pages/index.js?entry';


var Index = function Index(props) {

  var increment = function increment(ev) {
    ev.preventDefault();
    props.dispatch((0, _counter.incrementAction)({ amount: 1 }));
  };
  var decrement = function decrement(ev) {
    ev.preventDefault();
    props.dispatch((0, _counter.decrementAction)({ amount: 1 }));
  };

  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, 'hello world ', props.counter.count), _react2.default.createElement('a', { href: '', onClick: increment, __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, ' ++ '), ' |', _react2.default.createElement('a', { href: '', onClick: decrement, __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, ' -- '));
};

exports.default = (0, _wrapRedux2.default)(Index, function (state) {
  return {
    counter: state.counter
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIndyYXBSZWR1eCIsImluY3JlbWVudEFjdGlvbiIsImRlY3JlbWVudEFjdGlvbiIsIkluZGV4IiwicHJvcHMiLCJpbmNyZW1lbnQiLCJldiIsInByZXZlbnREZWZhdWx0IiwiZGlzcGF0Y2giLCJhbW91bnQiLCJkZWNyZW1lbnQiLCJjb3VudGVyIiwiY291bnQiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLEFBQU8sQUFBZTs7OztBQUN0QixBQUFTLEFBQWlCLEFBQXVCOzs7Ozs7O0FBRWpELElBQU0sUUFBUSxTQUFSLEFBQVEsTUFBQSxBQUFDLE9BQVUsQUFFdkI7O01BQU0sWUFBWSxTQUFaLEFBQVksVUFBQSxBQUFDLElBQU8sQUFDeEI7T0FBQSxBQUFHLEFBQ0g7VUFBQSxBQUFNLFNBQVMsOEJBQWdCLEVBQUMsUUFBaEMsQUFBZSxBQUFnQixBQUFTLEFBQ3pDO0FBSEQsQUFJQTtNQUFNLFlBQVksU0FBWixBQUFZLFVBQUEsQUFBQyxJQUFPLEFBQ3hCO09BQUEsQUFBRyxBQUNIO1VBQUEsQUFBTSxTQUFTLDhCQUFnQixFQUFDLFFBQWhDLEFBQWUsQUFBZ0IsQUFBUyxBQUN6QztBQUhELEFBS0E7O3lCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsY0FBQTs7Z0JBQUE7a0JBQUE7QUFBQTtBQUFBLEtBQW1CLHNCQUFBLEFBQU0sUUFEM0IsQUFDRSxBQUFpQyxBQUNqQyx3QkFBQSxjQUFBLE9BQUcsTUFBSCxBQUFRLElBQUcsU0FBWCxBQUFvQjtnQkFBcEI7a0JBQUE7QUFBQTtLQUZGLEFBRUUsU0FDQSxzQkFBQSxjQUFBLE9BQUcsTUFBSCxBQUFRLElBQUcsU0FBWCxBQUFvQjtnQkFBcEI7a0JBQUE7QUFBQTtLQUpKLEFBQ0UsQUFHRSxBQUdMO0FBbEJELEFBb0JBOzsyQ0FBZSxBQUFVLE9BQU8sVUFBQSxBQUFDLE9BQVUsQUFDekM7O2FBQ1csTUFEWCxBQUFPLEFBQ1UsQUFFbEI7QUFIUSxBQUNMO0FBRkosQUFBZSxDQUFBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wZXRlcmRlY3Jvb3MvcHJvamVjdHMvbnV4dC1zdGFydGVyIn0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5mNjNmNmIzZGRjNjE4NDY4ZmE3MC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NmVhNmRiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3cmFwUmVkdXggZnJvbSAnLi4vd3JhcC1yZWR1eCc7XG5pbXBvcnQgeyBpbmNyZW1lbnRBY3Rpb24sIGRlY3JlbWVudEFjdGlvbiB9IGZyb20gJy4uL3N0YXRlcy9jb3VudGVyJztcblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IHtcblxuICBjb25zdCBpbmNyZW1lbnQgPSAoZXYpID0+IHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHByb3BzLmRpc3BhdGNoKGluY3JlbWVudEFjdGlvbih7YW1vdW50OiAxfSkpO1xuICB9XG4gIGNvbnN0IGRlY3JlbWVudCA9IChldikgPT4ge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICBwcm9wcy5kaXNwYXRjaChkZWNyZW1lbnRBY3Rpb24oe2Ftb3VudDogMX0pKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzcGFuPmhlbGxvIHdvcmxkIHtwcm9wcy5jb3VudGVyLmNvdW50fTwvc3Bhbj5cbiAgICAgIDxhIGhyZWY9XCJcIiBvbkNsaWNrPXtpbmNyZW1lbnR9ID4gKysgPC9hPiB8XG4gICAgICA8YSBocmVmPVwiXCIgb25DbGljaz17ZGVjcmVtZW50fSA+IC0tIDwvYT4gXG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBSZWR1eChJbmRleCwgKHN0YXRlKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY291bnRlcjogc3RhdGUuY291bnRlclxuICB9O1xufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQURBOztBQUVBO0FBQUE7QUFGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9