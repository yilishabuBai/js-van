import IVanOptions from './interface/van-options'
import VanType from './type'

export default class VanOptions implements IVanOptions {
  type: VanType
  expires: number
  domain: string

  constructor ($type: VanType, $expires: number = -1, $domain: string = '') {
    this.type = $type
    this.expires = $expires
    this.domain = $domain
  }
}
