TabIndex属性Tabindex="-1"与Tabindex="0"、任意数字
html中的tabIndex属性可以设置键盘中的TAB键在控件中的移动顺序,即焦点的顺序。  
把控件的tabIndex属性设成1到32767的一个值，就可以把这个控件加入到TAB键的序列中。  
这样，当浏览者使用TAB键在网页控件中移动时，将首先移动到具有最小tabIndex属性值的控件上，
最后在具有最大tabIndex属性值的控件上结束移动。   
如果有两个控件的tabIndex属性相同，则以控件在html代码中出现的顺序为准。  
默认的tabIndex属性为0，将排列在在所有指定tabIndex的控件之后。   
而若把tabIndex属性设为一个负值（如tabIndex="-1"），那么这个链接将被排除在TAB键的序列之外。
如果最初选择了[Tab]键，带这个输入栏的网页会将光标移动到firstName栏。

在给tabIndex特性赋值时，要留意几个问题。下面是几个赋值规则：  
带0值tabIndex的元素根据源代码（或默认页面行为）进行排序。   
大于0的tabIndex值设定其tab顺序。所有带正tabIndex值的元素出现在所有带0 tabIndex值的元素之前。  
如果你犯了一个错误，把同一个tabIndex赋予给多个元素，像其它元素一样，它们会以一个0值tabIndex进行处理。  
将tabIndex赋值为-1，则在使用[Tab]键时，此元素被忽略。
注意：如果使用-1值时，onfocus与onblur事件仍被启动。   tabIndex的值可为0至32767之间的任意数字


// You can't focus on a hidden element.
// You can use opacity: 0 instead of display: none and you will be able to focus on the element.
/**
 * If given a value of "-1", the element can't be tabbed to but focus can be given to the element programmatically (using element.focus()).
 * If given a value of 0, the element can be focused via the keyboard and falls into the tabbing flow of the document.
 * Values greater than 0 create a priority level with 1 being the most important.
*/


