import { VanType } from '../enum'

export default interface IVanOptions {
  type: VanType,
  expires: number | string,
  domain: string
}
