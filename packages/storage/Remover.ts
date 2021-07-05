import IRemover from '../interface/IRemover'

export default class StorageRemover implements IRemover {
  storage: Storage | null = null

  constructor ($storage: Storage) {
    this.storage = $storage
  }

  remove ($key: string): void {
    this.storage?.removeItem($key)
  }
}
