Promise:
  promise是ES6标准提出异步编程解决方案。有pending（等待），fulfilled（成功），rejected（失败）三个状态。
  promise构造函数是同步，then是异步。
  优点：可以将异步操作以同步操作的流程表达出来，以免层层嵌套。
  缺点：
    1、无法取消Promise，一旦新建它就会立即执行，无法中途取消
    2、如果不设置回调函数，Promise内部抛出的错误不会反映到外部。
    3、处于pending状态时，是不能知道目前进展到哪个阶段的。
  异常捕获：
    1、reject（只能等状态变为失败才能捕获）
    2、catch：因为catch可以捕获执行中的错误，也更接近同步的写法（try/catch）
    3、捕获不了异步错误，因为try/catch只能捕获同步错误。
    unhandledrejection：可以捕获到promise异常，也是通过window.addEventListener('unhandledrejection', fun, true)方式。