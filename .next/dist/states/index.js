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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsImNvbWJpbmVSZWR1Y2VycyIsImF1dGhSZWR1Y2VyIiwiY291bnRlclJlZHVjZXIiLCJyZWR1Y2VyIiwiYXV0aCIsImNvdW50ZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLEFBQVMsQUFBYTs7QUFFdEIsQUFBUyxBQUFtQjs7QUFDNUIsQUFBUyxBQUFzQjs7QUFFL0IsSUFBTTtBQUEwQixBQUN4QixBQUNOO0FBRkYsQUFBZ0IsQUFBZ0IsQUFFckIsQUFHWDtBQUxnQyxBQUM5QixDQURjOztrQkFLaEIsQUFBZSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGV0ZXJkZWNyb29zL3Byb2plY3RzL251eHQtc3RhcnRlciJ9