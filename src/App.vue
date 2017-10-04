<template>
  <div id="app">
    <Container/>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>


import Container from './Container'

export default {
  name: 'app',
  components: {
    Container,
  },
}
</script>

<style>

i {
  display: inline-block;
}
code {
  background: #00a1d6;
  color: #fff;
  padding: 1px 5px;
  border-radius: 5px;
}
a {
  color: #333;
}
input {
  font-family: Microsoft YaHei,Arial,Helvetica,sans-serif;
  outline: none;
  color: #333;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
</style>
