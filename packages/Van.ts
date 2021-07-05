import VanOptions from './VanOptions'
import VanType from './enum/VanType'
import SetterFactory from './utils/SetterFactory'
import ISetter from './interface/ISetter'
import IGetter from './interface/IGetter'
import IRemover from './interface/IRemover'
import GetterFactory from './utils/GetterFactory'
import RemoverFactory from './utils/RemoverFactory'

export function set ($key: string, $value: any, $options?: VanOptions): void {
  const options = $options || new VanOptions(VanType.localStorage)
  for (const key in VanType) {
    if (isNaN(parseInt(key))) {
      const type: VanType = VanType[key] as unknown as VanType
      if (type && options.type) {
        const setter: ISetter = SetterFactory.getSetter(type)
        setter.set($key, $value, { expires: options.expires, domain: options.domain })
      }
    }
  }
}

export function get ($key: string, $options?: VanOptions): any {
  const options = $options || new VanOptions(VanType.localStorage)
  for (const key in VanType) {
    if (isNaN(parseInt(key))) {
      const type: VanType = VanType[key] as unknown as VanType
      if (type && options.type) {
        const getter: IGetter = GetterFactory.getGetter(type)
        return getter.get($key)
      }
    }
  }
}

export function remove ($key: string, $options?: VanOptions): void {
  const options = $options || new VanOptions(VanType.localStorage)
  for (const key in VanType) {
    if (isNaN(parseInt(key))) {
      const type: VanType = VanType[key] as unknown as VanType
      if (type && options.type) {
        const getter: IRemover = RemoverFactory.getRemover(type)
        return getter.remove($key)
      }
    }
  }
}
