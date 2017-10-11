/*
* @Author: Bob.Liu
* @Date:   2017-10-10 15:53:32
* @Last Modified by:   Bob.Liu
* @Last Modified time: 2017-10-11 18:09:20
*/
// var promise = new Promise(function (resolve, reject) {
//   if (true) {
//     resolve(value);
//   } else {
//     reject(error);
//   }
// })
// promise.then(function (value) {
//   // body...
// }, function (error) {
//   // body...
// })

// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done');
//   })
// }
// timeout(100).then((value) => {
//   console.log(value);
// })


// var promise = new Promise((resolve, reject) => {
//   console.log('Promise');
//   resolve();
// })
// promise.then(() => {
//   console.log('resolved');
// })
// console.log('Hi');


// function loadImageAsync(url) {
//   return new Promise((resolve, reject) => {
//     var image = new Image();

//     image.onload = function () {
//       resolve(image);
//     }
//     image.onerror = function () {
//       reject(new Error('Could not load image at ' + url));
//     }
//     image.src = url;
//   })
// }


// var getJSON = function (url) {
//   return new Promise((resolve, reject) => {
//     var client = new XMLHttpRequest();

//     client.open('GET', url);
//     client.onreadystatechange = handler;
//     client.responseType = 'json';
//     client.setRequestHeader('Accept', 'application/json');
//     client.send();

//     function handler() {
//       if (this.readyState !== 4) {
//         return;
//       }
//       if (this.status === 200) {
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     }
//   })
// }
// getJSON('/posts.json').then((json) => {
//   console.log('Contents: ' + json);
// }, (error) => {
//   console.log('Error: ' + error);
// })

// var p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error('fail'))
//   }, 3000);
// })
// var p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {resolve(p1)}, 1000);
// })

// p2.then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// })



// var p1 = new Promise((resolve, reject) => {
//   resolve('hello');
// }).then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// })
// var p2 = new Promise((resolve, reject) => {
//   // throw new Error('天啊，出错了');
//   setTimeout(function () {
//     resolve('xxxxx')
//   }, 5000)
// }).then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// })
// Promise.all([p1, p2]).then((result) => {
//   console.log('all::' + result);
// }).catch((error) => {
//   console.log(':::::' + error);
// })




function getFoo() {
  return new Promise((resolve, reject) => {
    resolve('foo');
  })
}
var g = function *() {
  try {
    var foo = yield getFoo();
    console.log(foo);
  } catch (e) {
    console.log(e);
  }
}
function run(generator) {
  var it = generator();

  function go(result) {
    if (result.done) {
      return result.value;
    }
    return result.value.then(function (value) {
      return go(it.next(value));
    }, function (e) {
      return go(it.throw(e));
    })
  }
  go(it.next())
}
run(g)