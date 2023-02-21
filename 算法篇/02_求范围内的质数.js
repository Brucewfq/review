// 质数也称为素数，除了1和它自身外，不能被其他自然数整除的数叫做质数，否则称为合数（规定1既不是质数也不是合数）。

/***
 * 解法一：利用双循环
 * 内层循环从2开始，把当前的值除以从2开始到自身的前一个值
 * 如果有能被整除的，说明不是质数，否则当前值为质数，添加到新的数组中
 * 
 */
function getPrime(arrList) {
  //
  const result = []
  for (let i = 0; i < arrList.length; i++) {
    const num = arrList[i];
    let bool = false;
    // 循环次数可以改成num的开平方根的值，从而可以减少循环次数
    const sq = Math.sqrt(num);
    for (let j = 2; j <= sq; j++) {
      if (num % j === 0) {
        bool = true;
        break;
      }; 
    }
    //
    if (!bool) {
      result.push(num);
    }
  }
  //
  return result;
}
/***
 * 解法二：
 * 可以利用数组的filter方法来实现
 * 定义一个判断是否是质数的方法isPrime，然后传入filter中，就可以实现
 * isPrime中可以通过Math.sqrt(num)来减少循环次数
 * 因为一个数的最小质因数一定会小于或等于这个数的开方（平方根）
 */

function isPrime(num) {
  if (num <= 3) {
    return num > 1
  }
  const sq = Math.sqrt(num);
  for (let i = 2; i <= sq; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  //
  return true;
}

const res = [];
for (let i = 100 ; i <= 200; i++) {
  res.push(i)
}

console.log(getPrime(res))
console.log(res.filter(isPrime))

