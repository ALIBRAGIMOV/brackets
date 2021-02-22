module.exports = function check(str, bracketsConfig) {
  let a = []
  let b = []
  for (let i = 0; i < bracketsConfig.length; i++) {
    a[i] = bracketsConfig[i][0]
    b[i] = bracketsConfig[i][1]
  }
  let arr = str.split('')
  for (let i = 0; i < arr.length; i++) {
    for (item in a) {
      if (arr[i] == a[item]) {
        if (arr[i + 1] == b[item]) {
          arr.splice(i, 2)
          i = -1
          break
        }
      }
    }
  }
  return arr.length == 0 ? true : false
}
