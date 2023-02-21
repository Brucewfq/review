/**
 * 递归实现
 * @param {} arr 
 * @returns 
 */
function flatter(arr) {
  if (!arr.length) {
    return []
  }
  // [1,2,[3,4,[5,6,[7,8]]]]
  return arr.reduce((prev, curr) => {
    // 1 [1]
    // 2 [1,2]
    // [3,4,[5,6,[7,8]]]
    return Array.isArray(curr) ? [...prev, ...flatter(curr)] : [...prev, curr]
  }, [])
}
flatter([1,2,[3,4,[5,6,[7,8]]]])

/**
 * 迭代实现
 */

function flatter1(arr) {
  if (!arr.length) {
    return []
  }

  while(arr.some(item => Array.isArray(item))){
    arr = [].concat(...arr)
  }
  return arr
}