import CookieSetter from '../cookie/Setter'
import VanType from '../enum/VanType'
import ISetter from '../interface/ISetter'
import StorageSetter from '../storage/Setter'

export default class SetterFactory {
  static getSetter ($vanType: VanType): ISetter {
    let setter: ISetter
    switch ($vanType) {
      case VanType.cookie:
        setter = new CookieSetter()
        break
      case VanType.sessionStorage:
        setter = new StorageSetter(window.sessionStorage)
        break
      case VanType.localStorage:
      default:
        setter = new StorageSetter(window.localStorage)
        break
    }
    return setter
  }
}
