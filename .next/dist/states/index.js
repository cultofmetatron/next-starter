'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _auth = require('./auth');

var _counter = require('./counter');

var reducer = (0, _redux.combineReducers)({
  auth: _auth.authReducer,
  counter: _counter.counterReducer
});

exports.default = reducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwiYXV0aCIsImNvdW50ZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOztBQUVBOztBQUNBOztBQUVBLElBQU07Y0FBMEIsQUFFOUI7b0JBRkYsQUFBZ0IsQUFBZ0I7QUFBQSxBQUM5QixDQURjOztrQkFLRCxBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wZXRlcmRlY3Jvb3MvcHJvamVjdHMvbnV4dC1zdGFydGVyIn0=