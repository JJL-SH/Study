function pick(object) {
  let result = Object.create(null)
  for(let i=1,len=arguments.length;i<len;i++){
    result[arguments[i]] = object[arguments[i]]
  }
  return result;
}

let book = {
  title: 'Understanding ECMAScript',
  author: 'Nicholas C.Zakas',
  year: 2016
}
let bookData = pick(book, 'author', 'year')

console.log(bookData.author)
console.log(bookData.year)
console.log(bookData)
