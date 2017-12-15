<template>
  <div>
    <h2 class="jianli-title">爬虫</h2>
    <p class="jianli-tip">
      本例为本人2015年底在
      <Outer href="https://movie.douban.com/tv/#!type=tv&tag=%E6%97%A5%E5%89%A7&sort=recommend&page_limit=20&page_start=0" text="豆瓣热门日本动画"/>
      的爬虫, 后来我将爬虫所得的数据改写成一个
      <Outer href="http://182.254.151.128/animes#/" text="数据展示页"/>,
      <Github href="https://github.com/haizai/crawler/blob/master/douban-anime/app.js"></Github>  
    </p>
      <p class="jianli-p">
        1.分析所要爬虫的网页，将所有网页地址整理成字符串数组。
      </p>
      <More code="function getUrls(num) {
  var urlLeft = 'https://movie.douban.com/j/search_subjects?type=tv&tag=%E6%97%A5%E6%9C%AC%E5%8A%A8%E7%94%BB&sort=recommend&page_limit=20&page_start='
  var arr = []
  for (let i = 0; i < num; i++) {
    arr.push(urlLeft + (i)*20)
  }
  return arr
}"/>
      <p class="jianli-p">
        2.使用superagent库，进行爬取页面。
      </p>
      <More code="var superagent = require('superagent')
/*......*/
let url = `https://movie.douban.com/subject/${id}/`
superagent.get(url)"/>

      <p class="jianli-p">
        3.分析单个页面结构，使用cheerio库进行类jQuery处理，记录需要的数据。
      </p>
      <More code="var $ = cheerio.load(txt);
var movie = {}
movie.year = $('#content h1 span').eq(1).text().replace(/[()]/g,'')
movie.summary = $('#link-report').text().trim()
movie.comments = []
$('#comments-section #hot-comments p').each(function() {
  movie.comments.push($(this).text())
})
/*......*/"/>

      <p class="jianli-p">
        4.若需要保存图片，使用pipe(fs.createWriteStream(dir))来保存可写流。
      </p>
      <More code="var downloadImg = function(src, id){
  var filename = id + src.match(/.\w+$/)[0]
  superagent.get(src).pipe(fs.createWriteStream(__dirname + '/_images/id/' + filename))
};"/>

    <p class="jianli-p">
      5.将所需要的数据，输出为json文件，并保存在本地。
    </p>
    <More code="fs.writeFileSync(path.join(__dirname, '_data','id' ,val.id+'.json'), JSON.stringify(val, null, 2))"/>
    <p class="jianli-p">
      使用co库，便于异步操作。
    </p>
    <More code="var co = require('co')
  co(function* (){

    //发送get请求返回res
    var res = yield superagent.get(url)

    //获取movie对象数据
    var movie = yield getMovie(id, res.text)

    //movie.reviews每一个id发送get请求获得review的res
    var reviews = yield movie.reviews.map(reviewId => {
      var src = `https://movie.douban.com/review/${reviewId}/`
      return superagent.get(src)
    })

    //将review的res转化为movie.reviews
    movie.reviews = getReview(reviews)

    return movie
  }).then(val => {
    /*......*/
  },err => console.log('err',err))
"/>
    <p class="jianli-p">
      使用async库,便于控制并行数和延迟。
    </p>
    <More code="var async = require('async')
async.mapLimit(ids, 3, (id, cb) => {
  init(id, cb)
},err => {/*......*/})

var init = function(id, cb) {
  var start = +new Date()
  /*......*/
  setTimeout(()=> {
    if (cb) cb()
  },+new Date() - start + 5000)
}"/>

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