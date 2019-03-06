<template>
  <!-- 通常根据文件名改 -->
  <div class="users">
    <h1>Users中的H1标签</h1>
    <ul>
      <li v-for="user in users">{{user}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    // 上边Class名是什么这里跟着
    name: 'users',
    data() {
      return {
        users: ["Mario", "Luffy", "Yoshi"]
      }
    }
  }
</script>


<style scoped>
    h1{
      color: green
    }
    </style>