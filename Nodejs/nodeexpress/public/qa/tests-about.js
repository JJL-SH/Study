suite('关于我们页面测试', function(){
  test('页面中需要有一个到联系我们页面的链接', function(){
    assert($('a[href="/contact"]').length)
  })
})