<template>
  <div class="todos">
    <h2 class="todos-title">Todos —— 最合适的新框架入门demo</h2>
    <p class="todos-info">增加，删除，选中，编辑，筛选，批量操作等</p>
    <a href="/demo/jquery-todos/todos.html" target="_blank">
      <div class="todos-item" @mouseenter="jQueryHover = true" @mouseleave="jQueryHover = false">
        <i class="icon-jquery" :class="{'icon-jquery-hover':jQueryHover}"></i>
        <span :style="jQueryHover?styleHover:styleNormal">jQuery Todos</span>
      </div>
    </a>
    <a href="/demo/react-todos/index.html" target="_blank">
      <div class="todos-item" @mouseenter="reactHover = true" @mouseleave="reactHover = false">
        <i class="icon-react" :class="{'icon-react-hover':reactHover}"></i>
        <span :style="reactHover?styleHover:styleNormal">React Todos</span>
      </div>
    </a>
    <a href="demo/vuex-todos/index.html" target="_blank">
      <div class="todos-item" @mouseenter="vueHover = true" @mouseleave="vueHover = false">
        <i class="icon-vue" :class="{'icon-vue-hover':vueHover}"></i>
        <span :style="vueHover?styleHover:styleNormal">Vue Todos</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'todos',
  data() {
    return {
      jQueryHover: false,
      reactHover: false,
      vueHover: false,
      styleNormal: {color: '#333'},
      styleHover: {color: '#1296db'},
    }
  },
  methods:{
    log(){
      console.log(this.jQueryHover)
    }
  }
}
</script>

<style> 
  .todos {
    text-align: center;
    padding: 80px 0;
    background: #fff;
  }
  .todos-title {
    font-size: 24px;
    padding: 0 20px 20px;
  }
  .todos-info {
    font-size:16px;
    padding: 0 20px 40px;
  }
  .todos-item {
    display: inline-block;
    width: 120px;
    height: 120px;
    padding: 0 0px;
    cursor: pointer;
  }
  .todos-item i {
    width: 80px;
    height: 80px;
  }
  .todos-item span {
    display: inline-block;
    width: 120px;
    font-size: 16px;
  }
  .icon-jquery { background: url('../assets/icon/jquery.png') }
  .icon-jquery-hover { background: url('../assets/icon/jquery-hover.png') }
  .icon-react { background: url('../assets/icon/react.png') }
  .icon-react-hover { background: url('../assets/icon/react-hover.png') }
  .icon-vue { background: url('../assets/icon/vue.png') }
  .icon-vue-hover { background: url('../assets/icon/vue-hover.png') }
</style>