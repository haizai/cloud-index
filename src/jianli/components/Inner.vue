<template>
  <a class="jianli-innerLink" :href="'./#/jianli/'+name">{{name}}</a>
</template>
<script>
  export default {
    props: ['name'],
  }
</script>