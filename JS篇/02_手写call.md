手动实现call方法
想要实现call方法，我们先看看call有哪些特性：
1、立即执行，不需要返回对象
2、第一个参数为需要变更为this指向那个对象，其他的参数都是一个一个传入的
```js
Function.prototype.myCall = function(context) {
  // 获取参数
  const args = Array.from(arguments).slice(1);
  // 获取当前调用call的方法,把获取到的方法挂载到this需要指向的对象上。
  const fnName = Symbol();

  context[fnName] = this; 
  const res = context[fnName](...args);

  delete context[fnName];

  return res;
}
```
