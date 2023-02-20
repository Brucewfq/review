function myInterval(fn, time) {
  let timer = null;
  function interval() {
    fn();
    timer = setTimeout(interval, time)
  }
  interval();

  return {
    cancel: () => {
      clearTimeout(timer)
    }
  }
}
let count = 1;
// myInterval(() => {
//   console.log(++count)
// }, 1000);

function myTimeout(fn, time) {
  let timer = null;
  timer = setInterval(() => {
    clearInterval(timer);
    fn();
  }, time)
}

myTimeout(() => {
  console.log(++count)
}, 2000)

/**
 * setInterval的弊端：
 * 1、setInterval对自己调用的代码是否报错漠不关心。即使调用的代码报错了，它依然会持续的调用下去 
 * 2、setInterval并不定时。如果它调用的代码执行的时间小于定时的时间，它会跳过调用，这就导致无法按照你需要的执行次数或无法得到你想要的结果。
 * 3、JavaScript引擎在使用setInterval()时，仅当没有该定时器的任何其它代码实例时，
 * 才将定时器代码（即fn）添加到队列中，因此很容易因为队列中有前面还未执行的定时器，
 * 而导致当前定时器被跳过，没有加入队列中。
 * 
 * 使用链式setTimeout()调用来实现setInterval:
 * setTimeout(function (){
      console.log("nice!");
      setTimeout(arguments.callee,2000);
  },2000)
 * 
 */
