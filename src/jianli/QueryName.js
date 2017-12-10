export default {
  crawler: {
    title:'爬虫',
    tip:`本例为本人2015年底在 
    <a target="_black" href="https://movie.douban.com/tv/#!type=tv&tag=%E6%97%A5%E5%89%A7&sort=recommend&page_limit=20&page_start=0">豆瓣热门日本动画</a> 
    的爬虫, 
		后来我将爬虫所得的数据改写成一个
		<a target="_black" href="http://182.254.151.128/animes#/">数据展示页</a>,
		<a target="_black" href="https://github.com/haizai/crawler/blob/master/douban-anime/app.js">源码</a>
    `,
    ps:[
      {
        txt:'1.分析所要爬虫的网页，将所有网页地址整理成字符串数组。',
        more: `function getUrls(num) {
  var urlLeft = 'https://movie.douban.com/j/search_subjects?type=tv&tag=%E6%97%A5%E6%9C%AC%E5%8A%A8%E7%94%BB&sort=recommend&page_limit=20&page_start='
  var arr = []
  for (let i = 0; i < num; i++) {
    arr.push(urlLeft + (i)*20)
  }
  return arr
}`,
      },
      {
        txt:'2.使用superagent库，进行爬取页面。',
        more: `var superagent = require('superagent')
/*......*/
let url = \`https://movie.douban.com/subject/\$\{id\}/\`
superagent.get(url)
`,
      },
      {
        txt:'3.分析单个页面结构，使用cheerio库进行类jQuery处理，记录需要的数据。',
        more: `var $ = cheerio.load(txt);
var movie = {}
movie.year = $('#content h1 span').eq(1).text().replace(/[\(\)]/g,'')
movie.summary = $('#link-report').text().trim()
movie.comments = []
$('#comments-section #hot-comments p').each(function() {
  movie.comments.push($(this).text())
})
/*......*/
`,
      },
      {
        txt:'4.若需要保存图片，使用pipe(fs.createWriteStream(dir))来保存可写流。',
        more: `var downloadImg = function(src, id){
  var filename = id + src.match(/.\w+$/)[0]
  superagent.get(src).pipe(fs.createWriteStream(__dirname + '/_images/id/' + filename))
};`,
      },
      {
        txt:'5.将所需要的数据，输出为json文件，并保存在本地。',
        more: `fs.writeFileSync(path.join(__dirname, '_data','id' ,val.id+'.json'), JSON.stringify(val, null, 2))`,
      },
      {
        txt:'使用co库，便于异步操作。',
        more: `var co = require('co')
  co(function* (){

    //发送get请求返回res
    var res = yield superagent.get(url)

    //获取movie对象数据
    var movie = yield getMovie(id, res.text)

    //movie.reviews每一个id发送get请求获得review的res
    var reviews = yield movie.reviews.map(reviewId => {
      var src = \`https://movie.douban.com/review/\${reviewId}/\`
      return superagent.get(src)
    })

    //将review的res转化为movie.reviews
    movie.reviews = getReview(reviews)

    return movie
  }).then(val => {
		/*......*/
  },err => console.log('err',err))
`,
      },
      {
        txt:'使用async库,便于控制并行数和延迟。',
        more: `var async = require('async')
async.mapLimit(ids, 3, (id, cb) => {
  init(id, cb)
},err => {/*......*/})

var init = function(id, cb) {
	var start = +new Date()
	/*......*/
  setTimeout(()=> {
    if (cb) cb()
  },+new Date() - start + 5000)
}`,
      },
    ],
  },
}