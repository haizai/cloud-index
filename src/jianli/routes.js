import Jianli from './Jianli'
import crawler from './children/crawler'
import mongodb from './children/mongodb'
import ajax from './children/ajax'
import session from './children/session'
import socket from './children/socket'
import ejs from './children/ejs'


export default {
  path: '/jianli',
  name: 'Jianli',
  component: Jianli,
  children: [
    {path: 'crawler',component: crawler},
    {path: 'mongodb',component: mongodb},
    {path: 'ajax',component: ajax},
    {path: 'session',component: session},
    {path: 'ejs',component: ejs},
    {path: 'socket',component: socket},
  ],
}
