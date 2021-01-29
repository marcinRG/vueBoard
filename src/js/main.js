import Vue from 'vue/dist/vue';
import App from "./components/App";
import {router} from "./router/Router";
import '../scss/style.scss';

new Vue({
    el: '#box-app',
    render: h => h(App),
    router: router
});