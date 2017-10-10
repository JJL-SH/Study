/*
* @Author: Bob.Liu
* @Date:   2017-10-09 11:34:15
* @Last Modified by:   Bob.Liu
* @Last Modified time: 2017-10-09 15:20:55
*/
var arr = [56,2,3,4,5,23,2,3,123,1,24,1,24,23,4,23,42,35,56,2,3];
function bubbleSort(arr) {
  console.time('test');
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      console.log(i, j);
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j + 1];

        arr[j + 1] = arr[j]
        arr[j] = temp;
      }
    }
  }
  console.timeEnd('test');
  return arr;
}
console.log(bubbleSort(arr));

function selectionSort(arr) {
  var len = arr.length;
  var minIndex;
  var temp;

  for (var i = 0; i < len - 1; i++) {
    minIndex = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
console.log(selectionSort(arr));

function insertionSort(arr) {
  var len = arr.length;
  var preIndex;
  var current;

  for (var i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}
console.log(insertionSort(arr));

