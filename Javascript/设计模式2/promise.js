// function want() {
//   console.log('这是你想执行的代码')
// }
// function fn(want) {
//   console.log('这里表示执行了一大堆各种代码')
//   return new Promise(function (resolve, reject) {
//     if (typeof want === 'function') {
//       resolve(want)
//     } else {
//       reject('TypeError:'+want+'不是一个函数')
//     }
//   })
// }
// fn(want).then(function (want) {
//   want()
// })
// fn('1234').then(function (err) {
//   console.log(err)
// })



var fn = function(num) {
    return new Promise(function(resolve, reject) {
        if (typeof num == 'number') {
            resolve(num);
        } else {
            reject('TypeError');
        }
    })
}

fn(2).then(function(num) {
    console.log('first: ' + num);
    return num + 1;
})
.then(function(num) {
    console.log('second: ' + num);
    return num + 1;
})
.then(function(num) {
    console.log('third: ' + num);
    return num + 1;
});
