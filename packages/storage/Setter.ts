import IOptions from '../interface/IOptions'
import ISetter from '../interface/ISetter'

export default class StorageSetter implements ISetter {
  storage: Storage | null = null

  constructor ($storage: Storage) {
    this.storage = $storage
  }

  set ($key: string, $value: any, $options: IOptions = { expires: '', domain: '' }): void {
    const expires = parseInt($options.expires.toString())
    const data = JSON.stringify({
      value: $value,
      expires: !isNaN(expires)
        ? new Date(Date.now() + parseInt($options.expires.toString())).toUTCString()
        : ''
    })
    if (this.storage) {
      this.storage.setItem($key, data)
    }
  }
}
