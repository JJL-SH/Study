# BEM

BEM是由Yandex公司推出的一套CSS命名规范，官方是这么描述它的：

`BEM是一种命名方法，能够帮助你在前端开发中实现可复用的组件和代码共享。`

BEM的命名规矩很容易记：block-name__element-name--modifier-name，也就是模块名 + 元素名 + 修饰器名。

## BEM解决的问题
css的样式应用是全局性的，没有作用域可言。

以往开发组件，我们都用“重名概率小”或者干脆起个“当时认为是独一无二的名字”来保证样式不冲突，这是不可靠的。

理想的状态下，我们开发一套组件的过程中，我们应该可以随意的为其中元素进行命名，而不必担心它是否与组件以外的样式发生冲突。

BEM解决这一问题的思路在于，由于项目开发中，每个组件都是唯一无二的，其名字也是独一无二的，组件内部元素的名字都加上组件名，并用元素的名字作为选择器，自然组件内的样式就不会与组件外的样式冲突了。

这是通过组件名的唯一性来保证选择器的唯一性，从而保证样式不会污染到组件外。

这也可以看作是一种“硬性约束”，因为一般来说，我们的组件会放置在同一目录下，那么操作系统中，同一目录下文件名必须唯一，这一点也就确保了组件之间不会冲突。

```
<div class="page-btn">
  <button type="button" class="page-btn__prev">上一页</button>
  <!-- ... -->
  <button type="button" class="page-btn__next">下一页</button>
</div>
```

## BEM修饰器
根据不同的场景，组件可能会表现出不同的样式。比如分页组件在pc端具有具体的页码以及上下页按钮，但在移动端，因空间有限，可能只保留上下页按钮。一个下拉组件的打开与关闭...
```
.block__element {
  display: none;
}

.block__element--active {
  display: block;
}

.block__element--min {
  font-size: 12px;
}
```

## 在Sass中使用BEM
### 灵活的&__
通过使用一组便利的选择器和运算符，我们可以使得BEM出类拔萃。其中最重要的是新加入Sass中的&选择器.在声明内&选择器会直接引用他的父选择器。当嵌套使用'&'时，它会直接抓取父选择器的类名。因为我们的类名遵循真正可靠的模式，所以我们可以把它作为我们的优势来打造真正可读的代码。
```
.aboutSection {
  &__wrapper {
    max-width 108rem;
    padding: 3rem 0;
  }
  &__headingContainer {
    background-color: steelblue;
  }
  &__header {
    font-size: 2.4rem;
    font-weight: 700;
  }
  &__subHeader {
    font-size: 1.8rem;
    color: green;
  }
}
```
以上这段代码就是一个利用&选择器的BEM创建的Sass模块，这个模块看上去像是嵌套但并不会带来嵌套所造成的权重差异等问题。这将有效帮助你避免CSS文件中组件样式的冲突。同时采用Sass的嵌套选择器也使我们的代码更加直观可读。
### 强大的@extend
我们可以进一步使用@extend来改进我们的BEM。BEM允许我们在类的最后添加一个修饰符，当以纯CSS编写样式时，就需要你给同一个元素两个类的标记，比如：
```
<nav class="nav">
  <ul class="nav__container">
    <li class="nav__item"></li>
    <li class="nav__item"></li>
    <li class="nav__item"></li>
    <li class="nav__item nav__item--active"></li>
  </ul>
</nav>
.nav {
  background-color: steelblue;
  &__container {
    display: flex;
    justify-content: space-between;
  }
  &__item {
    color: white;
    &--active {
      @extend .nav__item;
      border-bottom: 1px solid red;
    }
  }
}
```
@extend指令能让我们确保所选择的项目也具有nav_item类中的所有样式，从而清除HTML中的nav_item标记。使用这种方法，我们能够随心所欲地改变活动状态的颜色，而无需重写我们之前创建的样式。在我看来，一个元素应该只有一个类，我们应该活用Sass来达到我们想要的结果。

