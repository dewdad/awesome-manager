/**
 * Created by Xing Wenju on 17/3/8.
 */
export default function createUniqueString() {
  const timestamp = +new Date() + ''
  const testNumber = (Math.random() + 1) * 65536
  const randomNum = parseInt(testNumber.toString()) + ''
  return (+(randomNum + timestamp)).toString(32)
}
