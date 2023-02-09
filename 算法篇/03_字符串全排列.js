function pre (s) {
  const res = [];
  // 先给字符串排序，以便后面处理相同字符串的情况
  s = s.split('').sort((a, b) => {
    return a > b ? 1 : -1
  }).join('');

  const dfs = (curr, store) => {
    if (!store.length) {
      res.push(curr);
    }

    for(let i = 0; i < store.length; i++){
      if(i > 0 && store[i]===store[i - 1]) continue;

      dfs(curr + store[i], store.slice(0,i) + store.slice(i + 1));
    }
  }

  dfs('', s);

  return res;
}
console.log(pre('abcd'))