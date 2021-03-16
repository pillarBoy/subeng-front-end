import { createApp } from 'vue';
import App from './App.vue';
import router from './routers'
import api from './api/index.js'

const app = createApp(App);
// app.prototype.$api = api;
app.use(router);
app.config.globalProperties.$api=api;
app.mount('#app');
