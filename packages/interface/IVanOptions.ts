import VanType from '../enum/VanType'

export default interface IVanOptions {
  type: VanType,
  expires: number | string,
  domain: string
}
