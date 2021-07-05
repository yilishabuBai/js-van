export const cookieEnabled: boolean = navigator.cookieEnabled

export const storageEnabled: boolean = (function (): boolean {
  try {
    return !!window.localStorage
  } catch (error) {
    return false
  }
})()
