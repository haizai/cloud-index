export default {
	title:'mongodb数据库',
	tip:'',
	ps:[
		{
			txt: "1.cmd到..\\mongodb\\bin目录,使用mongoimport命令来导入数据,命令mongod来连接数据库。",
			more:`cmd
D:\\mongodb\\mongoimport -d haizai -c animes -o movies.json  // 导入
D:\\mongodb\\bin>mongod --dbpath=d:\\mongodb\\db // 连接`
		},
		{
			txt:"2.在nodejs中引入mongoose库，并连接数据库。",
			github:"https://github.com/haizai/cloud/blob/master/server/mongoose/db.js",
			more:`var mongoose = require('mongoose')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/haizai', (err,db)=>{
  if (err) console.log('server/mongoose/db.js ERROR: \\n' ,err , '\\n')
  module.exports = db;
})`
		},
		{
			txt:"3.建立Schema，定义数据结构，再建立model。",
			github:"https://github.com/haizai/cloud/blob/master/server/mongoose/User.js",
			more:`var userSchma = new mongoose.Schema({
  uid: Number, 
  account: String,
  password: String,
  registerTime: { type: Date, default: Date.now() },
  sign: { type: String, default: '' },
  position: { type: String,default: 'member' }, // admin
  msg: {
    sex: {type: String, default: 'secret'}, // male female other
    proID: {type: Number, default: 0},
    cityID: {type: Number}
  },
  record: {type: Array, default: []},
  face: {
    style: {type:String, default: 'boy'}, // boy girl
    name: {type:Number,  default: 1}, // e.g 1
  }
});
var User = mongoose.model('User', userSchma);`
		},
		{
			txt:"4.通过model.save()来保存数据。",
			github:"https://github.com/haizai/cloud/blob/master/server/mongoose/user.js",
			more:`var User = require(path.resolve(__dirname, '..', '..', 'mongoose/User'))
var member = {
  uid: 1, 
  account: 'member',
  password: 'member123',
}
new User(member).save()`
		},
		{
			txt:"5.通过model.findOne(唯一标示)来准确查找。下例为本用户系统的登录代码",
			github:"https://github.com/haizai/cloud/blob/master/server/routes/ajax/user.js",
			more:`router.get('/login',(req, res) => {
	/*...验证是否登录，账号密码是否为空*/
  User.findOne({account:req.query.account},{_id:0,__v:0},(err,user) => {
    if (err) {
		/*...错误处理*/
    }
    if (user) {
      if (req.query.password === user.password) {
      	/*...session处理*/
        send(req,res,{state:1}) //登入成功
      } else {
        send(req, res, {state:1004}) //密码错误
      }
    } else {
      send(req, res, {state:1003}) //用户名不存在
    }
  })
})`
		},
		{
			txt:"6.通过model.find(范围,关键字).sort(排序方式).limit(数量限制).skip(跳过的数量).exec(),来进行搜索。下例为动漫展示页的搜索代码",
			github:"https://github.com/haizai/cloud/blob/master/server/routes/ajax/animes.js",
			more:`router.get('/animes', (req, res) => {
	/*keyword处理*/
  let skip = (req.query.page && parseInt(req.query.page, 10) > 0) ? parseInt(req.query.page, 10) * 10 - 10 : 0

  let reg = new RegExp(keyword, 'i')
  let findObj = {}
  if (req.query.range) {
    switch (req.query.range) {
      case 'default':
        findObj = {$or: [{allTitle: reg}, {'info.又名': reg}, {'info.主演': reg}, {'info.导演': reg}, {'info.编剧': reg}]}
        break
      /*...其他case*/
    }
  }

  let sort = {}
  if (req.query.sort) {
    switch (req.query.sort) {
      case 'year':
        sort = {'year': -1}
        break;
			/*...其他case*/
    }
  } 

  co(function* () {
    var animes = yield Anime
      .find(
        findObj,
        {_id: 0, title: 1, allTitle: 1, info: 1, 'rating.count': 1,'rating.value': 1, year: 1, id: 1}
        )
      .sort(sort)
      .limit(10)
      .skip(skip)
      .exec();
    var count = yield Anime.find(findObj).count().exec()
    return yield {animes, count}
  }).then(doc=> {
    res.send(doc)
  }, err => {
    console.error('Error ?GET animes \\n',err)
  })

})`
		},
		{
			txt:"7.通过model.update()来更新数据。下例为更新用户签名",
			github:"https://github.com/haizai/cloud/blob/master/server/mongoose/user.js",
			more:`router.post('/setSign', (req, res) => {
  if (req.session.isLogin) {
    if (!req.body.sign) {
      send(req, res, {state:1002}) //个性签名为空
    } else {
      if (req.body.sign.length > 30) {
        send(req, res, {state:1003}) //个性签名超过30个字符
      } else {
        User.update({account: req.session.user.account},{$set: {sign: req.body.sign}}, err => {
          if (err) {
            /*...错误处理*/
          } else {
            req.session.user.sign = req.body.sign
            send(req,res,{state:1}) //成功
          }
        })
      }
    }
  } else {
    send(req, res, {state:2001}) //尚未登入
  }
})`
		},
	],
}

