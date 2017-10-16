/*
* @Author: Bob.Liu
* @Date:   2017-10-12 17:49:03
* @Last Modified by:   Bob.Liu
* @Last Modified time: 2017-10-12 17:51:51
*/
function doSomething(name) {
  console.log(name);
}
function loggingDecorator(wrapped) {
  return function () {
    console.log('Starting');
    const result = wrapped.apply(this, arguments);
    console.log('Finshed');

    return result;
  }
}
const wrapped = loggingDecorator(doSomething);
wrapped('bob')