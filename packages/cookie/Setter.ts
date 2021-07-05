import IOptions from '../interface/IOptions'
import ISetter from '../interface/ISetter'

export default class CookieSetter implements ISetter {
  set ($key: string, $value: any, $options: IOptions = { expires: '', domain: '' }): void {
    const value = JSON.stringify($value)
    let cookie = `${$key}=${value};`
    const expires = parseInt($options.expires.toString())
    if (!isNaN(expires)) {
      const newExpires: Date = new Date(Date.now() + expires)
      cookie += `expires=${newExpires.toUTCString()};`
    }
    if ($options.domain) {
      cookie += `domain=${$options.domain};path=/;`
    }
    document.cookie = cookie
  }
}
