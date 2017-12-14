<template>
  <pre class="jianli-code language-js" v-html="highlight(code)">
</pre>

</template>

<script>

var Prism = require('prismjs');

export default {
  props: ['code'],
  methods:{
    highlight(code) {
      return Prism.highlight(code, Prism.languages.javascript);
    }
  },
}
</script>

  