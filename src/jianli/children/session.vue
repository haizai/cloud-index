<template>
  <div>
    <h2 class="jianli-title">
      session
    </h2>

    <p class="jianli-tip">
      session即"会话"。当用户打开网页时session开始，用户关闭网页时session结束，不同浏览器session不同，常用于用户登录。下文以nodejs中express框架使用session为例。
    </p>

    <p class="jianli-p">
      1.express中使用express-session中间件来引入session
      <Github href="https://github.com/haizai/cloud/blob/master/server/app.js"/>
    </p>
    <More code="var express = require('express');
var app = express();
var session = require('express-session')
app.set('trust proxy', 1)
let sessionMiddleware = session({
  secret: 'keyboard cat',
  cookie: {}
})
app.use(sessionMiddleware)
"/>

    <p class="jianli-p">
      2.使用
      <Inner name="ajax"/>
      登录请求成功后，将数据保存在session上
      <Github href="https://github.com/haizai/cloud/blob/master/server/routes/user.js"/> 
    </p>
    <More code="router.get('/login',(req, res) => {

  if (req.session.isLogin) {
    send(req, res, {state: 2002}) //你已登录
    return
  }
  /*... 检验用户名和密码是否为空*/
  User.findOne({account:req.query.account},{_id:0,__v:0},(err,user) => {
    if (err) {
      /*... 数据库错误*/
    }
    if (user) {
      if (req.query.password === user.password) {
        req.session.isLogin = true
        req.session.user = user
        req.session.user.record = [] //不在seesion中写入record
        send(req,res,{state:1})
      } else {
        send(req, res, {state:1004}) //密码错误
      }
    } else {
      send(req, res, {state:1003}) //用户名不存在
    }
  })

})"/>
    

    <p class="jianli-p">
      3.在进行任何用户请求前，首先检验session中是否有登录信息
      <Github href="https://github.com/haizai/cloud/blob/master/server/routes/user.js"/> 
    </p>
    <More code="router.post('/setSex', (req, res) => {
  if (!req.session.isLogin) {
    send(req, res, {state:2001}) //尚未登入
    return
  }
  /*...之后的操作*/
})"/>

    <p class="jianli-p">
      4.验证码的操作也在session中进行，分为两步：获取验证码并保存在seesion中；检验用户提交的验证码是否和session中的一致。
      <Github href="https://github.com/haizai/cloud/blob/master/server/routes/user.js"/> 
    </p>
    <More code="var svgCaptcha = require('svg-captcha')
var express = require('express');
var router = express.Router();

router.get('/getCaptcha',(req,res)=>{
  var captcha = svgCaptcha.create()
  req.session.captcha = captcha.text.toLowerCase()
  res.set('Content-Type','image/svg+xml')
  res.send(captcha.data)
})

router.get('/checkCaptcha',(req,res)=>{

  if (!req.session.captcha) {
    res.send({state:4001}) //未获取验证码
    return
  }
  if (!req.query.captcha) {
    res.send({state:4002}) //验证码为空
    return
  }
  if (req.query.captcha!==req.session.captcha) {
    res.send({state:4003}) //验证码错误
    return
  }

  res.send({state:1}) //验证码正确
})

module.exports = router"/>

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