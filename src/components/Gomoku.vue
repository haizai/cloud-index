<template>
  <div class="gomoku">
    <!-- <div class="gomoku-bg"></div> -->
    <h2 class="gomoku-title" @click="log()">五子棋</h2>
    <div class="gomoku-nav">
      <div class="gomoku-bar" :style="{left:barLeft}"></div>
      <div class="gomoku-nav-item" @mouseenter="singleHover = true" @mouseleave="singleHover = false">
        <i class="icon-single" :class="{'icon-single-hover':singleHover}"></i>
        <br>
        <span :style="singleHover?styleHover:styleNormal">单人模式(无AI)</span>
        </div>
      <div class="gomoku-nav-item" @mouseenter="doubleHover = true" @mouseleave="doubleHover = false">
        <i class="icon-double" :class="{'icon-double-hover':doubleHover}"></i>
        <br>
        <span :style="doubleHover?styleHover:styleNormal">联机模式</span>
      </div>
      <div class="gomoku-nav-item" @mouseenter="aiHover = true" @mouseleave="aiHover = false">
        <i class="icon-ai" :class="{'icon-ai-hover':aiHover}"></i>
        <br>
        <span :style="aiHover?styleHover:styleNormal">人机对战(有AI)</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gomoku',
  data() {
    return {
      singleHover: true,
      doubleHover: false,
      aiHover: false,
      styleNormal: {color: '#333'},
      styleHover: {color: '#1296db'},
      barLeft: '0',
    }
  },
  watch: {
    singleHover(bool){
      if (bool) this.barLeft = '0%'
    },
    doubleHover(bool){
      if (bool) this.barLeft = '33.333%'
    },
    aiHover(bool){
      if (bool) this.barLeft = '66.667%'
    },
  },
  methods:{
    log(){
      console.log(this)
    }
  }
}
</script>

<style> 

  .gomoku {
    text-align: center;
    background: #f3dbad;
    position: relative;
    width: 100%;
    height: 800px;
    z-index: 0;
  }
  .gomoku-bg {
    background-image: url('../assets/bg/gomoku.jpg');
    width: 1024px;
    height: 608px;
    position: absolute;
    right: 50%;
    bottom: 50%;
    transform: translate(50%,50%);
    background-size: cover;
    opacity: 0.3;
    z-index: -1;
  }

  .gomoku-title {
    font-size: 24px;
    padding: 80px 20px 60px;
  }


  @media screen and (max-width: 1024px) {
    .gomoku-bg {
      width: 100vw;
      height: 50vw;
    }
  }

  .gomoku i {
    margin-top: 3px;
    width: 80px;
    height: 80px;
  }


  .icon-single { background: url('../assets/icon/single.png') }
  .icon-single-hover { background: url('../assets/icon/single-hover.png') }
  .icon-double { background: url('../assets/icon/double.png') }
  .icon-double-hover { background: url('../assets/icon/double-hover.png') }
  .icon-ai { background: url('../assets/icon/ai.png') }
  .icon-ai-hover { background: url('../assets/icon/ai-hover.png') }

  .gomoku-nav {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }


  .gomoku-nav-item {
    display: inline-block;
    flex: 1;
    height: 120px;
  }
  .gomoku-nav-item span {
    font-size: 16px;
    line-height: 30px;
  }

  .gomoku-bar {
    position: absolute;
    width: 33.333%;
    height: 5px;
    background: rgb(18, 150, 219);
    bottom: -5px;
    left: 0px;
    transition: all 0.5s;
  }
</style>