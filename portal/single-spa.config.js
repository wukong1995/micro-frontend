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
  () => System.import('@portal/home'),
  // activityFunction
  (location) => location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname.startsWith('/home'),
);

registerApplication(
  'navBar',
  () => System.import('@portal/navbar').then(module => module.navBar),
  () => true
);

registerApplication(
  'list',
  () => System.import('@portal/list'),
  pathPrefix('/list')
);

start();