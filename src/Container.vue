<template>
  <div class="container">
    <Nav_/>
    <Todos/>
    <Gomoku/>
    <Game/>  
    <Animes/>
    <Foot/>
  </div>
</template>

<script>


import Nav_ from './components/Nav'
import Todos from './components/Todos'
import Animes from './components/Animes'
import Gomoku from './components/Gomoku'
import Game from './components/Game'
import Foot from './components/Foot'

export default {
  name: 'container',
  components: {
    Nav_,
    Todos,
    Animes,
    Game,
    Gomoku,
    Foot,
  },
}
</script>