import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import Index from './index.vue'
import router from '../router.js'
import Mixin from '~/Mixin/mixin';

Vue.mixin(Mixin)
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#vue',
    router: router,
    render: h => h(Index),
  }  
});

export const bootstrap = [
  vueLifecycles.bootstrap,
];

export const mount = [
  vueLifecycles.mount,
];

export const unmount = [
  vueLifecycles.unmount,
];
