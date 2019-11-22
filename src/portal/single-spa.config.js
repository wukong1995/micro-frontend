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
  () => import('../home/home.app'),
  // activityFunction
  (location) => location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname.startsWith('/home'),
);

registerApplication(
  'navBar',
  () => import('../navBar/navBar.app').then(module => module.navBar),
  () => true
);

registerApplication(
  'list',
  () => import('../list/list.app'),
  pathPrefix('/list')
);

start();