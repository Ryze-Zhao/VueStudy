<template>
  <div id="app">
  <h1>{{title}}</h1>
  <users></users>
  </div>
</template>

<script>
// 这是注册局部组件
import Users from './components/Users'

export default {
  name: 'app',
  data(){
    return{
      title:"这是脚手架"
    }
  },components: {
    // 这是注册局部组件,名字不能与html标签相同
    "users":Users
  }
}
</script>

<style>
h1{
  color: purple
}
</style>
