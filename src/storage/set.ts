import IWindow from '../interface/window'

export default (storageType: string, key: string, value: any, expires: number = -1) => {
  const data = JSON.stringify({
    value,
    expires: expires < 0 ? '' : new Date(Date.now() + expires).toUTCString()
  })
  const storage: Storage = (window as IWindow)[storageType]
  if (storage) {
    storage.setItem(key, data)
  }
}
