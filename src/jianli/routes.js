import Jianli from './Jianli'
import crawler from './children/crawler'
import mongodb from './children/mongodb'
import ajax from './children/ajax'


export default {
  path: '/jianli',
  name: 'Jianli',
  component: Jianli,
  children: [
    {path: 'crawler',component: crawler},
    {path: 'mongodb',component: mongodb},
    {path: 'ajax',component: ajax},
  ],
}
