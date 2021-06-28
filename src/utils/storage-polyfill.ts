import { storageEnabled } from './enabled-check'

let localStorage: any = {}
let sessionStorage: any = {}
const init = (): void => {
  Object.defineProperty(window, 'localStorage', {
    value: {
      setItem (key: string, value: any): void {
        localStorage[key] = value
      },
      getItem (key: string): any {
        return localStorage[key]
      },
      removeItem (key: string): void {
        delete localStorage[key]
      },
      clear (): void {
        localStorage = {}
      }
    }
  })
  Object.defineProperty(window, 'sessionStorage', {
    value: {
      setItem (key: string, value: any): void {
        sessionStorage[key] = value
      },
      getItem (key: string): any {
        return sessionStorage[key]
      },
      removeItem (key: string): void {
        delete sessionStorage[key]
      },
      clear (): void {
        sessionStorage = {}
      }
    }
  })
}

// 对localStorage和sessionStorage进行polyfill，防止在浏览器禁用存储时报错
if (!storageEnabled) {
  init()
}

