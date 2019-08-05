import '@babel/polyfill' // <- babel Polyfills
import 'whatwg-fetch' // <- Fetch API Polyfill

import Vue from 'vue'
import App from './Components/App/App.vue'

import config from './../config'
import worker from './registerServiceWorker' // <- register service worker, disable it, when running in development mode
import customStorage from './storage'

Vue.prototype.config = config // <- set config to global scope

Vue.prototype.config.app.gateway = window.gateway;

/* (global) This code is going to tell us, if history mode can be activated on the client, so the application can be consumed without localstorage */
Vue.prototype.history = () => {
    try {
        customStorage.getItem('check')
        return true
    }

    catch {
        return false
    }
}

/* (global) Currently selected language or fallback language (en). Needs to be a function, since it's reactive. No need for vuex there */
Vue.prototype.lang = () => {
    if(Vue.prototype.history()) return customStorage.getItem('lang') || config.app.fallback_lang

    else {
        return config.app.fallback_lang
    }
}

new Vue({
    el: '#app',
    render: h => h(App)
}).$mount('#app')