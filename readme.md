## 百度前度技术学院2017年

很遗憾自己在2016年暑假并未完成百度前端技术学院的所有任务，在完成第一个阶段的第六个任务之后就没有再坚持下去。今年暑假决定重新学习一些前端技术，在本文档中描述一些自己学习中遇到的问题，以及一些笔记。在今年的学习中找了一个小伙伴和自己一起学习，可以共同review自己写的代码。

-------
## 2017-7-6

### 学习总结

今天可以说是submit任务最快的一天吧，当然并不是自己技术提高的有多快，而且这是今天的第一次提交而已，长路漫漫任务还有很多呢，task5是在task2的基础上直接修改来的，我目前使用的第一种方法只能说是大体上符合要求，还要多多去review别人的代码。还庆幸这每个task是不间断每天完成的，写代码就想做人一样，坚持，谦虚，多向别人学习，保持耐心。

紧接着完成了任务14，可悲的我居然连冒泡排序法都忘记了，傻。不过还是蛮开心，一个人顺顺利利的将这几行代码写完了，也是蛮开心。赶紧去提交一下，接下来需要review大神们的代码了。

### 学习笔记

预览demo地址添加前缀 http://htmlpreview.github.io/? eg：今天的两个demo。

哈哈，主页page地址[readme](https://liuyujieccnu.github.io/BaiduIfeTask2017/)

[TASK05](http://htmlpreview.github.io/?https://github.com/liuyujieccnu/BaiduIfeTask2017/blob/master/task5/index.html)

[TASK14](http://htmlpreview.github.io/?https://github.com/liuyujieccnu/BaiduIfeTask2017/blob/master/task14/index.html)

[JavaScript sort() 方法](http://www.w3school.com.cn/jsref/jsref_sort.asp)

## 2017-7-5

### 学习总结

今天在继续学习html与css之前，学习一点JavaScript的相关知识，不至于在后面JavaScript学习时会忘掉前面的HTML+CSS的相关知识，在学习的过程中发现了review高手代码的重要性，可以在这个过程中学到很多的知识。另外写代码一定要心无旁骛，不要被一些外在的东西所打扰，专注现在的目标。

### 学习笔记

[Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

[Centering in CSS: A Complete Guide：完整讨论了不同情况下的居中方案，建议自己思考之后再看答案](https://css-tricks.com/centering-css-complete-guide/)

[CSS3 :nth-child() 选择器](http://www.w3school.com.cn/cssref/selector_nth-child.asp)

绝对定位元素需要至少一个祖先元素设置了相对定位（绝对定位），不然元素定位会相对于页面的主体进行定位。

[CSS伪类/伪元素](http://www.w3school.com.cn/css/css_pseudo_elements.asp)

根据上下文，清除浮动更好的方法是clearfix技巧。参见：[定位详解](http://www.w3cplus.com/css/advanced-html-css-lesson2-detailed-css-positioning.html)

```css
.box-set:before,
.box-set:after {
  content: "";
  display: table;
}
.box-set:after {
  clear: both;
}
.box-set {
  *zoom: 1;
}
```

浮动可以用“clear：both”来清除，但是这样并不利于语义化。



window.open函数的参数表

![](http://img.mukewang.com/52e3677900013d6a05020261.jpg)

[JavaScript字符串转换成数字的几种方法](http://blog.csdn.net/yjq8116/article/details/3219993/)

[测试addEventListener与onClick的不同](http://blog.csdn.net/rudy24/article/details/52586257)

[onKeyUp 事件](http://www.w3school.com.cn/jsref/event_onkeyup.asp)

[js响应回车事件](http://jingyan.baidu.com/article/60ccbceb67e22764cbb1976a.html)

检查是否非数值：[JavaScript isNaN() 函数](http://www.w3school.com.cn/jsref/jsref_isNaN.asp)

```javascript
(function() {
	var node_in=document.getElementById("aqi-input");
	var node_btn=document.getElementById("button");
	var node_display=document.getElementById("aqi-display");
	if(node_btn.attachEvent){
		node_btn.attachEvent("onclick",click);//IE Compatibility
	}else{
		node_btn.addEventListener("click",click,false);
	}
	function click(){
		var val=node_in.value.replace( /^(\s|\u00A0)+|(\s|\u00A0)+$/g, "" );//strip blank
		if(val.length>0){
			if(node_display.textContent != null){
				node_display.textContent=val;
			}else{
				node_display.innerHTML=val.replace(/[<>]/ig,"");//avoid XSS
			}
		}else{
			alert("Please complete the form!");
		}
	}
})();
```
此代码中replace用与查找和删除任一空白字符

链接：[JavaScript replace() 方法](http://www.w3school.com.cn/jsref/jsref_replace.asp)

[空白引用和空白字符](http://www.cnblogs.com/chemdemo/articles/1902070.html)

[trim对应正则下几种写法的区别](http://blog.csdn.net/yenange/article/details/6888424)

[js控制只允许输入数字](http://www.cnblogs.com/xcxc/p/3603921.html)

## 2017-7-4

### 学习总结

今天完成的是百度前端技术学院任务三，任务三是实现三栏式布局，总的来说不算简单，但是代码量比较小，今天也就得空复习一下单片机。

### 学习笔记

[sticky](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position) 
盒位置根据正常流计算(这称为正常流动中的位置)，然后相对于该元素在流中的 flow root（BFC）和 containing block（最近的块级祖先元素）定位。在所有情况下（即便被定位元素为 table 时），该元素定位均不对后续元素造成影响。当元素 B 被粘性定位时，后续元素的位置仍按照 B 未定位时的位置来确定。position: sticky 对 table 元素的效果与 position: relative 相同。
粘性定位是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。

粘性定位常用于定位字母列表的头部元素。标示 B 部分开始的头部元素在滚动 A 部分时，始终处于 A 的下方。而在开始滚动 B 部分时，B 的头部会固定在屏幕顶部，直到所有 B 的项均完成滚动后，才被 C 的头部替代。

绝对定位脱离文档流，相对于最近的父级元素定位，没有父级元素时间，则相当于根元素定位。

[float](https://developer.mozilla.org/zh-CN/docs/CSS/float)浮动的元素不在正常的文档流中

这个例子中，最简单的清除浮动方式就是给我们想要确保左对齐的新标题元素添加clear属性：
`h2.secondHeading { clear: both; }`
然而这个方法只是在同一块级格式化上下文（block formatting context）中没有其他元素的时候才是有效的。如果我们的 H2 有兄弟元素是向左浮动和向右浮动的边栏，那么使用clear 会导致这个标题元素出现在边栏的下方，这显然不是我们期望的结果。

如果不能使用清除浮动，另一种做法是浮动容器的限制块级格式化上下文。再次列举上面的例子，有三个红色的正方形和一个P元素。我们可以设置P元素的overflow属性值变成hidden 或者auto，因为这样可以让容器元素伸展到能够包含红色正方形，而不是让他们超出块元素的底部。
`p.withRedBoxes { overflow: hidden; height: auto; }`

[实现三栏式布局的主要方法](http://blog.csdn.net/golden_wheat/article/details/61414180)

[清除浮动黑科技完整解读](https://stackoverflow.com/questions/211383/what-methods-of-clearfix-can-i-use)

## 2017-7-3

### 学习总结

今天完成了百度ifetask2的任务，主要是对CSS的一些回顾，加深了对CSS的理解。同时在写css代码时又对昨天的代码结构有了新的反思，发现一些地方应该用div标签分割出来，这样便于样式的编排。写css代码是可以首先用*来设置margin和padding避免默认的影响，这样header，footer就可以轻松的占满窗口了。长度值注意百分比长度值的合理使用。

```css
border-collapse: collapse;/*设置表格的边框被合并为一个单一的边框*/
box-shadow: 2px 2px 3px #838383;/*设置阴影*/
```

### review

time标签语义化time datetime="2008-02-14"

## 2017-7-2

### 学习总结

今天完成了百度前端技术学院的任务一，2017年度的任务一和2016年的任务一是一样的。今年的学习没有观看视频，通关慕课网的教程用了2小时的时间对html的相关知识进行了回顾。对比去年写的代码，今年自己还是有所进步的。今年自己的代码在语义化，分块，风格上要做的更好一些。

### 部分笔记

包含（后代）选择器与子选择器的区别，子选择器（child selector）仅是指它的直接后代，或者你可以理解为作用于子元素的第一代后代。而后代选择器是作用于所有子后代元素。后代选择器通过空格来进行选择，而子选择器是通过“>”进行选择。

标签的权值为1，类选择符的权值为10，ID选择符的权值最高为100。例如下面的代码：
```css
p{color:red;} /*权值为1*/
p span{color:green;} /*权值为1+1=2*/
.warning{color:white;} /*权值为10*/
p span.warning{color:purple;} /*权值为1+1+10=12*/
#footer .note p{color:yellow;} /*权值为100+10+1=111*/
 ```

!important优先级样式是个例外，权值高于用户自己设置的样式。

inline-block 元素特点：1、和其他元素都在一行上；2、元素的高度、宽度、行高以及顶和底边距都可设置。

如果想为元素设置层模型中的绝对定位，需要设置position:absolute(表示绝对定位)，这条语句的作用将元素从文档流中拖出来，然后使用left、right、top、bottom属性相对于其最接近的一个具有定位属性的父包含块进行绝对定位。如果不存在这样的包含块，则相对于body元素，即相对于浏览器窗口。

相对定位完成的过程是首先按static(float)方式生成一个元素(并且元素像层一样浮动了起来)，然后相对于以前的位置移动，移动的方向和幅度由left、right、top、bottom属性确定，偏移前的位置保留不动。（！important：偏移前的元素仍然存在）

fixed：表示固定定位，与absolute定位类型类似，但它的相对移动的坐标是视图（屏幕内的网页窗口）本身。由于视图本身是固定的，它不会随浏览器窗口的滚动条滚动而变化，除非你在屏幕中移动浏览器窗口的屏幕位置，或改变浏览器窗口的显示大小，因此固定定位的元素会始终位于浏览器窗口内视图的某个位置，不会受文档流动影响，这与background-attachment:fixed;属性功能相同。以下代码可以实现相对于浏览器视图向右移动100px，向下移动50px。并且拖动滚动条时位置固定不变。

在缩写时 font-size 与 line-height 中间要加入“/”斜扛。

但当给 font-size 设置单位为 em 时，此时计算的标准以 p 的父元素的 font-size 为基础。

水平居中设置-定宽块状元素-margin

去掉下划线a{text-decoration:none}





