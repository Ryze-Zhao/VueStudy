<template>
  <!-- 通常根据文件名改 -->
  <div class="users">
      <h1>Users中的H1标签</h1>
      <ul>
          <li v-for="user in users" v-on:click="user.show=!user.show">
              <h2>{{user.name}}</h2>
              <h3 v-show="user.show">{{user.position}}</h3>
          </li>
      </ul>
  </div>
</template>

<script>
  export default {
      // 上边Class名是什么这里跟着
      name: 'users',
      // 这种方法不太好，下面哪种是官方的建议的
      // props:["users"],
      props: {
          users: {
              type: Array,
              required: true
          }
          // 如果有多个就这么附加
          // ,hehehehe:{

          // }
      },
      data() {
          return {}
      }
  }
</script>


<style scoped>
  .users {
      width: 100%;
      max-width: 1200px;
      margin: 40px auto;
      padding: 0 20px;
      box-sizing: border-box;
  }

  ul {
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;
      padding: 0;
  }

  li {
      flex-grow: 1;
      flex-basis: 200px;
      text-align: center;
      padding: 30px;
      border: 1px solid #222;
      margin: 10px;
  }
</style>