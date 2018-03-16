let node = {
  type: "Identifier",
  name: "foo",
  loc: {
    start: {
      line: 1,
      column: 1
    },
    end:{
      line:1,
      column: 4
    }
  }
}

let {loc: {start : {column}}} = node;
console.log(column)