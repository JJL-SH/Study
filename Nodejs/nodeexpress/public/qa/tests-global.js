suite('全局测试', function() {
  test('页面需要有一个有效的标题', function(){
    assert(document.title && document.title.match(/\S/)) && document.title.toUpperCase() !== 'TODO';
  })
})