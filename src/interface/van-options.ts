import VanType from '../type'

export default interface IVanOptions {
  type: VanType,
  expires?: number,
  domain?: string
}
