import bigInt from "big-integer"
import { getGCD } from "./gcd.js"

//Everything is based on Fermats little theorem.
// m ^ (ed) == m (mod n)
// == is the quivalence(the three line thing) sign here

//Any two primes can be used.
// Preferably large.
const p = 7907
const q = 7919

const N = bigInt(p).times(q)

//Eulers totient : the number of factors lower than the number
const phiN = bigInt(p - 1).times(q - 1)

//Better thing to do is to find Carmicheals totient :
//lambda(N) = lcm(p-1,q-1)
//Carmichaels totient
const lambdaN = bigInt(phiN).divide(getGCD(p - 1, q - 1)) // using Euclidean algo here. lcm(ab) = |ab|/gcd(ab)

//Co-prime with phiN || lamdaN and less than phiN || lambdaN
const e = 65537 //The Encyption key // 65537 is the most used one apparently

//Prefered values for e (Not necessarily though)
//they are in the form 2k+1
const fermatPrimes = [
  //special primes, harder to break && easier to do exponentiate with this
  3,
  5,
  17,
  257,
  65537,
  4294967297,
  18446744073709551617n,
  340282366920938463463374607431768211457n,
  115792089237316195423570985008687907853269984665640564039457584007913129639937n,
]

//Finding d
//phiN can be used instead of lambdaN
//They both work but lamdaN is prefered as:
//it gives a lower value for d which makes decryption less expensive.

const d = bigInt(e).modInv(lambdaN) //The Decryption key

//Encrypting a number
//We can define a function to parse strings to numbers later

//Any number from 0 to N can be encrypted or padded to be exact.
// 0 and 1 just map to themselves so probably not use them.

//Lets encrypt a number:
const encryptedNumber = bigInt(2).modPow(e, N) // e and N are the public keys
console.log(encryptedNumber)

const decryptedNumber = bigInt(encryptedNumber).modPow(d, N) // d and N are the private keys
console.log(decryptedNumber)

// Get rid of p and q and T or lamdaN after RSA key gen
// Secure the d in as secret
