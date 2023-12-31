import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible' // 自动设置根字体大小
import './assets/style/reset.css'
import { Button } from 'vant';
import 'vant/lib/index.css';
import { Form, Field, CellGroup, Icon } from 'vant';
import { Uploader } from 'vant';
import { ActionSheet } from 'vant';

const app = createApp(App);

app.use(router)
app.use(Button)
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Icon);
app.use(Uploader);
app.use(ActionSheet);
app.mount('#app')
