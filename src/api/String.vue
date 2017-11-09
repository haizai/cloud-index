<template>
  <div class="api-string">
    <p @click="log()">string</p>


    <div class="api-main">
      <h2 class="api-title">String.prototype.{{method}}()</h2>
      <p class="api-usage">{{usage}}</p>
      <p class="api-grammar">{{grammar}}</p>


      <p class="api-code">{{code}}</p>
      <p>
        <span class="api-quotation">"</span>
        <input class="api-input" type="text" v-model="str" @input="run"></input>
        <span class="api-quotation">"</span>
        <span class="api-point">.</span>
        <select class="api-methods" @change="toggleMethod()" v-model="method">
          <option v-for="m in allMethods" :value="m">{{m}}</option>
        </select>
        <span class="api-sign">(</span>


        <span v-for="n in paramCount" v-if="n==1 || params[n-2] && !isParamInfinite">
          <span v-if="n!==1" class="api-sign">,</span>
          <input type="text" class="api-param" v-model="params[n-1]" @input="run" @focus="paramActive = n-1" @blur="paramActive = null">
        </span>
        <span v-for="n in 10" v-if="isParamInfinite && params[n-2]">
          <span v-if="n!==1" class="api-sign">,</span>
          <input type="text" class="api-param" v-model="params[n-1]" @input="run" @focus="paramActive = n-1" @blur="paramActive = null">
        </span>
        <span class="api-sign" style="margin-right:20px">)</span>
        <span class="api-quotation">"</span>
        <span class="api-output">{{output}}</span>
        <span class="api-quotation">"</span>
        
      </p>

      <p class="api-param-usage" v-if="isParamInfinite" v-show="paramActive!==null">{{paramUsages[paramActive]}}</p>
      <p class="api-param-usage" v-if="!isParamInfinite" v-show="paramActive!==null">{{paramUsages[0]}}</p>

      
    </div>

  </div>
</template>

<script>

import o from './String'

export default {
  name: 'api-string',
  created(){
    this.paramCount = this.paramUsages.length
    this.allMethods = Object.keys(o)
    this.run()
  },
  data(){
    return {
      str: 'String',
      output: '',
      params: [],
      method: 'slice',
      usage:'slice() 方法提取一个字符串的一部分，并返回一新的字符串。',
      grammar: 'str.slice(beginSlice[, endSlice])',
      paramActive: null,
      paramUsages: [
        '从该索引处开始提取原字符串中的字符。如果值为负数，则被看作是 sourceLength + beginSlice',
        `可选。在该索引处结束提取字符串。如果省略该参数，slice会一直提取到字符串末尾。如果该参数为负数，则被看作是 sourceLength + endSlice`
      ],
      isParamInfinite: false,
    }
  },
  computed:{
    code(){
      let par = this.params.filter(a=>a!='').join(',')

      return `"${this.str}".${this.method}(${par}) => "${this.output}"`
    }
  },
  methods:{
    toggleMethod(){
      let d = o[this.method]
      this.usage = d.usage
      this.grammar = d.grammar
      this.paramActive = null
      this.paramUsages = d.paramUsages || []
      this.isParamInfinite = d.isParamInfinite || false
      this.paramCount = this.paramUsages.length
      this.params = []
      this.run()
    },
    run(){
      console.log('run')
      let params = this.params.filter(a=>a!='')
      this.output = this.str[this.method](...params)
      this.$forceUpdate()
    },
    slice(){
      let params = this.params.filter(a=>a!='')
      this.output = this.str.slice(...params)
      this.$forceUpdate()
    },
    log(){
      console.log(this)
    },
  }
}
</script>

<style>
  

.api-title {
  font-family: x-locale-heading-primary,zillaslab,Palatino,"Palatino Linotype",x-locale-heading-secondary,serif;
  font-size: 32px;
}
.api-usage {
  font-size: 16px;
  line-height: 40px;
}
.api-grammar {
  font-size: 16px;
  background: #e4f0f5;
  padding-left: 20px;
  line-height: 40px;
}
.api-param-usage {
  padding:0 20px;
  font-size: 16px;
  color: #00a1d6;
}
#api input, #api select {
  border: 1px solid #aaa;
  color: #2c3e50;
  outline: none;
  border-radius: 3px;
  transition: border-color 0.2s ease;
}
.api-main {
  width: 1000px;
  margin: 0 auto;
}
.api-quotation, .api-point {
  font-size: 32px;
}
.api-input {
  padding: 0 10px;
  font-size: 16px;
}
.api-output {
  font-size: 24px;
}
.api-methods {
  font-size: 16px;
  padding: 0 5px;
}
.api-param {
  text-align: center;
  font-size: 16px;
  width: 40px;
}
.api-sign {
  font-size: 32px;
}
.api-code {
  margin-top: 20px;
  font-size: 16px;
  font-family: Consolas, Monaco, 'Andale Mono', monospace;
}
</style>
