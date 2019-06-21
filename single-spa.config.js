import { registerApplication, start } from 'single-spa'

registerApplication(
  // Name of our single-spa application
  'home',
  // loadingFunction
  () => import(/* webpackChunkName: "home" */ './src/home/home.app.js'),
  // activityFunction
  () => location.pathname === "/" || 
    location.pathname === "/home"
);
registerApplication(
  // Name of our single-spa application
  'vue',
  // loadingFunction
  () => import(/* webpackChunkName: "vue" */ './src/vue/vue.app.js'),
  // activityFunction
  pathPrefix('/vue')
);
registerApplication(
  // Name of our single-spa application
  'test',
  // loadingFunction
  () => import(/* webpackChunkName: "test" */ './src/test/test.app.js'),
  // activityFunction
  pathPrefix('/test')
);
registerApplication(
  // Name of our single-spa application
  'register',
  // loadingFunction
  () => import(/* webpackChunkName: "test" */ './src/register/register.app.js'),
  // activityFunction
  pathPrefix('/register')
);
function pathPrefix(prefix) {
  return function(location) {
      return location.pathname.indexOf(`${prefix}`) === 0;
  }
}

start();

