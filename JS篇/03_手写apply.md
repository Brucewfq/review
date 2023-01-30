手动实现apply：
1、立即执行，不需要返回值
2、两个参数，第一个参数为需要this指向的那个对象，第二个参数是数组。
```js
Function.prototype.myApply = function(context, params) {
  const fnName = Symbol();
  context = Object(context);

  context[fnName] = this;
  const res = context[fnName](...params);
  
  delete context[fnName];

  return res
}
```