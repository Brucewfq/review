const getData = () => new Promise((resolve, reject) => setTimeout(() => resolve('data')), 1000);

function* testData(){
  const data1 = yield getData();
  console.log(data1)
  const data2 = yield getData();
  console.log(data2);

  return 'success';
}
// getData().then(res => console.log(res));
const gen = testData();
const p = gen.next();
p.value.then(res => {
  const p2 = gen.next(res);
  p2.value.then(res1 => {
    console.log('res1', res1)
    const p3 = gen.next('p3')
  })
})
// function asyncToGenerator(){

// }