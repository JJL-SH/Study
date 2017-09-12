# 为什么要使用sass
Sass是一个你所写的CSS样式表和css文件浏览器之间的预处理。元语言，弥补了css语言的一点不足之处。它允许你写css代码不需要重复。这对于创造可维护的样式将是非常有效的。

#### 常规css文件
- 修改一个主色麻烦
- 大量重复代码
- 层级嵌套混乱
- 浏览器样式兼容麻烦

#### sass文件
- 更明确的反映出html的解构
- 改非常好用的变量写法，改一处变全部
- css代码块，不需要重复写很多的内容只需要inclue或者extend

## 快速了解
- 变量
```
$color:#f90;
nav{
  $width:100px;
  width:$width;
  color:$color;
  border: solid $width $color;
}
```
- 嵌套CSS
```
#content{
  article{
    h1{
      color:#333;
    }
    p{
      margin-bottom:10px;
    }
  }
  aside{
    background:#eee;
  }
}
/* 编译后 */
#content article h1 { color: #333 }
#content article p { margin-bottom: 10px }
#content aside { background: #EEE }
&
>
~
+
```
- 导入SASS
```
@import 'colors';
@import 'mixins';
.main{
  @import 'block';
}
```
- 静默注释
```
body {
  color: #333; // 这种注释内容不会出现在生成的css文件中
  padding: 0; /* 这种注释内容会出现在生成的css文件中 */
}
```
- 混合器
```
@mixin rounded-corners {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
notice {
  @include rounded-corners;
}
@mixin link-colors($normal:blue, $hover:red, $visited:green) {
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}
a {
  @include link-colors(blue, red, green);
}

```
- 选择器继承
```
//通过选择器继承继承样式
.error {
  border: 1px solid red;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
```

