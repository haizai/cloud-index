<template>
  <div>
    <h2 class="jianli-title">
      
    </h2>

    <p class="jianli-tip">
      
    </p>

    <p class="jianli-p">
      
    </p>
    <More code=""/>

    <p class="jianli-p">
      
      <Github href=""/> 
    </p>
    <More code=""/>
    
  </div>
</template>

<script>
  import More from '../components/More';
  import Github from '../components/Github';
  import Prism from 'prismjs';
  export default {
    components:{More,Github},
    methods:{highlight(code) {return Prism.highlight(code, Prism.languages.javascript);}},
  }
</script>