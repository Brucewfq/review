const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise1')
  }, 1000)
})
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise2')
  }, 2000)
})
const params = [1, promise1, promise2, 4];

Promise.myAll = (promiseList) => {
  const isPromise = (promise) => {
    if (typeof promise === 'object' && promise !== null || typeof promise === 'function') {
      if (typeof promise.then === 'function') {
        return true;
      }
    }
    //
    return false;
  }
  const promiseResult = []
  let idx = 0;
  
  return new Promise((resolve, reject) => {
    const handleResult = (data, index) => {
      promiseResult[index] = data;
  
      if (++idx === promiseList.length) {
        resolve(promiseResult);
      }
    }
    for (let i = 0; i < promiseList.length; i++) {
      const item = promiseList[i];
      if (isPromise(item)) {
        item.then(res => {
           handleResult(res, i)
        })
      } else {
        handleResult(item, i)
      }
    }
  })
}
// Promise.all(params).then(res => {
//   console.log(res);
// });
Promise.myAll(params).then(res => {
  console.log(res);
});