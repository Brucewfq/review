function isObject(obj) {
  return typeof val === "object" && val !== null;
}
/**考虑到复制 Symbol 类型 */
/**
 * WeakMap只接收对象作为键名（null除外），不接受其他类型的值作为键名
 * WeakMap的键名所指向的对象不计入垃圾回收机制
 * 一旦不再需要，WeakMap里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。
 * @param {*} obj 
 * @param {*} hash 
 * @returns 
 */
function deepClone(obj, hash = new WeakMap()) {
  if (!isObject(obj)) { return obj}

  if (hash.has(obj)) {
    return hash.get(obj);
  }

  const target = Array.isArray(obj) ? [] : {};

  hash.set(obj, target);
  // 考虑到symbol，所有用Reflect.ownKeys，返回对象的所有属性
  // Reflect.ownKeys相当于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和。
  Reflect.ownKeys(obj).forEach(item => {
    if (isObject(obj[item])) {
      target[item] = deepClone(obj[item], hash);
    } else {
      target[item] = obj[item];
    }
  })

  return target;
}