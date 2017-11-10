<template>
  <div class="api-string">
    <!-- <p @click="log()">string</p> -->


    <div class="api-main">
      <h2 class="api-title">{{clazz}}.{{method}}()

        <span class="api-tip" v-show="tip">{{tip}}</span>
      </h2>
      <p class="api-usage">{{usage}}</p>
      <p class="api-grammar">{{grammar}}</p>


      <p class="api-code">{{code}}</p>
      <p>
        <span class="api-quotation">"</span>
        <input class="api-input" type="text" v-model="val" @input="run"></input>
        <span class="api-quotation">"</span>
        <span class="api-point">.</span>
        <select class="api-methods" @change="toggleMethod()" v-model="method">
          <option v-for="m in allMethods" :value="m">{{m}}</option>
        </select>
        <span class="api-sign">(</span>


        <span v-for="n in paramCount" v-if=" n==1 || params[n-2] && !isParamInfinite">
          <span v-if="n!==1" class="api-sign">,</span>
          <input type="text" class="api-param" v-model="params[n-1]" @input="paramInput(n-1)" @focus="paramActive = n-1" @blur="paramActive = null">
        </span>
        <span v-for="n in 10" v-if="isParamInfinite && params[n-2]">
          <span v-if="n!==1" class="api-sign">,</span>
          <input type="text" class="api-param" v-model="params[n-1]" @input="paramInput(n-1)" @focus="paramActive = n-1" @blur="paramActive = null">
        </span>
        <span class="api-sign" style="margin-right:20px">)</span>
        <span class="api-output">{{output}}</span>
        
      </p>

      <p class="api-param-usage" v-if="!isParamInfinite" v-show="paramActive!==null">
        <span class="api-param-type">{{paramTypes[paramActive]}}</span>
        {{paramUsages[paramActive]}}
      </p>
      <p class="api-param-usage" v-if="isParamInfinite" v-show="paramActive!==null">
        <span class="api-param-type">{{paramTypes[0]}}</span>
        {{paramUsages[0]}}
      </p>
      <p class="api-param-error" v-show="errText">{{errText}}</p>
      
    </div>

  </div>
</template>

<script>

import o from './stringData'

export default {
  name: 'api-string',
  created(){

    this.allMethods = Object.keys(o)

    this.method = 'slice'
    this.toggleMethod()

    // this.paramCount = this.paramUsages.length
    // this.run()

  },
  data(){
    return {
      clazz:'String.prototype',
      val: 'Hello world!',
      errText:null,
      output: '',
      params: [],
      tip:'',
      paramsTrue:[],
      method: '',
      paramTypes: [],
      usage:'',
      grammar: '',
      paramActive: null,
      paramUsages: [],
      isParamInfinite: false,
      outputType: 'String',
    }
  },
  computed:{
    code(){
      let par = this.params.map((a,i)=>{
        let type = this.paramTypes[i] || this.paramTypes[this.paramTypes.length-1]
        switch (type) {
          case 'String':
            return '"' + a + '"'
            break;
          case 'Number':
            if (a==='') {
              return undefined
            } 
            return a
            break;
          default:
            return a
            break;
        }
      }).filter(a=>{return a!==undefined}).join(',')
      return `"${this.val}".${this.method}(${par}) => ${this.output}`
    }
  },
  methods:{
    toggleMethod(){
      let d = o[this.method]
      this.usage = d.usage
      this.grammar = d.grammar
      this.paramActive = null
      this.paramUsages = d.paramUsages || []
      this.paramTypes = d.paramTypes || []
      this.isParamInfinite = d.isParamInfinite || false
      this.paramCount = d.paramUsages.length
      this.outputType = d.outputType || 'String'

      this.tip = d.tip
      this.params = []
      this.paramsTrue = []
      this.run()
    },
    paramInput(i){
      let val = this.params[i]
      let type = this.paramTypes[i] || this.paramTypes[this.paramTypes.length - 1]
      this.errText = ''

      if (type!=='String') {

        if (val === '') {
          this.paramsTrue[i] = undefined
          this.run()
        } else {

          let num = +val
          if (Object.is(num,NaN)) {
            this.errText = '请输入 Number 类型'
          } else {
            this.paramsTrue[i] = num
            this.run()
          }

        }


      } else {
          this.paramsTrue[i] = val
          this.run()
      }



    },
    run(){
      let params = this.paramsTrue
      console.log(this.method,...params)
      let output = this.val[this.method](...params)
      if (this.outputType !== 'String') {

      } else {
        output = '"' + output + '"'
      }
      this.output = output
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
.api-tip {
  font-size: 16px;
  color: #00a1d6;
  padding: 2px 8px;
  border-radius: 4px;
  background: #eee;
  vertical-align: 4px;
}
.api-usage {
  font-size: 16px;
  margin: 20px 0;
}
.api-grammar {
  font-size: 16px;
  background: #e4f0f5;
  padding: 5px 0 5px 20px;
  margin: 20px 0;
}
.api-param-usage {
  padding:0 20px;
  margin: 10px 0;
  font-size: 16px;
}
.api-param-type {
  color: #00a1d6;
  padding: 2px 8px;
  border-radius: 4px;
  background: #eee;
}
.api-param-error {
  font-size: 16px;
  background: #FFEFD5;
  padding: 5px 0 5px 20px;
  margin: 20px 0;
  color: #FF3030;
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
  white-space: pre-wrap;
  word-wrap: break-word;
  font-family: courier new, courier, monospace;
}
.api-methods {
  font-size: 16px;
  padding: 0 5px;
}
.api-param {
  text-align: center;
  font-size: 16px;
  width: 50px;
}
.api-sign {
  font-size: 32px;
}
.api-code {
  margin: 20px 0;
  font-size: 16px;
  font-family: Consolas, Monaco, 'Andale Mono', monospace;
  white-space: pre-wrap;
  word-wrap: break-word;
}


@media screen and (max-width: 1000px) {
  .api-main{
    width: auto;
  }
  .api-title {
    font-size: 24px;
    text-align: center;
  }
  .api-tip {
    font-size: 16px;
  }
  .api-usage {
    font-size: 14px;
    padding: 20px;
    margin: 0;
  }
  .api-grammar {
    font-size: 16px;
    padding: 20px 0;
    margin: 0;
    text-align: center;
  }
  .api-param-usage {
    font-size: 14px;
  }
  .api-param-error {
    font-size: 14px;
  }
}
</style>
