import { start } from 'single-spa'
import "@babel/polyfill"
import { GlobalEventDistributor } from './src/all_stores'
import { registerApp } from './src/utils'

const globalEventDistributor = new GlobalEventDistributor()

const init = async () => {
  const loadPromise = []

  loadPromise.push(registerApp(
    'home',
    '@portal/home',
    (location) => location.pathname === "" ||
      location.pathname === "/" ||
      location.pathname.startsWith('/home'),
    '@portal/homeStore',
    globalEventDistributor
  ))

  loadPromise.push(registerApp(
    'navbar',
    '@portal/navbar',
    () => true,
    null,
    null
  ))

  loadPromise.push(registerApp(
    'list',
    '@portal/list',
    '/list',
    '@portal/listStore',
    globalEventDistributor
  ))

  await Promise.all(loadPromise)
  start();
}

init()
