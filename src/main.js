import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'
import { BootstrapVue } from 'bootstrap-vue'
import router from './router/index'
import store from './store'
import moment from 'moment';
import Loader from './components/templates/Loader'

Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.component('Loader', Loader)
Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('MM/DD/YYYY hh:mm')
    }
});

Vue.config.productionTip = true;

let app
if (!app) {
    app = new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app')
}
