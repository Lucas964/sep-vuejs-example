import Vue from 'vue';
import App from './app.vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';

Vue.use(VueMaterial)

new Vue({
  el: '#app',
  render: h => h(App)
})
