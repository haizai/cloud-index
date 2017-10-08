<template>
	<div>
	  <div class="nav">
	    <span class="nav-title">Haizainaive</span>
	    <ul class="nav-pc">
	    	<li class="nav-pc-item" @mouseenter="cssHover = true" @mouseleave="cssHover = false">
	    		<span :class="{'nav-pc-item-name-hover':cssHover}">css案例</span>
	    		<div class="nav-pc-item-more" v-show="cssHover">
	    			<p>flex布局</p>
	    			<p>transform矩阵变换</p>
	    		</div>
	    	</li>
	    	<li class="nav-pc-item" @mouseenter="gameHover = true" @mouseleave="gameHover = false">
	    		<span :class="{'nav-pc-item-name-hover':gameHover}">小游戏</span>
	    		<div class="nav-pc-item-more" v-show="gameHover">
	    			<p>扫雷</p>
	    			<p>推箱子</p>
	    		</div>
	    	</li>
	    	<li class="nav-pc-item" @mouseenter="gomokuHover = true" @mouseleave="gomokuHover = false">
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
	    <i class="nav-right-icon" :class="phoneMoreShow?'icon-close':'icon-category'" @click="phoneMoreShow = !phoneMoreShow"></i>
	  </div>
	  <div v-show="phoneMoreShow" class="nav-phone">
	  	<div @touchstart="cssIn=!cssIn" class="nav-phone-1">css案例 
	  		<i class="nav-phone-icon" :class="cssIn?'icon-bottom':'icon-top'"></i>
	  	</div>
	  	<div class="nav-phone-2" v-show="cssIn">flex布局</div>
	  	<div class="nav-phone-2" v-show="cssIn">transform矩阵变换</div>
	  	<div @touchstart="gameIn=!gameIn" class="nav-phone-1">小游戏 
	  		<i class="nav-phone-icon" :class="gameIn?'icon-bottom':'icon-top'"></i>
	  	</div>
	  	<div class="nav-phone-2" v-show="gameIn">扫雷</div>
	  	<div class="nav-phone-2" v-show="gameIn">推箱子</div>
	  	<div @touchstart="gomokuIn=!gomokuIn" class="nav-phone-1">五子棋 
	  		<i class="nav-phone-icon" :class="gomokuIn?'icon-bottom':'icon-top'"></i>
	  	</div>
	  	<div class="nav-phone-2" v-show="gomokuIn">单人模式</div>
	  	<div class="nav-phone-2" v-show="gomokuIn">联机模式</div>
	  	<div class="nav-phone-2" v-show="gomokuIn">人机对战</div>
	  </div>
	</div>
</template>

<script>


export default {
  name: 'nav',
  data(){
  	return {
  		cssHover: false,
  		gameHover: false,
  		gomokuHover: false,
  		phoneMoreShow: false,
  		cssIn: false,
  		gameIn: false,
  		gomokuIn: false,
  	}
  }
}
</script>

<style>
	.nav {
		height: 60px;
		line-height: 60px;
		background: #2e3033;
		color: #eee;
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
	.nav-pc-phone,.nav-phone {
		display: none;
	}
	.nav-pc-item {
		position: relative;
	}
	.nav-pc-item-more {
		text-align: center;
		position: absolute;
		top: 45px;
		margin-left: -35px;
		padding: 20px 10px 10px;
		background: #2e3033;
		line-height: 30px;
		border-radius: 5px;
		transition: all 0.3s;
		width: 150%;
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
		.nav-right-icon {
	  	width: 70px;
	  	height: 60px;
	  	position: absolute;
	  	top: 0;
	  	right: 0;
		}
	  .icon-category { 
	  	background: url('../assets/icon/category.png') no-repeat;
	  	background-position: center;
	  }
	  .icon-close { 
	  	background: url('../assets/icon/close.png') no-repeat;
	  	background-position: center;
	  }
		.nav-phone {
			background: #1d1e1f;
			color: #fff;
			width: 100%;
		}
		.nav-phone-1 {
			position: relative;
			color: #fff;
			line-height: 50px;
			height: 50px;
			padding-left: 20px;
			font-size: 14px;
			border-top: 1px solid #444;
		}
		.nav-phone-2 {
			position: relative;
			background: #2e3033;
			line-height: 50px;
			height: 50px;
			padding-left: 40px;
			font-size: 14px;
		}
		.nav-phone-icon {
	  	width: 24px;
	  	height: 24px;
	  	position: absolute;
	  	top: 13px;
	  	right: 20px;
		}
	  .icon-top { 
	  	background: url('../assets/icon/top.png') no-repeat;
	  }
	  .icon-bottom { 
	  	background: url('../assets/icon/bottom.png') no-repeat;
	  }
  }

</style>