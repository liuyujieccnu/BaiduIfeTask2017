## 任务20

### 任务目的

* 实践JavaScript数组、字符串相关操作

### 任务描述

* 基于任务18进行升级
* 将新元素输入框从input改为textarea
* 允许一次批量输入多个内容，格式可以为数字、中文、英文等，可以通过用回车，逗号（全角半角均可），顿号，空格（全角半角、Tab等均可）等符号作为不同内容的间隔
* 增加一个查询文本输入框，和一个查询按钮，当点击查询时，将查询词在各个元素内容中做模糊匹配，将匹配到的内容进行特殊标识，如文字颜色等。举例，内容中有abcd，查询词为ab或bc，则该内容需要标识

### 任务注意事项

* 实现简单功能的同时，请仔细学习JavaScript基本语法、事件、DOM相关的知识
* 请注意代码风格的整齐、优雅
* 代码中含有必要的注释
* 建议不使用任何第三方库、框架

### 任务协作建议

* 团队集中讨论，明确题目要求，保证队伍各自对题目要求认知一致
* 各自完成任务实践
* 交叉互相Review其他人的代码，建议每个人至少看一个同组队友的代码
* 相互讨论，最后合成一份组内最佳代码进行提交

### 在线学习参考资料

* JavaScript入门篇
* MDN JavaScript
* 归并排序算法可视化
* 15种排序算法可视化展示

### 任务完成总结

* [关于正则表达式](http://www.jb51.net/tools/zhengze.htm)
* [JavaScript RegExp 对象](http://www.w3school.com.cn/jsref/jsref_obj_regexp.asp)
> 熟练掌握正则表达式的匹配规则，可以利用在线工具协助

* [关于flex布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
> 记住一些常用的容器和项目属性

* [JavaScript concat() 方法](http://www.w3school.com.cn/jsref/jsref_concat_array.asp)
* [JavaScript replace() 方法](http://www.w3school.com.cn/jsref/jsref_replace.asp)

### 代码Review

* [参考代码一](https://github.com/Five-African/task-stage2-final-submission/blob/gh-pages/task20/index.html)
* [javascript 中关于call方法的详解](http://www.cnblogs.com/f-dream/p/4950918.html)

```JavaScript
function deal(func, succ) {
      var args = [].slice.call(arguments, 2);
      return function(e) {
        try {
          var arg = args.map(function(item) {
            return typeof item === "function" ? item(e) : item;
          });
          var result;
          if (Object.prototype.toString.call(arg[0]) === '[object Array]') {
            arg[0].forEach(function(d) {
              result = func.apply(data, [d].concat(arg.slice(1)));
            });
          }
          else {
            result = func.apply(data, arg)
          }
          if (succ != null) {
            succ(result);
          }
        } catch (ex) {
          if (ex.message != '')
            alert(ex.message);
        }
        render();
      };
    }
```

