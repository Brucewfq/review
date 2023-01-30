手动实现new操作符
要手动实现new操作符，我们先要理解new操作符到底做了些什么？
1、返回一个实例对象（如果构造函数有返回对象就直接返回该对象，否则返回实例对象）
2、拥有构造函数的属性和方法（不包含静态属性和静态方法）
3、可以通过原型链访问到构造函数显式原型对象上的方法（也就是prototype）
明白了以上几点之后，写起来就方便了：
```js
function myNew(fn){
  // 这种方式创建的obj对象，其__proto__指向的是fn的显式原型对象（即prototype属性）
  const obj = Object.create(fn.prototype);
  const ctor = [].shift.call(arguments);
  // 改变this指向
  const res = ctor.apply(obj, arguments);
  // 如果res是个对象就直接返回，否则返回新对象obj
  return typeof res === 'object' ? res : obj;
}
```