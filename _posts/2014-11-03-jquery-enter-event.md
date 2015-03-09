---
layout: post
title: jQuery 回车事件处理
description: 全局监测键盘回车事件，触发事件处理函数。
date: site.time
published: true
tags: jQuery 键盘事件 回车
categories: [jQuery]
---

jQuery处理键盘回车之后的触发事件。

```
$(function(){
    document.onkeydown = function(e){
        var ev = document.all ? window.event : e;
        if(ev.keyCode == 13) {
            $('#del_btn').unbind();
        }
    };
}
```

其中
``` $('#del_btn').unbind(); ```
是当按下回车键时，触发解除*id*为*del_btn*的元素的**所有**绑定事件。