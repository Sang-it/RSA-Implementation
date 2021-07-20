import bigInt from "big-integer"

export const encode = (str, e, N) => {
  const encodedArr = []
  for (const s of str) {
    const encoded = bigInt(s.charCodeAt()).modPow(e, N)
    encodedArr.push(encoded)
  }
  return encodedArr
}
