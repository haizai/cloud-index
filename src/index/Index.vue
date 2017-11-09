<template>
  <div class="index">
    <Carousel/>
    <Sect/>
    <Todos/>
    <Gomoku/>
    <Game/>  
    <Animes/>
  </div>
</template>

<script>

import Todos from './Todos'
import Animes from './Animes'
import Gomoku from './Gomoku'
import Game from './Game'
import Carousel from './Carousel'
import Sect from './Sect'

export default {
  name: 'index',
  components: {
    Carousel,
    Todos,
    Animes,
    Game,
    Gomoku,
    Sect,
  },
}
</script>