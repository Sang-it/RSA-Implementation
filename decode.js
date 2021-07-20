import bigInt from "big-integer"

export const decode = (encodedArr, d, N) => {
  let str = ""
  for (const n of encodedArr) {
    const decoded = bigInt(n).modPow(d, N)
    str += String.fromCharCode(decoded)
  }
  return str
}
