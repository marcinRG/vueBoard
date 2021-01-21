import '../scss/style.scss';
import './components/header';
import './components/custom-list';
import './components/button-handler';
import Vue from 'vue/dist/vue';
import App from './components/MyComponent';

const vueComponent = new Vue({
    el: "#vue-component",
    render: h => h(App)
});