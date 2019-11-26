import * as singleSpa from 'single-spa'; // waiting for this to be merged: https://github.com/CanopyTax/single-spa/pull/156

export function hashPrefix(prefix) {
  return function (location) {
    return location.pathname.startsWith(prefix);
  }
}

const SystemJS = window.System

export async function registerApp(name, appURL, activity, storeURL, globalEventDistributor) {
  let storeModule = {}, customProps = { globalEventDistributor };

  // try to import the store module
  try {
    storeModule = storeURL ? await SystemJS.import(storeURL) : { default: null };
  } catch (e) {
    console.log(`Could not load store of app ${name}.`, e);
  }

  if (storeModule.default && globalEventDistributor) {
    // add a reference of the store to the customProps
    customProps.store = storeModule.default;

    // register the store with the globalEventDistributor
    globalEventDistributor.registerStore(storeModule.default);
  }
  
  let isActive  = null
  if (typeof activity === 'string') {
    isActive = hashPrefix(activity)
  } else {
    isActive = activity
  }
  singleSpa.registerApplication(name, () => SystemJS.import(appURL), isActive, customProps);
}