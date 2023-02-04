# 什么是Hook？
  Hook 是一些可以让你在函数组件里拥有状态及生命周期等特性的函数。
# Hook和普通函数的区别
  官方提供的Hook只能在React函数组件或者自定义Hooks内调用，而不应该在普通函数中调用。
  自定义Hooks能够调用useSate，useCallback等hook，而普通函数不行。
  自定义Hooks需要以use开头，普通函数则没有这个限制。
