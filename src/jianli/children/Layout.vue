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
      
      <Github href="https://github.com/haizai/cloud/blob/master/server/"/> 
    </p>
    <More code=""/>
    
  </div>
</template>

<script>
  import More from '../components/More';
  import Github from '../components/Github';
  import Inner from '../components/Inner';
  import Outer from '../components/Outer';
  import Prism from 'prismjs';
  export default {
    components:{More,Github,Inner,Outer},
    methods:{highlight(code) {return Prism.highlight(code, Prism.languages.javascript);}},
  }
</script>