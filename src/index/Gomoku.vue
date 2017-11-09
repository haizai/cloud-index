<template>
  <div class="gomoku">
    <div class="gomoku-bg"></div>
    <h2 class="gomoku-title" @click="log()">五子棋</h2>
    <div class="gomoku-nav">
      <div class="gomoku-bar" :style="{left:barLeft}"></div>
      <div 
        class="gomoku-nav-item" 
        @mouseenter="singleHover = true" 
        @mouseleave="singleHover = false" 
        @click="active = 's'"
      >
        <i class="icon-single" :class="{'icon-single-hover':singleHover || active == 's'}"></i>
        <br>
        <span :style="singleHover || active == 's'?styleHover:styleNormal">单人模式(无AI)</span>
      </div>
      <div 
        class="gomoku-nav-item" 
        @mouseenter="doubleHover = true" 
        @mouseleave="doubleHover = false"
        @click="active = 'd'"
      >
        <i class="icon-double" :class="{'icon-double-hover':doubleHover || active == 'd'}"></i>
        <br>
        <span :style="doubleHover || active == 'd'?styleHover:styleNormal">联机模式</span>
      </div>
      <div 
        class="gomoku-nav-item" 
        @mouseenter="aiHover = true"
        @mouseleave="aiHover = false"
        @click="active = 'a'"
      >
        <i class="icon-ai" :class="{'icon-ai-hover':aiHover || active == 'a'}"></i>
        <br>
        <span :style="aiHover || active == 'a'?styleHover:styleNormal">人机对战(有AI)</span>
      </div>
    </div>
    <div class="gomoku-cont">
      <div class="gomoku-cont-item" v-show="active == 's'">
        单人模式，黑白左右互搏。<br>
        背景由canvans绘制，棋盘由15×15的格子标签构成。<br>
        能正确判断胜负，支持悔棋等操作，是之后联机模式和人机对战的基础。<br>
        <a href="/gomoku#/outline" class="gomoku-more">游玩单人模式</a>
      </div>
      <div class="gomoku-cont-item" v-show="active == 'd'">
        联机模式，双人通关互联网对战。<br>
        首先需要在本站注册/登录之后才能进行对战<br>
        使用socket进行实时的联机及前后端交互<br>
        除了正常的落子，还有求和，悔棋，认输等联机交互。<br>
        <a href="/gomoku#/online" class="gomoku-more">游玩联机模式</a>
      </div>
      <div class="gomoku-cont-item" v-show="active == 'a'">
        人机对战，自制简易AI。<br>
        用一套自制的估值函数，使用极大极小值算法，并进行AlphaBeta剪枝<br>
        由于性能与优化问题，只计算未来2步<br>
        <a href="/gomoku#/ai" class="gomoku-more">游玩人机对战</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gomoku',
  data() {
    return {
      singleHover: false,
      doubleHover: false,
      aiHover: false,
      active: 's', // d , a
      styleNormal: {color: '#333'},
      styleHover: {color: '#1296db'},
      barLeft: '0',
    }
  },
  watch: {
    active(val) {
      switch (val) {
        case 's':
          this.barLeft = '0%'
          break;
        case 'd':
          this.barLeft = '33.333%'
          break;
        case 'a':
          this.barLeft = '66.667%'
          break
        default:
          // statements_def
          break;
      }
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
/*     height: 800px; */
    z-index: 0;
    overflow: hidden;
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
    margin-top: 15px;
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
    height: 150px;
    cursor: pointer;
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
  .gomoku-cont {
    margin-top: 5px;
    background: #f7f8fa;
    padding: 40px;
    font-size: 14px;
    line-height: 26px;
  }
  .gomoku-more {
    display: inline-block;
    height: 40px;
    margin-top: 20px;
    line-height: 40px;
    padding: 0 55px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    border: 1px solid rgb(18, 150, 219);
    transition: all .3s;
    color: rgb(18, 150, 219)
  }
  .gomoku-more:hover {
    color: #fff;
    background: rgb(18, 150, 219);
  } 
</style>