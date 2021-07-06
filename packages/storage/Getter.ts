import IGetter from '../interface/IGetter'

export default class CookieGetter implements IGetter {
  storage: Storage | null = null

  constructor ($storage: Storage) {
    this.storage = $storage
  }

  get ($key: string): any {
    if (!this.storage || !this.storage.getItem) {
      return null
    }
    let result: any = this.storage.getItem($key)
    if (!result) {
      return null
    }
    try {
      result = JSON.parse(result)
    } catch (error) {
      console.error(`js-van: 获取数据异常！\nkey: ${$key}\n${error}`)
      return null
    }
    const time = result.expires ? new Date(result.expires) : Infinity
    if (time <= Date.now()) {
      this.storage.removeItem($key)
      return null
    }
    return result.value
  }
}
