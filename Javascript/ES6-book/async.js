// async function getStockPriceByName(name) {
//   const symbol = await getStockSymbol(name);
//   const stockPrice = await getStockPrice(symbol);
//   return stockPrice;
// }

// getStockPriceByName('goog').then(function (resutl) {
//   console.log(result);
// })

// async function test(num) {
//   let one = await num;
//   let two = await 1 + one;

//   return two;
// }
// test(1).then(function (res) {
//   console.log(res);
// })



function timeout(ms) {
  return new Promise((res) => {
    setTimeout(res, ms);
  })
}
async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}
asyncPrint('hello world', 50)
