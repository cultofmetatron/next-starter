
import React, {Component} from 'react';
import {createStore} from 'redux';
import withRedux from 'next-redux-wrapper';
import reducer from './states';
const wrapRedux = (component, getProps) => {
  getProps = getProps || ((state) => {
    return {};
  });

  const makeStore = (initialState, options) => {
    return createStore(reducer, initialState);
  }
  return withRedux(makeStore, getProps)(component);
};

export default wrapRedux;

