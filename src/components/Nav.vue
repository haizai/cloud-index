<template>
	<div>
	  <div class="nav">
	    <span class="nav-title">Haizainaive</span>
	    <ul class="nav-pc">
	    	<li class="nav-pc-item"@mouseenter="cssHover = true"@mouseleave="cssHover = false">
	    		<span :class="{'nav-pc-item-name-hover':cssHover}">css案例</span>
	    		<div class="nav-pc-item-more" v-show="cssHover">
	    			<p>flex布局</p>
	    			<p>transform矩阵变换</p>
	    		</div>
	    	</li>
	    	<li class="nav-pc-item"@mouseenter="gameHover = true"@mouseleave="gameHover = false">
	    		<span :class="{'nav-pc-item-name-hover':gameHover}">小游戏</span>
	    		<div class="nav-pc-item-more" v-show="gameHover">
	    			<p>扫雷</p>
	    			<p>推箱子</p>
	    		</div>
	    	</li>
	    	<li class="nav-pc-item"@mouseenter="gomokuHover = true"@mouseleave="gomokuHover = false">
	    		<span :class="{'nav-pc-item-name-hover':gomokuHover}">五子棋</span>
	    		<div class="nav-pc-item-more" v-show="gomokuHover">
	    			<p>单人模式</p>
	    			<p>联机模式</p>
	    			<p>人机对战</p>
	    		</div>
	    	</li>
	    	<li>登录</li>
	    	<li>注册</li>
	    </ul>
	    <i class="icon-phone-more" @click="phoneMoreShow = true"></i>
	  </div>
	  <div v-show="phoneMoreShow" class="nav-phone">
	  	<p>css案例</p>
	  	<p>小游戏</p>
	  	<p>五子棋</p>
	  </div>
	</div>
</template>

<script>


export default {
  name: 'nav',
  data(){
  	return {
  		gomokuHover: false,
  		gameHover: false,
  		cssHover: false,
  		phoneMoreShow: false,
  	}
  }
}
</script>

<style>
	.nav {
		height: 60px;
		line-height: 60px;
		background: #2e3033;
		color: #ccc;
		position: relative;
	}
	.nav-title {
		font-size: 24px;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
		padding-left: 40px;
	}
	.nav-pc {
		position: absolute;
		right: 20px;
		top: 0;
		height: 60px;
	}
	.nav-pc li {
		display: inline-block;
		padding: 0 16px;
		cursor: pointer;
		transition: all 0.3s;
	}
	.nav-pc-phone {
		display: none;
	}
	.nav-pc-item {
		position: relative;
	}
	.nav-pc-item-more {
		text-align: center;
		position: absolute;
		top: 45px;
		width: 100px;
		margin-left: -35px;
		padding: 20px 10px 10px;
		background: #2e3033;
		line-height: 30px;
		border-radius: 5px;
		transition: all 0.3s;
	}
	.nav-pc-tem-name-hover, .nav-pc-item-more p:hover {
		color: #1296db;
	}

  @media screen and (max-width: 800px) {
		.nav-pc {
			display: none;
		}
		.nav-phone {
			display: inline-block;
		}
	  .icon-phone-more { 
	  	background: url('../assets/icon/phone-more.png') no-repeat;
	  	background-position: center;
	  	width: 60px;
	  	height: 60px;
	  	position: absolute;
	  	top: 0;
	  	right: 0;
	  }
		.nav-phone {
			background: #1d1e1f;
			color: #fff;
			width: 100%;
		}
		.nav-phone p {
			line-height: 40px;
			height: 40px;
			width: 100%;
		}
  }

</style>