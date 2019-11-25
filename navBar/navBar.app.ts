import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import NavBar from './src/root.component';

function domElementGetter() {
  return document.getElementById("navBar")
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: NavBar,
  domElementGetter,
})

export const bootstrap = (props) => {
  return reactLifecycles.bootstrap(props)
}

export const mount = [
  reactLifecycles.mount,
];

export const unmount = [
  reactLifecycles.unmount,
];