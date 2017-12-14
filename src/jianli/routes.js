import Jianli from './Jianli'
import crawler from './children/crawler'
import mongodb from './children/mongodb'


export default {
  path: '/jianli',
  name: 'Jianli',
  component: Jianli,
  children: [
    {path: 'crawler',component: crawler},
    {path: 'mongodb',component: mongodb},
  ],
}
