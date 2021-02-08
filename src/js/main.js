import Vue from 'vue';
import App from './components/App';
import {router} from './router/Router';
import '../scss/style.scss';
import {store} from './store/store';

new Vue({
    el: '#box-app',
    render: h => h(App),
    router: router,
    store: store
});