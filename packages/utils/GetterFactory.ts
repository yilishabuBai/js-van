import CookieGetter from '../cookie/Getter'
import { VanType } from '../enum'
import IGetter from '../interface/IGetter'
import StorageGetter from '../storage/Getter'

export default class GetterFactory {
  static getGetter ($vanType: VanType): IGetter {
    let getter: IGetter
    switch ($vanType) {
      case VanType.cookie:
        getter = new CookieGetter()
        break
      case VanType.sessionStorage:
        getter = new StorageGetter(window.sessionStorage)
        break
      case VanType.localStorage:
      default:
        getter = new StorageGetter(window.localStorage)
        break
    }
    return getter
  }
}
