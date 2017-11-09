<template>
  <div class="container">
    <Nav_/>
    <router-view></router-view>
    <Foot/>
  </div>
</template>

<script>


import Nav_ from './components/Nav'
import Foot from './components/Foot'

export default {
  name: 'container',
  components: {
    Nav_,
    Foot,
  },
}
</script>