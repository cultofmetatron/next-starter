
import React, {Component} from 'react';
import {createStore, applyMiddleware} from 'redux';
import withRedux from 'next-redux-wrapper';
import reducer from './states';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import withReduxSaga from 'next-redux-saga';
import Immutable from 'immutable';

const wrapRedux = (getProps) => {
  return (component) => {
    getProps = getProps || ((state) => {
      return {};
    });

    const sagaMiddleware = createSagaMiddleware(rootSaga)

    const makeStore = (initialState = {}, options) => {
      // Nasty duck typing, you should find a better way to detect
      for (let key in initialState) {
        if (!initialState[key].toJS) 
          initialState[key] = Immutable.fromJS(initialState[key]);
      }

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

