<template>
  <div class="container">
    <Nav_/>
    <Todos/>
    <Animes/>
    <Gomoku/>
  </div>
</template>

<script>


import Nav_ from './components/Nav'
import Todos from './components/Todos'
import Animes from './components/Animes'
import Gomoku from './components/Gomoku'

export default {
  name: 'container',
  components: {
    Nav_,
    Todos,
    Animes,
    Gomoku,
  },
}
</script>