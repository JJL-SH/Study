/*
 * @Author: Bob.Liu
 * @Date:   2017-10-16 17:39:46
 * @Last Modified by:   Bob.Liu
 * @Last Modified time: 2017-10-17 15:54:41
 */
let test = 111;
for (let i = 0; i < 10; i++) {
  document.body.onclick = function(){
    console.log(i);
  }
}
