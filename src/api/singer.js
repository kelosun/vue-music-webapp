import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getSingerList() {
  // 当前get方式获取的网址
  // const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'

  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    g_tk: 1664029744
  })

  return jsonp(url, data, options)
}