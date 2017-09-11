var promise = new Promise(function(resolve, reject) {
  if (1) {
    resolve('Stuff worked');
  } else {
    reject(Error('It broke'));
  }
})

promise.then(function(result) {
  console.log(result);
  return '11111';
}, function(err) {
  console.log(err);
  return '00000';
}).then(function(res) {
  console.log(res);
})


var promise = new Promise(function(resolve, reject) {
  throw new Error('test');
})

promise.catch(function(error) {
  console.log(error);
})