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
- css代码块，不需要重复写很多的内容只需要inclue或者extend


### 变量
```
$color:#f90;
$color:#eee !default;
nav{
  $width:100px !global;
  width:$width;
  color:$color;
  border: solid $width $color;
}
bar{
  width:$width;
}
```
### 运算
```
p {
  font: 10px/8px;
  // #{$font-size}/#{$line-height}
  $width: 1000px;
  width: $width/2;            
  width: round(1.5)/2;        
  height: (500px/2);          
  margin-left: 5px + 8px/2px;
  color: rgba(#eee, 0.5); // 函数
  color: #010203 + #010203; // 020406
  color: #010203 * 2; // 020406
  color: rgba(111, 111, 111, 0.2) + rgba(111, 111, 111, 0.2); // (222,222,222)
  
  $translucent-red: rgba(255, 0, 0, 0.5);
  color: opacify($translucent-red, 0.3);
  color: transparentize($translucent-red, 0.25);
} 
```
### 插值语句 #{}
```
$name: foo;
$attr: border;
p.#{$name} {
  #{$attr}-color: blue;
}
```
### 嵌套 CSS
```
#content{
  article{
    h1{
      color:#333;
      border: solid 1px #eee {
        left-color: red;
        right: 0;
      }
    }
    p{
      margin-bottom:10px;
      border:{
        style:solid;
        width:1px;
        color:red;
      }
    }
  }
  aside{
    background:#eee;
  }
}

/* 编译后 */
#content article h1 {
  color: #333;
  border: solid 1px #eee;
  border-left-color: red;
  border-right: 0;
}
#content article p {
  margin-bottom: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: red;
}
#content aside {
  background: #eee;
}


&
>
~
+



```
### 导入SASS
```
@import 'colors'; // _colors.scss 局部文件
@import 'mixins'; // _mixins.scss 局部文件
.main{
  @import 'block';
}
```
### 静默注释
```
$version:"1.0.0";
body {
  color: #333; // 这种注释内容不会出现在生成的css文件中
  padding: 0; /* 这种注释内容会出现在生成的css文件中 */
  margin: 0; /*! 这种注释内容不会被删除 */
  height: 0; /* 版本信息#{$version} */
}
```
### 混合器
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
### 选择器继承
```
//通过选择器继承继承样式
a{
  font-size:12px;
  text-decoration:none;

}
%link{
  color:red;
  text-decoration:underline;

}
.disabled{
  color:gray;
  @extend %link;
  @extend a;
}

a, .disabled {
  font-size: 12px;
  text-decoration: none;
}

.disabled {
  color: red;
  text-decoration: underline;
}

.disabled {
  color: gray;
}

```
### 其他
```
$type: monster;
p {
  @if $type == ocean {
    color: blue;
  } @else if $type == matador {
    color: red;
  } @else if $type == monster {
    color: green;
  } @else {
    color: black;
  }
}
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}

```

