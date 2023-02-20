// 用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
/**
 * object instanceof constructor
 * object：某个实例对象
    constructor：某个构造函数
 * 用来检测 constructor.prototype 是否存在于参数 object 的原型链上。
 */
function myInstanceof(left, right) {
  while(true){
    if (left === null) return false
    if (left.__proto__ === right.prototype) {
      return true
    }
    left = left.__proto__;
  }
}