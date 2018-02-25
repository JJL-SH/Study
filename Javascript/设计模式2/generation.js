let promise = function (val) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(val);
      resolve(val);
    }, 1000)
  })
}

let gen = async function () {
  let p1 = await promise('1');
  let p2 = await promise('2');
}

gen()