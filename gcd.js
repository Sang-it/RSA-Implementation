import bigInt from "big-integer"

// every thing has to be int safe as primes can be realllly large
export const getGCD = (n, m) => {
  const max = bigInt(m).greaterOrEquals(n) ? m : n
  const min = bigInt(m).greaterOrEquals(n) ? n : m

  const rem = bigInt(max).mod(min)

  if (bigInt(rem).equals(0)) return min

  return getGCD(rem, min)
}
