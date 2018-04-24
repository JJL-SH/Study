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



// function timeout(ms) {
//   return new Promise((res) => {
//     setTimeout(res, ms);
//   })
// }
// async function asyncPrint(value, ms) {
//   await timeout(ms);
//   console.log(value);
// }
// asyncPrint('hello world', 50)


// const asyncIterable = createAsyncIterable(['a', 'b']);
// const asyncIterator = asyncIterable[Symbol.asyncIterator]();

// asyncIterator.next().then((iterResule1) => {
//   console.log(iterResule1);

//   return asyncIterator.next();
// }).then((iterResule2) => {
//   console.log(iterResule2);

//   return asyncIterator.next();
// }).then((iterResule3) => {
//   console.log(iterResule3);
// })






