export const cookieEnabled: boolean = navigator.cookieEnabled

export const storageEnabled: boolean = ((): boolean => {
  try {
    return !!window.localStorage
  } catch (error) {
    return false
  }
})()
