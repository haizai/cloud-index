<template>
  <div>
    <h2 class="jianli-title">
      ejs
    </h2>

    <p class="jianli-tip">
      ejs是express默认的模板引擎，兼容HTML，常用于服务端渲染。
      <Github href="https://github.com/haizai/cloud/blob/master/server/views"/> 
    </p>

    <p class="jianli-p">
      1.在路由中使用render函数可以渲染html并传递变量
    </p>
    <More code="// 路由 ，传递{title}
router.get('/' + title, function(req, res, next) {
  res.render('default', { title })
});

// default.ejs ，title被传递至此
<script src=<%= 'js/default/' + title + '.js' %> ></script>
"/>

    <p class="jianli-p">
      2.使用&lt;% ~js code~ %&gt;来控制流，&lt;%= ~js code~ %&gt; 输出为html
    </p>
    <More code="// head.ejs
<% var title = title || null, NODE_ENV = NODE_ENV || null %>
<title><%= title %></title>"/>

    <p class="jianli-p">
      3.可以使用if else 控制复杂的逻辑代码
    </p>
    <More code="// header.ejs
<div class=&quot;header-title
  <%if(title == 'index'){%>
    <%=' header-active'%>
  <%}%>&quot;>
</div>

// index.ejs
<script 
  src=&quot;<% if (NODE_ENV == 'dev') { %>
    <%='http://localhost/index.bundle.js'%>
  <%} else {%>
    <%='js/index/index.bundle.js'%>
  <%}%>&quot;
>"/>


    <p class="jianli-p">
      4.使用&lt;%- include(路径) %&gt;来包含其他ejs模板
    </p>
    <More code="// error.ejs
<!DOCTYPE html>
<html>
<head>
  <%- include('head'); %>
</head>
<body>
  <%- include('header') %>
  <h1><%= message %></h1>
  <h2><%= error.status %></h2>
  <pre><%= error.stack %></pre>
</body>
</html>

//head.ejs
<% var title = title || null, NODE_ENV = NODE_ENV || null %>
<meta name='renderer' content='webkit'/>
<meta charset='utf-8'/>
<meta http-equiv='X-UA-Compatible' content='IE=edge'/>
<link rel='shortcut icon' href='/favicon.ico'/>
<link rel='stylesheet' href='/css/reset.css'/>
<link rel='stylesheet' href='/css/header.css'/>
<link rel='stylesheet' href='/css/lowie.css'>
<script src='js/common/baidu-tongji.js'></script>
<title><%= title %></title>
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