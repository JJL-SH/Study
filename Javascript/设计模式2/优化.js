function getUser(path, callback) {
    return $.get(path, callback)
}

getUser('/api/user', function(resp) {
    // resp为成功请求之后返回的数据
    console.log(resp);
})
