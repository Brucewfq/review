手动实现bind
1、不是立即执行，会返回一个函数
2、第一个参数是this要指向的对象
```js
Function.prototype.myBind = function(context,...params) {
  context = Object(context);
  const fn = this;
  return function(...args) {
    let res;
    res = fn.apply(context, [...args, ...params]);

    return res
  }
}
```