// import type file
import type { A } from './a'
// @ts-expect-error requires a comment
const a: A = 1
export default a
