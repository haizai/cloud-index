<template>
  <div>
    <h2 class="jianli-title">
      socket
    </h2>

    <p class="jianli-tip">
      socket是客户端和服务端的双向通信连接，实现数据交换，较
      <Inner name="ajax"></Inner>
      而言更加方便高效。下文为在express中使用socket的案例，即五子棋，源码
      <Github href="https://github.com/haizai/cloud/blob/master/server/bin/server.js"/> 
    </p>

    <p class="jianli-p">
      1.express中使用socket.io来使用socket，并使用session中间件来允许在socket中使用
      <Inner name="session"></Inner>
    </p>
    <More code="var app = require('../app').app; // app 为 express();
var http = require('http');
var server = http.Server(app);
var io = require('socket.io')(server)
var sessionMiddleware = require('../app').sessionMiddleware;

io.use(function(socket, next) {
  sessionMiddleware(socket.request, socket.request.res, next);
});
"/>
    
    <p class="jianli-p">
      2.客户端连接后，触发服务端'connection'事件
    </p>
    <More code="let iog = io.of('gomoku')
iog.on('connection', function (socket) {
  // 中间件: 未登录&未进入房间
  socket.use((packet, next) => {
    if (/**/) {
      /**/
    } else {
      next()
    }
  })
  /*... 其他操作*/
})
"/>

    <p class="jianli-p">
      3.客户端'emit'发出事件,服务端'on'响应事件
    </p>
    <More code="// 客户端
// 落子{r,c},发出'move'事件
this.socket.emit('move', {r,c})

// 服务端
// 响应'move'事件
  socket.on('move', o => {
    /*...逻辑代码,其中o即{r,c}*/ 
  })
"/>
    <p class="jianli-p">
      4.相对的，服务端'emit'发出事件,客户端'on'响应事件
    </p>
    <More code="// 服务端
// 检测o.r为空，发出'err'事件
  socket.on('move', o => {
    if (!o.r) {
      socket.emit('err',{name: 'move', text: 'no r'})
      return
    }
    /*...其他逻辑代码*/ 
  })

// 客户端
// 响应'err'事件,打印错误
  this.socket.on('err', o=> {
    console.log('err',o)
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