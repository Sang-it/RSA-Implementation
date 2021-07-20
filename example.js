import { encode } from "./encode.js"
import { decode } from "./decode.js"

const e = 65537n
const N = 62615533n
const d = 22993121n

const str = "heythe%#@!re"
const encodedShit = encode(str, e, N)

const decodedShit = decode(encodedShit, d, N)
console.log(decodedShit)
