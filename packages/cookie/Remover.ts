import IRemover from '../interface/IRemover'
import CookieSetter from './Setter'

export default class CookieRemover extends CookieSetter implements IRemover {
  remove ($key: string): any {
    this.set($key, '', { expires: 0, domain: '' })
  }
}
