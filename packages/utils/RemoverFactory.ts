import CookieRemover from '../cookie/Remover'
import { VanType } from '../enum'
import IRemover from '../interface/IRemover'
import StorageRemover from '../storage/Remover'

export default class RemoverFactory {
  static getRemover ($vanType: VanType): IRemover {
    let remover: IRemover
    switch ($vanType) {
      case VanType.cookie:
        remover = new CookieRemover()
        break
      case VanType.sessionStorage:
        remover = new StorageRemover(window.sessionStorage)
        break
      case VanType.localStorage:
      default:
        remover = new StorageRemover(window.localStorage)
        break
    }
    return remover
  }
}
