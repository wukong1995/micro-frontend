import { registerApplication, start } from 'single-spa'

function pathPrefix(prefix) {
  return function (location) {
    return location.pathname.startsWith(prefix);
  }
}
const SystemJS = window.System

registerApplication(
  // Name of our single-spa application
  'home',
  // loadingFunction
  () => SystemJS.import('http://localhost:8081/dist/home.js'),
  // activityFunction
  (location) => location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname.startsWith('/home'),
);

registerApplication(
  'navbar',
  () => SystemJS.import('@portal/navbar'),
  () => true
);

registerApplication(
  'list',
  () => SystemJS.import('@portal/list'),
  pathPrefix('/list')
);

start();