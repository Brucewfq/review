const { type } = require("os")
const { emit } = require("process")
const { subscribeOn } = require("rxjs")

class EventEmiter{
  constructor{
    this.subs = []
  }

  on(type, callback) {
    if (!this.subs[type]) {
      this.subs[type] = [callback]
    } else {
      this.subs[type].push(callback)
    }
    
  }

  emit(type, ...args) {
    this.subs[type] && this.subs[type].forEach(callback => {
      callback.apply(this, args);
    });
  }
}