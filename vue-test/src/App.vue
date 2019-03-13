<template>
  <div id="app">
  <app-header></app-header>
  <users></users>
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
      title:"这是脚手架"
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
