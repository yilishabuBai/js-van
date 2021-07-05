import IGetter from '../interface/IGetter'

export default class CookieGetter implements IGetter {
  get ($key: string): any {
    if (!document.cookie.length || document.cookie.indexOf(`${$key}=`) < 0) {
      return null
    }
    let start = document.cookie.indexOf(`${$key}=`)
    start = start + $key.length + 1
    let end = document.cookie.indexOf(';', start)
    if (end === -1) {
      end = document.cookie.length
    }
    let result = document.cookie.substring(start, end)
    try {
      result = JSON.parse(result)
    } catch (error) {
      console.error(`js-van: 获取数据异常！\nkey: ${$key}, type: cookie\n${error}`)
      return null
    }
    return result
  }
}
