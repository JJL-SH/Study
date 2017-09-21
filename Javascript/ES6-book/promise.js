// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'Bob');
//   })
// }
// timeout(100).then((value) => {
//   console.log(value);
// })

// console.log('=============');
// var promise = new Promise(function (resolve, reject) {
//   console.log('Promise');
//   resolve();
// })
// promise.then(function () {
//   console.log('resolved');
// })
// console.log('Hi!');

// console.log('=============');
// var getJSON = function (url) {
//   var promise = new Promise(function (resolve, reject) {
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
//         reject(new Error(this.statusText))
//       }
//     }
//   })
//   return promise;
// }



// var p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {Preject(new Error('fail'))}, 3000);
// })
// var p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {resolve(p1)}, 1000);
// })

// p2.then((result) => {
//   console.log(result);
// }).catch((error) => {
//   console.log(error);
// })

// new Promise((resolve, reject) => {
//   resolve(1);
//   console.log(2);
// }).then((r) => {
//   console.log(r);
// })

// console.log('======');
// var promises = [2,3,5,7,11,13].map(function (id) {
//   return getJSON('/post/' + id + '.json');
// })
// Promise.all(promises).then(function (posts) {
//   console.log('success');
// }).catch(function (error) {
//   console.log('error');
// });


// var p1 = new Promise((resolve, reject) => {
//   resolve('hello');
// }).then(result => result).catch(e => e);
// var p2 = new Promise((resolve, reject) => {
//   resolve('11111')
// }).then(result => result).catch(e => e);

// Promise.all([p1, p2]).then(result => console.log(result)).catch(e => console.log(e))


// var thenable = {
//   then: function(resolve, reject) {
//     resolve(42);
//   }
// }

// var p1 = Promise.resolve(thenable);
// p1.then(function (value) {
//   console.log(value);
// })


// var p = Promise.resolve('Hello');

// p.then(function (s) {
//   console.log(s);
// })


function getFoo() {
  return new Promise(function (resolve, reject) {
    resolve('foo');
  })
}
var g = function* () {
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
      return resolve.value;
    }

    return result.value.then(function (value) {
      return go(it.next(value));
    }, function (error) {
      return go(it.throw(error))
    })
  }
  go(it.next());
}

run(g);








