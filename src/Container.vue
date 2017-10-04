<template>
  <div class="container">
    <Nav_/>
    <Todos/>
    <Animes/>
  </div>
</template>

<script>


import Nav_ from './components/Nav'
import Todos from './components/Todos'
import Animes from './components/Animes'

export default {
  name: 'container',
  components: {
    Nav_,
    Todos,
    Animes,
  },
}
</script>