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
  'navbar',
  () => System.import('@portal/navbar'),
  () => true
);

registerApplication(
  'list',
  () => System.import('@portal/list'),
  pathPrefix('/list')
);

start();