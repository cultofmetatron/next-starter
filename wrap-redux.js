
import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import withRedux from 'next-redux-wrapper';
import reducer from './states';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import withReduxSaga from 'next-redux-saga';

const wrapRedux = (getProps) => {
  return (component) => {
    getProps = getProps || ((state) => {
      return {};
    });

    const sagaMiddleware = createSagaMiddleware(rootSaga)

    const makeStore = (initialState, options) => {
      let store = createStore(
        reducer,
        initialState,
        applyMiddleware(sagaMiddleware)
      );
      store.runSagaTask = () => {
        store.sagaTask = sagaMiddleware.run(rootSaga)
      }
      // run the rootSaga initially
      store.runSagaTask();
      return store;
    };




    return withRedux(makeStore, getProps)(withReduxSaga(component));
  }
};

export default wrapRedux;

