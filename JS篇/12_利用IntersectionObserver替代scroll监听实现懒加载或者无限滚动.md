## IntersectionObserver (交叉观察器)
 以下是在MDN上的解释
 ```
 IntersectionObserver 接口（从属于 Intersection Observer API）提供了一种异步观察目标元素与其祖先元素或顶级文档视口（viewport）交叉状态的方法。
 其祖先元素或视口被称为根（root）
 ```
 ```js
 var observer = new IntersectionObserver(callback[, options]);
 /**
  * 参数：
  * callback 回调函数 当元素可见比例超过指定阈值后，会调用一个回调函数，此回调函数接受两个参数：
  *   # entries 一个IntersectionObserverEntry对象的数组，每个被触发的阈值，都或多或少与指定阈值有偏差。
  *   # observer 被调用的IntersectionObserver实例。
  * options  可选参数
  *   options: {
  *     root: "",
  *     rootMargin: ""0px 0px 0px 0px",
  *     threshold: ""
  *   }
  */
  //实例方法：
  IntersectionObserver.disconnect()
  使 IntersectionObserver 对象停止监听目标。

  IntersectionObserver.observe()
  使 IntersectionObserver 开始监听一个目标元素。

  IntersectionObserver.takeRecords()
  返回所有观察目标的 IntersectionObserverEntry 对象数组。

  IntersectionObserver.unobserve()
  使 IntersectionObserver 停止监听特定目标元素。

  // 示例：
  const intersectionObserver = new IntersectionObserver((entries) => {
    // 如果 intersectionRatio 为 0，则目标在视野外，
    // 我们不需要做任何事情。
    if (entries[0].intersectionRatio <= 0) return;

    loadItems(10);
    console.log("Loaded new items");
  });
  // 开始监听
  intersectionObserver.observe(document.querySelector(".scrollerFooter"));
 ```