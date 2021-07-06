import IVanOptions from './interface/IVanOptions'
import { VanType } from './enum'

export default class VanOptions implements IVanOptions {
  type: VanType
  expires: number | string
  domain: string

  constructor ($type: VanType, $expires: number | string = '', $domain: string = '') {
    this.type = $type
    this.expires = $expires
    this.domain = $domain
  }
}
