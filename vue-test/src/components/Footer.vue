<template>
  <footer>
    <p>{{copyright}}</p>
  </footer>
 </template>
 
 <script>
 export default {
   name: 'app-footer',
   data () {
     return {
      copyright:"Footer Copy 2019"
     }
   },components: {
     
   }
 }
 </script>
 
 <style scoped>
 footer{
   background:  #222;
   padding: 6px;
 }
 p{
   color: lightgreen;
   text-align: center;
 }
 </style>
 