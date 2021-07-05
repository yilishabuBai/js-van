import cookieSet from './cookie/set'
import storageSet from './storage/set'
import VanType from './type'
import IVanOptions from './interface/van-options'
import VanOptions from './van-options'

export const set = (key: string, value: any, options?: IVanOptions) => {
  options = options || new VanOptions(VanType.localStorage)
  const type: VanType = options.type
  for (const typeKey in VanType) {
    if (Object.prototype.hasOwnProperty.call(VanType, typeKey)) {
      const vanType: number = parseInt(VanType[typeKey])
      if (!isNaN(vanType)) {
        const tempType = vanType & type
        if (tempType === VanType.cookie) {
          cookieSet(key, value, options.expires, options.domain)
        } else if (tempType === VanType.localStorage || tempType === VanType.sessionStorage) {
          storageSet(typeKey, key, value, options.expires)
        }
      }
    }
  }
}
