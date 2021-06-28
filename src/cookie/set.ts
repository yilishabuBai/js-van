export default (key: string, value: any, expires: number = -1, domain: string = '') => {
  const tempValue = JSON.stringify(value)
  let cookie = `${key}=${tempValue};`
  if (expires >= 0) {
    const newExpires: Date = new Date(Date.now() + expires)
    cookie += `expires=${newExpires.toUTCString()};`
  }
  if (domain) {
    cookie += `domain=${domain};path=/;`
  }
  document.cookie = cookie
}
