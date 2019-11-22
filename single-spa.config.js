import { registerApplication, start } from 'single-spa'

function pathPrefix(prefix) {
  return function (location) {
    return location.pathname.startsWith(prefix);
  }
}

registerApplication(
  // Name of our single-spa application
  'home',
  // loadingFunction
  () => import('./src/home/home.app.js'),
  // activityFunction
  (location) => location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname.startsWith('/home'),
);

registerApplication(
  'navBar',
  () => import('./src/navBar/navBar.app.js').then(module => module.navBar),
  () => true
);

registerApplication(
  'list',
  () => import('./src/list/list.app.js'),
  pathPrefix('/list')
);

start();