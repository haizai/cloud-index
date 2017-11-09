<template>
  <div class="carousel">
  	<i class="caro-icon caro-icon-left icon-caro-left" @click="toLeft"></i>
  	<i class="caro-icon caro-icon-right icon-caro-right" @click="toRight"></i>
  	<div class="caro-bar">
  		<div class="caro-bar-item" @mouseenter="barEnter(n)" @mouseleave="barLeave(n)" v-for="n in maxId" @click="toIndex(n)">
  			<div class="caro-bar-item-div" :class="{'caro-bar-item-active': n === hoverId || caroId === n}"></div>
  		</div>
  	</div>
		<div class="caro-item" v-show="caroId === 1">
			item 1
		</div>
		<div class="caro-item" v-show="caroId === 2">
			item 2
		</div>
		<div class="caro-item" v-show="caroId === 3">
			item 3
		</div>
		<div class="caro-item" v-show="caroId === 4">
			item 4
		</div>
		<div class="caro-item" v-show="caroId === 5">
			item 5
		</div>
  </div>
</template>

<script>


export default {
  name: 'carousel',
  data(){
  	return {
  		caroId: 1,
  		maxId: 5,
  		hoverId: '',
  		timer: null,
  	}
  },
  methods:{
  	toLeft(){
  		this.resetTimer()
  		this.caroId > 1 ? this.caroId-- : this.caroId = this.maxId
  	},
  	toRight(){
  		this.resetTimer()
  		this.caroId < this.maxId ? this.caroId++ : this.caroId = 1
  	},
  	barEnter(n){
  		this.hoverId = n
  	},
  	barLeave(n){
  		this.hoverId = ""
  	},
  	toIndex(n) {
  		this.resetTimer()
  		this.caroId = n
  	},
  	resetTimer(){
  		clearTimeout(this.timer)
  		this.move()
  	},
  	move(){
	  	this.timer = setInterval(()=>{
	  		this.toRight()
	  	}, 3000)
  	}
  },
  created(){
  	this.move()
  }
}
</script>

<style>
	.carousel {
		height: 400px;
		position: relative;
		background: #1e2432;
		color: #fff;
	}
	.caro-item {
		width: 1200px;
		margin: 0 auto;
		height: 400px;
	}
	.caro-icon {
		position: absolute;
		width: 60px;
		height: 60px;
		background-position: center;
		background-repeat: no-repeat;
		top: 170px;
		cursor: pointer;
	}
	.caro-icon:hover {
		border-radius: 30px;
		background-color: rgba(0, 0, 0,0.2);
	}
	.caro-icon-left {
		left: 20px;
	}
	.caro-icon-right {
		right: 20px;
	}
	.icon-caro-left { background-image: url('../assets/icon/caro-left.png') }
	.icon-caro-right { background-image: url('../assets/icon/caro-right.png') }

	.caro-bar {
		position: absolute;
		bottom: 10px;
		left: 50%;
		transform : translateX(-50%)
	}
	.caro-bar-item {
		display: inline-block;
		width: 30px;
		height: 23px;
		margin: 0 4px;
		position: relative;
		cursor: pointer;
	}
	.caro-bar-item-div {
		height: 3px;
		width: 30px;
		position: absolute;
		background: #656c7c;
		top: 10px;
	}
	.caro-bar-item-active {
		background: #fff;
	}

  @media screen and (max-width: 1000px) {
		.caro-item {
			width: 100%;
		}
  }
  @media screen and (max-width: 800px) {
		.caro-item {
			width: 100%;
		}
		.caro-icon {
			display: none;
		}
		.caro-bar-item {
			width: 10px;
			height: 10px;
		}
		.caro-bar-item-div {
			width: 6px;
			height: 6px;
			border-radius: 3px;
			top: 2px;
			left: 2px;
		}
  }
</style>