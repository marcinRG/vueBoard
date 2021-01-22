import '../../scss/style.scss';
import './header';
import './custom-list';
import './button-handler';
import Vue from 'vue/dist/vue';
import App from './MyComponent';

const vueComponent = new Vue({
    el: "#vue-component",
    render: h => h(App)
});