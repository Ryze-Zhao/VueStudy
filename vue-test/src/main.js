import Vue from 'vue'
import App from './App'
import Users from './components/Users'

Vue.config.productionTip = false

//全局注册组件,前面users是要用时的名称，后面Users是上面引入的
Vue.component("users",Users);


new Vue({
  el: '#app',//对应index.html的id
  components: { App},
  template: '<App/>'
})
