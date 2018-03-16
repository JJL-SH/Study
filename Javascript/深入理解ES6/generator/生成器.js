function *createIterator() {
  yield 1;
  yield 2;
  yield 3;
}

let iterator = createIterator();

console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

let collection = {
  items: [],
  *[Symbol.iterator](){
    for(let item of this.items) {
      yield item
    }
  }
}

collection.items.push(1)
collection.items.push(2)
collection.items.push(3)


for (let x of collection) {
  console.log(x)
}
