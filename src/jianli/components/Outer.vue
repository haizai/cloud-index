<template>
  <a class="jianli-outerLink" target="_black" :href="href">{{text}}</a>
</template>
<script>
  export default {
    props: ['href','text'],
  }
</script>