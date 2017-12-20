<template>
	<div>
	  <div class="nav">
	    <a a href="./alpha" class="nav-title">Haizainaive</a>
	    <ul class="nav-pc">

	    	<li class="nav-pc-item" @mouseenter="jianliHover = true" @mouseleave="jianliHover = false">
	    		<span :class="{'nav-pc-item-name-hover':jianliHover}">技术栈</span>
	    		<div class="nav-pc-item-more" v-show="jianliHover">
	    			<a href="./alpha#/jianli/ajax"><p>ajax</p></a>
	    			<a href="./alpha#/jianli/session"><p>session</p></a>
	    			<a href="./alpha#/jianli/crawler"><p>爬虫</p></a>
	    			<a href="./alpha#/jianli/ejs"><p>ejs模板引擎</p></a>
	    			<a href="./alpha#/jianli/mongodb"><p>mongodb数据库</p></a>
	    			<a href="./alpha#/jianli/socket"><p>socket</p></a>
	    		</div>
	    	</li>

	    	<li class="nav-pc-item" @mouseenter="cssHover = true" @mouseleave="cssHover = false">
	    		<span :class="{'nav-pc-item-name-hover':cssHover}">css案例</span>
	    		<div class="nav-pc-item-more" v-show="cssHover">
	    			<a href="/demo/flex/flex.html" target="_blank"><p>flex布局</p></a>
	    			<a href="/demo/transform/dist/index.html" target="_blank"><p>transform矩阵变换</p></a>
	    			<a href="/demo/center/center.html" target="_blank"><p>css居中方案</p></a>
	    			<a href="/demo/colorPicker/colorPicker.html" target="_blank"><p>color获取器</p></a>
	    		</div>
	    	</li>
	    	<li class="nav-pc-item" @mouseenter="gameHover = true" @mouseleave="gameHover = false">
	    		<span :class="{'nav-pc-item-name-hover':gameHover}">小游戏</span>
	    		<div class="nav-pc-item-more" v-show="gameHover">
	    			<a href="/demo/sokoban/game.html" target="_blank"><p>扫雷</p></a>
	    			<a href="/demo/minesweeper/game.html" target="_blank"><p>推箱子</p></a>
	    			<a href="/demo/touhou/index.html" target="_blank"><p>类东方STG游戏</p></a>
	    		</div>
	    	</li>
	    	<li class="nav-pc-item" @mouseenter="gomokuHover = true" @mouseleave="gomokuHover = false">
	    		<span :class="{'nav-pc-item-name-hover':gomokuHover}">五子棋</span>
	    		<div class="nav-pc-item-more" v-show="gomokuHover">
	    			<a href="/gomoku#/outline"><p>单人模式</p></a>
	    			<a href="/gomoku#/online"><p>联机模式</p></a>
	    			<a href="/gomoku#/ai"><p>人机对战</p></a>
	    		</div>
	    	</li>
	    	<li><a href="./">返回主页</a></li>
	    </ul>
	    <i class="nav-right-icon" :class="phoneMoreShow?'icon-close':'icon-category'" @click="phoneMoreShow = !phoneMoreShow"></i>
	  </div>
	  <div v-show="phoneMoreShow" class="nav-phone">

	  	<div @click="jianliIn=!jianliIn" class="nav-phone-1">技术栈
	  		<i class="nav-phone-icon" :class="jianliIn?'icon-bottom':'icon-top'"></i>
	  	</div>
	  	<a href="./alpha#/jianli/ajax"><div class="nav-phone-2" v-show="jianliIn">ajax</div></a>
	  	<a href="./alpha#/jianli/session"><div class="nav-phone-2" v-show="jianliIn">session</div></a>
	  	<a href="./alpha#/jianli/crawler"><div class="nav-phone-2" v-show="jianliIn">爬虫</div></a>
	  	<a href="./alpha#/jianli/ejs"><div class="nav-phone-2" v-show="jianliIn">ejs模板引擎</div></a>
	  	<a href="./alpha#/jianli/mongodb"><div class="nav-phone-2" v-show="jianliIn">mongodb数据库</div></a>
	  	<a href="./alpha#/jianli/socket"><div class="nav-phone-2" v-show="jianliIn">socket</div></a>


	  	<div @click="cssIn=!cssIn" class="nav-phone-1">css案例 
	  		<i class="nav-phone-icon" :class="cssIn?'icon-bottom':'icon-top'"></i>
	  	</div>
	  	<a href="/demo/flex/flex.html"><div class="nav-phone-2" v-show="cssIn">flex布局</div></a>
	  	<a href="/demo/transform/dist/index.html"><div class="nav-phone-2" v-show="cssIn">transform矩阵变换</div></a>
	  	<a href="/demo/center/center.html"><div class="nav-phone-2" v-show="cssIn">css居中方案</div></a>
	  	<a href="/demo/colorPicker/colorPicker.html"><div class="nav-phone-2" v-show="cssIn">color获取器</div></a>

	  	<div @click="gameIn=!gameIn" class="nav-phone-1">小游戏 
	  		<i class="nav-phone-icon" :class="gameIn?'icon-bottom':'icon-top'"></i>
	  	</div>
	  	<a href="/demo/sokoban/game.html"><div class="nav-phone-2" v-show="gameIn">扫雷</div></a>
	  	<a href="/demo/minesweeper/game.html"><div class="nav-phone-2" v-show="gameIn">推箱子</div></a>
	  	<a href="/demo/touhou/index.html"><div class="nav-phone-2" v-show="gameIn">类东方STG游戏</div></a>

	  	<div @click="gomokuIn=!gomokuIn" class="nav-phone-1">五子棋 
	  		<i class="nav-phone-icon" :class="gomokuIn?'icon-bottom':'icon-top'"></i>
	  	</div>
	  	<a href="/gomoku#/outline"><div class="nav-phone-2" v-show="gomokuIn">单人模式</div></a>
	  	<a href="/gomoku#/online"><div class="nav-phone-2" v-show="gomokuIn">联机模式</div></a>
	  	<a href="/gomoku#/ai"><div class="nav-phone-2" v-show="gomokuIn">人机对战</div></a>
	  </div>
	</div>
</template>

<script>


export default {
  name: 'nav',
  data(){
  	return {
  		jianliHover: false,
  		cssHover: false,
  		gameHover: false,
  		gomokuHover: false,
  		phoneMoreShow: false,
  		jianliIn: false,
  		cssIn: false,
  		gameIn: false,
  		gomokuIn: false,
  	}
  },
  watch:{

  },
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
		z-index: 100;
	}
	.nav-pc-item-more p {
		color: #eee;
	}
	.nav-pc-item-name-hover, .nav-pc-item-more p:hover {
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
			color: #fff;
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