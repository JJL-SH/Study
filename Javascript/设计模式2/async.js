function ajax(t) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(t + 200)
    }, t)
  })
}

function step1(t) {
  console.log(`setp1 in ${t}ms`);
  return ajax(t);
}

function step2(t) {
  console.log(`setp2 in ${t}ms`);
  return ajax(t);
}

function step3(t) {
  console.log(`setp3 in ${t}ms`);
  return ajax(t);
}

function submit() {
  console.time('submit');
  step1(200).then((time2) => {
    return step2(time2);
  }).then((time3) => {
    return step3(time3);
  }).then((result) => {
    console.log(`result is ${result}ms`);
    console.timeEnd("submit");
  })
}

async function submit2() {
  console.time('submit2');
  var t1 = 200;
  var t2 = await step1(t1);
  var t3 = await step2(t2);
  var result = await step3(t3);
  console.log(`result is ${result}ms`);
  console.timeEnd("submit2");
}

// submit()
submit2()