BFC:块级格式化上下文，处于BFC状态下的元素是一个隔绝的容器，内部元素的布局不会影响外部元素
触发BFC的条件：
1、根元素（html）
2、position值为absoute或fixed的元素
3、overflow值不为visible或clip的块元素
4、display只为inline-block的行内元素
5、弹性元素，即display值为flex或者inline-flex
6、display值为flow-root的元素
7、浮动元素（float的值不为none）
8、display值为grid的元素
BFC可以解决以下几个问题：
1、包含内部浮动。（让周围的内容和浮动内容等高。）
2、排除外部浮动。（可以利用display：flow-root和浮动实现双列布局）
3、阻止外边距重叠。
    有三种情况会导致外边距重叠：a、空的块级元素 b、同一层相邻的两个块级元素 c、没有内容将父元素和后代元素分开。

### 清除浮动
    为什么要清除浮动？
    答：为了解决子元素浮动导致父元素高度塌陷的问题。
    清除浮动的方法：
    1、添加新元素：
    <div class="parent">
        <div class="child"></div>
        <div style="clear: both"></div>
    </div> 
    2、使用伪元素
    .parent::after{
        content: "";
        display: block;
        height: 0;
        clear:both;
    }
    3、触发父元素 BFC


