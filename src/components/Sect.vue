<template>
  <div class="sect">
  	<div class="sect-container">	
			<div class="sect-item" style="border-left: 1px solid #abb;">
				<i class="sect-icon icon-concise"></i>
				<h2 class="sect-item-title">极简风格</h2>
        <p class="sect-item-p">整个主页垂直方向分成不同色块</p>
			</div>
			<div class="sect-item">
				<i class="sect-icon icon-responsive"></i>
				<h2 class="sect-item-title">响应式布局</h2>
        <p class="sect-item-p">电脑，平板，手机都有较好的效果</p>
        <p class="sect-item-p">使用css的@media功能进行宽度适配</p>
			</div>
			<div class="sect-item">
        <i class="sect-icon icon-user"></i>
				<h2 class="sect-item-title">用户系统</h2>
        <p class="sect-item-p">支持用户注册，登录等操作</p>
        <p class="sect-item-p">数据储存在mongodb数据库上</p>
			</div>
			<div class="sect-item">
        <i class="sect-icon icon-github"></i>
        <h2 class="sect-item-title">代码开源</h2>
        <p class="sect-item-p">全部页面代码都在GitHub上开源</p>
        <p class="sect-item-p">服务器与数据库架在腾讯云上</p>
      </div>
  	</div>
  </div>
</template>

<script>


export default {
  name: 'sect',

}
</script>

<style>
	.sect {
		background: #f7f8fa;
	}
	.sect-container {
		width: 1200px;
		margin: 0 auto;
		display: flex;
	}
	.sect-item {
		border-right: 1px solid #cdd;
		flex: 1;
    position: relative;
    padding-bottom: 20px;
	}
	.sect-icon {
    position: absolute;
		width: 32px;
		height: 32px;
    top: 50%;
    transform: translate(32px,-50%)
	}
	.icon-github { background: url('../assets/icon/github.png') no-repeat }
	.icon-user { background: url('../assets/icon/user.png') no-repeat }
	.icon-responsive { background: url('../assets/icon/responsive.png') no-repeat }
	.icon-concise { background: url('../assets/icon/concise.png') no-repeat }

  .sect-item-title {
    margin-left: 82px;
    margin-top: 16px;
    margin-bottom: 5px;
    font-size: 16px;
  }
  .sect-item-p {
    margin-left: 82px;
    padding-right: 6px;
  }
  @media screen and (max-width: 1200px) {
    .sect-container {
      width: 100%;
    }
  }
  @media screen and (max-width: 800px) {
    .sect-container {
      width: 100%;
      flex-direction: column;
    }
    .sect-item {
      border-bottom: 1px solid #cdd;
    }
  }
</style>