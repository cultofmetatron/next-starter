webpackHotUpdate(4,{

/***/ "./states/counter.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decrementAction = exports.incrementAction = exports.counterReducer = undefined;

var _util = __webpack_require__("./states/util.ts");

var _immutable = __webpack_require__("./node_modules/immutable/dist/immutable.js");

(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

    enterModule && enterModule(module);
})();

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
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(initialState, 'initialState', '/Users/peterdecroos/projects/nuxt-starter/states/counter.ts');
    reactHotLoader.register(responders, 'responders', '/Users/peterdecroos/projects/nuxt-starter/states/counter.ts');
    reactHotLoader.register(incrementAction, 'incrementAction', '/Users/peterdecroos/projects/nuxt-starter/states/counter.ts');
    reactHotLoader.register(incrementResponder, 'incrementResponder', '/Users/peterdecroos/projects/nuxt-starter/states/counter.ts');
    reactHotLoader.register(decrementAction, 'decrementAction', '/Users/peterdecroos/projects/nuxt-starter/states/counter.ts');
    reactHotLoader.register(decrementResponder, 'decrementResponder', '/Users/peterdecroos/projects/nuxt-starter/states/counter.ts');
    reactHotLoader.register(counterReducer, 'counterReducer', '/Users/peterdecroos/projects/nuxt-starter/states/counter.ts');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.a564ad376275c7cfaa94.hot-update.js.map