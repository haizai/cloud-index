<template>
  <div class="animes">
    <h2 class="animes-title">动画爬虫及数据展现</h2>
    <p class="animes-info">数据来源 —— <a href="">2016年11月豆瓣爬虫</a></p>
    <div class="animes-search">
      <input type="text" placeholder="动画名称，导演，声优等" class="animes-input-keyword" v-model="keyword" @keydown.enter="search()">
      <input type="button" value="搜索" class="animes-input-search" @click="search()">
    </div>
    <div class="animes-box-container">
      <div class="animes-box">
        <div class="animes-item" @mouseenter="hover1 = true" @mouseleave="hover1 = false">
          <div class="animes-image animes-image-1463371"></div>
          <div class="animes-item-bg" :class="{'animes-item-bg-hover':hover1}"></div>
          <h3 class="animes-item-title" :class="{'animes-item-title-hover':hover1}">名侦探柯南</h3>
          <p class="animes-item-info" :class="{'animes-item-info-hover':hover1}">「名探偵コナン」
          <br>青山刚昌创作的侦探漫画改编</p>
          <p class="animes-item-more" :class="{'animes-item-more-hover':hover1}">
            <a href="/animes#/1463371">查看详情</a>
          </p>
        </div>
        <div class="animes-item" @mouseenter="hover2 = true" @mouseleave="hover2 = false">
          <div class="animes-image animes-image-1457573"></div>
          <div class="animes-item-bg" :class="{'animes-item-bg-hover':hover2}" style="opacity: 0.85"></div>
          <h3 class="animes-item-title" :class="{'animes-item-title-hover':hover2}">新世纪福音战士</h3>
          <p class="animes-item-info" :class="{'animes-item-info-hover':hover2}">「新世紀エヴァンゲリオン」<br>由龙之子工作室、GAINAX共同制作</p>
          <p class="animes-item-more" :class="{'animes-item-more-hover':hover2}">
            <a href="/animes#/1457573">查看详情</a>
          </p>
        </div>
        <div class="animes-item" @mouseenter="hover3 = true" @mouseleave="hover3 = false">
          <div class="animes-image animes-image-5397537"></div>
          <div class="animes-item-bg" :class="{'animes-item-bg-hover':hover3}"></div>
          <h3 class="animes-item-title" :class="{'animes-item-title-hover':hover3}">未闻花名</h3>
          <p class="animes-item-info" :class="{'animes-item-info-hover':hover3}">「あの日見た花の名前を
          <br>僕達はまだ知らない。」</p>
          <p class="animes-item-more" :class="{'animes-item-more-hover':hover3}">
            <a href="/animes#/5397537">查看详情</a>
          </p>
        </div>
        <div class="animes-item" @mouseenter="hover4 = true" @mouseleave="hover4 = false">
          <div class="animes-image animes-image-2043155"></div>
          <div class="animes-item-bg" :class="{'animes-item-bg-hover':hover4}" style="opacity: 0.85"></div>
          <h3 class="animes-item-title" :class="{'animes-item-title-hover':hover4}">反叛的鲁路修</h3>
          <p class="animes-item-info" :class="{'animes-item-info-hover':hover4}">「コードギアス 反逆のルルーシュ」
          <br>SUNRISE制作的原创动画</p>
          <p class="animes-item-more" :class="{'animes-item-more-hover':hover4}">
            <a href="/animes#/2043155">查看详情</a>
          </p>
        </div>
        <div class="animes-item" @mouseenter="hover5 = true" @mouseleave="hover5 = false">
          <div class="animes-image animes-image-5349275"></div>
          <div class="animes-item-bg" :class="{'animes-item-bg-hover':hover5}"></div>
          <h3 class="animes-item-title" :class="{'animes-item-title-hover':hover5}">魔法少女小圆</h3>
          <p class="animes-item-info" :class="{'animes-item-info-hover':hover5}">「魔法少女まどか☆マギカ」
          <br>新房昭之执导的原创动画</p>
          <p class="animes-item-more" :class="{'animes-item-more-hover':hover5}">
            <a href="/animes#/5349275">查看详情</a>
          </p>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'animes',
  data() {
    return {
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
      hover5: false,
      keyword: '',
    }
  },
  methods:{
    log(){
      console.log(this)
    },
    search(){
      document.location = `/animes#/?keyword=${this.keyword}&page=1&range=default&sort=count`
    }
  }
}
</script>

<style> 
  .animes {
    text-align: center;
    padding-top: 80px;
  }
  .animes-title {
    font-size: 24px;
    padding: 0 20px 20px;
  }
  .animes-info {
    font-size:16px;
    padding: 0 20px 40px;
  }
  .animes-search {
    height: 40px;
    padding-bottom: 40px;
    display: flex;
    justify-content: center;
  }
  .animes-input-keyword {
    width: 400px;
    height: 38px;
    padding: 0 10px;
    box-shadow: none;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #aaa;
    transition: all 0.2s;
  }
  .animes-input-keyword:focus {
    border-color: #00a1d6;
  }
  .animes-input-search {
    height: 40px;
    padding: 0 20px;
    border: none;
    background: #00a1d6;
    color: #fff;
    font-size: 18px;
    margin-left: 10px;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.2s;
  }
  .animes-input-search:hover {
    background: #29aad4;
  }
  .animes-box-container {
    background: #373d41;
  }
  .animes-box {
    display: flex;
    width: 1500px;
    margin: 0 auto;
  }
  .animes-item {
    width: 300px;
    height: 420px;
    overflow: hidden;
    position: relative;
  }
  .animes-item-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #161a1d;
    opacity: 0.6;
    transition: all 0.3s;
  }
  .animes-item-title {
    position: absolute;
    top: 48%;
    color: #fff;
    font-size: 24px;
    text-align: center;
    width: 100%;
    transition: all 0.3s;
  }
  .animes-item-title-hover {
    top: 20%;
  }
  .animes-item-bg-hover {
    background: #33cde5;
    opacity: 0.95;
  }
  .animes-item-info {
    position: absolute;
    top: 80%;
    color: #fff;
    font-size: 15px;
    text-align: center;
    width: 100%;
    transition: all 0.3s;
    opacity: 0;
  }
  .animes-item-info-hover {
    top: 45%;
    opacity: 1;
  }
  .animes-item-more {
    position: absolute;
    top: 100%;
    color: #fff;
    font-size: 15px;
    text-align: center;
    width: 100%;
    transition: all 0.3s;
    opacity: 0;
  }
  .animes-item-more {
    position: absolute;
    top: 100%;
    color: #fff;
    font-size: 15px;
    text-align: center;
    width: 100%;
    transition: all 0.3s;
    opacity: 0;
  }
  .animes-item-more-hover {
    top: 80%;
    opacity: 1;
  }
  .animes-item-more a {
    border: 1px solid #fff;
    padding: 10px 20px;
    transition: all 0.3s;
    cursor: pointer;
    color: #fff;
  }
  .animes-item-more a:hover {
    background: #fff;
    color: #33cde5;
  }

  .animes-image {
    width: 100%;
    height: 100%;
    background-size: cover;
  }
  .animes-image-1463371 {background-image: url('../assets/animes/1463371.jpg');}
  .animes-image-1457573 {background-image: url('../assets/animes/1457573.jpg');}
  .animes-image-5397537 {background-image: url('../assets/animes/5397537.jpg');}
  .animes-image-2043155 {background-image: url('../assets/animes/2043155.jpg');}
  .animes-image-5349275 {background-image: url('../assets/animes/5349275.jpg');}

  @media screen and (max-width: 1500px) {
    .animes-box {
      width: 100%;
    }
    .animes-item {
      width: 20vw;
      height: 28vw;
    }
  }
  @media screen and (max-width: 1000px) {
    .animes-box {
      width: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }
    .animes-item {
      width: 48vw;
      height: 69vw;
    }
    .animes-item-title {
      font-size: 20px;
    }
    .animes-item-info {
      font-size: 12px;
    }
  }

</style>