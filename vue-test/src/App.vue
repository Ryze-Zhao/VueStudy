<template>
  <div id="app">
  <app-header></app-header>
  <!-- 左边的users是传入到Users.vue中，引入的Key；右边的users是下边data的key； -->
  <users v-bind:users="users"></users>
  <app-footer></app-footer>
  </div>
</template>

<script>
// 这是注册局部组件
import Users from './components/Users'
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'app',
  data(){
    return{
      users: [
                  {name:"Mario",position:"Web开发",show:false},
                  {name:"Mario",position:"Web开发",show:false},
                  {name:"Mario",position:"Web开发",show:false},
                  {name:"Mario",position:"Web开发",show:false},
                  {name:"Mario",position:"Web开发",show:false},
                  {name:"Mario",position:"Web开发",show:false},
                  {name:"Mario",position:"Web开发",show:false}

              ]
    }
  },components: {
    // 这是注册局部组件,名字不能与html标签相同
    "users":Users,
    "app-header":Header,
    "app-footer": Footer
  }
}
</script>

<style scoped>
h1{
  color: purple
}
</style>
