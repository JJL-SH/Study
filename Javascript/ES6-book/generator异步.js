
// function *gen(x) {
//   var y = yield x + 2;
//   return y;
// }
// var g = gen(1);
// console.log(g.next());
// console.log(g.next());

// function f(m) {
//   return m * 2;
// }
// // f(x + 5);

// var thunk = function () {
//   return x + 5;
// }
// function f(thunk) {
//   return thunk() * 2;
// }

// // fs.readFile(fileName, callback);

// // var Thunk = function (fileName) {
// //   return function (callback) {
// //     return fs.readFile(fileName, callback);
// //   }
// // }
// // var readFileThunk = Thunk(fileName);
// // readFileThunk(callback);

// var Thunk = function (fn) {
//   return function () {
//     var args = Array.prototype.slice.call(arguments);

//     return function (callback) {
//       args.push(callback);

//       return fn.apply(this, args);
//     }
//   }
// }
// var Thunk = function (fn) {
//   return function (...args) {
//     return function (callback) {
//       return fn.call(this, ...args, callback);
//     }
//   }
// }
// function f(a, cb) {
//   cb(a)
// }
// var ft = Thunk(f);
// ft(1)(console.log)



// function *gen() {
//   yield 1;
//   yield 1;
//   yield 1;
//   yield 1;
// }
// var g = gen();
// var res = g.next();

// while(!res.done) {
//   console.log(res.value);
//   res = g.next()
// }


// function run(fn) {
//   var gen = fn();

//   function next(err, data) {
//     var res = gen.next(data);

//     if (res.done) {
//       return;
//     }
//     res.value(next);
//   }

//   next();
// }
// function *g() {
//   yield 1;
//   yield 1;
//   yield 1;
//   yield 1;
// }
// run(g)


// var Thunk = function (fn) {
//   return function () {
//     var args = [].prototype.slice.call(arguments);

//     return function (callback) {
//       args.push(callback);
//       return fn.call(this, args);
//     }
//   }
// }

// var Thunk = function (fn) {
//   return function (...args) {
//     return function (callback) {
//       return fn.call(this, ...args, callback);
//     }
//   }
// }

// function run(fn) {
//   var gen = fn();

//   function next(err, date) {
//     var res = gen.next(data);

//     if (res.down) {
//       return;
//     }
//     res.value(next);
//   }
//   next();
// }

// function *g() {
//   // body...
// }
// run(g);


function run(gen) {
  var g = gen();

  function next(data) {
    var res = g.next(data);

    if (res.done) {
      return res.value;
    }

    res.value.then(function (data) {
      next(data)
    })
  }
  next();
}

fun(gen)