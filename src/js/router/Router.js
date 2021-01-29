import Vue from 'vue/dist/vue';
import VueRouter from "vue-router/dist/vue-router";
import {routes} from './routes'

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: routes
})