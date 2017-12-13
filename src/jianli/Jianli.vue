<template>
  <div id="jianli">
    <h1 @click='log'>jianli</h1>
    <p>{{$route.query}}</p>

    <h2 class="jianli-title">{{title}}</h2>
    <p class="jianli-tip" v-html="tip"></p>
    <div v-for="p in ps">
      <p class="jianli-p">
        {{p.txt}}
        <a v-if="p.github" :href="p.github" target="_black">github</a>
      </p>
      <pre class="jianli-code language-js" v-html="highlight(p.more)"></pre>
    </div>
  </div>
</template>

<script>




var Prism = require('prismjs');

import QueryName from  './QueryName.js'



export default {
  name: 'jianli',

  data(){
    return {
      content: {},
      title:'',
      tip:'',
      ps:[]
    }
  },

  created(){
    this.dealQuerys()
  },
  watch: {
    '$route.query'(val){
      this.dealQuerys()
    }
  },
  methods:{
    log(){
      console.log(this)
    },
    dealQuerys(){
      let q = this.$route.query
      console.log(QueryName)
      if (q.name) {
        let d = QueryName[q.name]
        this.render(d)
      }
    },
    render(d) {
      this.title = d.title
      this.ps = d.ps
      this.tip = d.tip
    },
    highlight(code) {
      return Prism.highlight(code, Prism.languages.javascript);
    }
  },
}
</script>

<style>

#jianli {
  width: 800px;
  margin: 0 auto;
}

.jianli-title {
  text-align: center;
  font-size: 32px;
}
.jianli-p {
  line-height: 2;
  font-size: 16px;
  padding: 0 10px;
}
.jianli-p a {
  color: #555;
  border-bottom: 1px solid #999;
}
.jianli-p a:hover {
  color: #000;
  border-bottom: 1px solid #000;
}

.jianli-code {
  font-size: 14px;
  margin: 10px;
  white-space: pre-wrap;
  word-wrap: break-word;
}


.jianli-tip {
  font-size: 16px;
  margin: 20px 0;
  padding: 10px;
  border-bottom: 2px dashed;
}
.jianli-tip a {
  color: #42b983;
}
.jianli-tip a:hover {
  text-decoration: underline;
}

@media screen and (max-width: 800px) {
  #jianli {
    width: 100%;
  }
  .jianli-p {
    font-size: 14px;
  }
  .jianli-code {
    font-size: 12px;
  }
}

</style>
  