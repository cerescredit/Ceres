import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/reset.less'
import 'github-markdown-css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {
  Toast,
  Popup,
  Swipe,
  SwipeItem,
  List ,
  Loading
} from 'vant';
import 'vant/lib/index.css';
import './style/fonts.css'
import ercMethods from "./utils/ercMethods"
Vue.prototype.$toast = Toast
Vue.prototype.ercMethods = ercMethods
Vue.use(Popup).use(Swipe).use(SwipeItem).use(List).use(Loading)
Vue.use(ElementUI);
import VueClipBoard from 'vue-clipboard2'
Vue.use(VueClipBoard);
// 多语言
import VueI18n from 'vue-i18n'


Vue.use(VueI18n)
Vue.config.productionTip = false
const i18n = new VueI18n({
  locale: 'en',
  messages: {
    zh: require('@/lang/zh.js'),
    en: require('@/lang/en.js')
  }
})
import {
  Carousel,
  CarouselItem,
} from 'element-ui';
Vue.use(Carousel).use(CarouselItem)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')