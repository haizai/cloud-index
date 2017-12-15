<template>
  <div>
    <h2 class="jianli-title">
      ajax
    </h2>

    <p class="jianli-tip">
      
    </p>

    <p class="jianli-p">
      1.ajax跨域，通过设置一些响应头来实现。
      <Github href="https://github.com/haizai/cloud/blob/master/server/routes/index.js"/> 
    </p>
    <More code="var express = require('express');
var router = express.Router();
router.all('*',(req,res,next)=> {
  if (process.env.NODE_ENV === 'dev') {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', '*');
  }
  next()
})"/>

    <p class="jianli-p">
      2.Get方法用于获取数据，
      <Outer href="http://182.254.151.128/animes#/keyword=a&page=1&range=person&sort=value" text="客户端"/>使用?query1=data1&query2=data2的形式,服务端具体过程见
      <Inner name="mongodb" />第6条
    </p>
    <More code="//客户端
?keyword=a&page=1&range=person&sort=value

//服务端
router.get('/animes', (req, res) => {
  /**.....
   * req.query --> {keyword:'a',page:1,range:'person',sort:'value'}
   * 对req.query进行处理并返回结果给客户端
   */
})"/>

    <p class="jianli-p">
      3.Post方法用于提交数据。下例为用户系统中设置性别。
      <Github href="https://github.com/haizai/cloud/blob/master/server/routes/ajax/user.js"/> 
    </p>
    <More code="//客户端 vue中的methods
setSex() {
  this.$http.post(this.urlPrefix + 'setSex',{sex: this.user.msg.sex}).then( res => {
    res.body.state == 1 ? tip('性别修改成功') : tip('性别修改失败','err')
  })
},

//服务端
router.post('/setSex', (req, res) => {
  if (!req.session.isLogin) {
    send(req, res, {state:2001}) //尚未登入
    return
  }
  if (!req.body.sex) {
    send(req, res, {state:1001}) //性别为空
    return
  }
  if (req.body.sex != 'secret' && req.body.sex != 'male' && req.body.sex != 'female' && req.body.sex != 'other' ) {
    send(req, res, {state:1002}) //性别不为给定值
    return
  }
  User.update({account: req.session.user.account},{$set: {'msg.sex': req.body.sex}}, err => {
    if (err) {
      console.log(__dirname,' Error:\n', err)
      send(req, res, {state:3001}) //数据库更新错误
      return
    }
    req.session.user.msg.sex = req.body.sex
    send(req, res, {state:1}) //成功
  })
})"/>

    <p class="jianli-p">
      4.Post方法还可以传输文件。客户端
      <Github href="https://github.com/haizai/cloud/blob/master/server/views/file.ejs"/>
      使用type="file"的input,
      服务端
      <Github href="https://github.com/haizai/cloud/blob/master/server/routes/ajax/file.js"/>
      使用formidable库。
    </p>
    <More code="// 客户端 jQuery语法
<div id='div'>
  <p>password:<input type='text'></p>
  <p><input type='file' multiple='multiple'></p>
  <p><input type='button' value='上传'></p>
</div>
<pre id='info'></pre>
<script src='js/common/jquery-3.1.1.min.js'></script>
<script>
  $('#div [type=button]').on('click', function() {
    if($('#div [type=file]').val() == '') {
      $('#info').text('error! \n\n no file')
      return
    }
    var formData = new FormData();
    formData.append('file', $('#div [type=file]')[0].files[0]);
    $.ajax({
      url: '/ajax/file?password=' + $('#div [type=text]').val(),
      type: 'POST',
      cache: false,
      data: formData,
      processData: false,
      contentType: false,
      success: function(XHR) {
        $('#info').text(XHR)
      }
    })
  })
</script>

// 服务端
var formidable = require('formidable') 
router.post('/file', (req, res) => {

  var form = new formidable.IncomingForm();
  form.encoding = 'utf-8';
  form.keepExtensions = true;
  form.uploadDir = path.resolve(__dirname,'..','..','..','upload/')

  form.parse(req, (err, fields, files) => {
    if (!files.file || files.file.size === 0) {
      res.send('error! \n\n no file')
      return
    }
    var dir = path.normalize(files.file.path)
    fs.exists(dir, exists=>{
      if (exists)
      fs.rename(dir, path.join(path.dirname(dir), files.file.name))
    })
    res.send('success! \n\n'+util.inspect({fields, files}))
  });
  return
})
    "/>
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