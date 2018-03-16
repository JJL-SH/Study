function setCookie(name, value, {secure, path, domain, expires} = {}) {
  console.log(secure)
}
setCookie('type', 'js', {
  secure: true,
  expires: 6000
})