---
layout: post
title: jquery sort 拖动排序
description: 使用jquery.sortable.js拖动排序html内容
date: 2015-03-12 10:59:27
tags: [jQuery, sort, php]
categories: [jQuery, php]
published: true
---

使用jquery.sortable.js拖动排序html内容,并保存排序顺序到数据库中。

*js代码*

```
<script>
    $('.data_big').sortable().bind('sortupdate', function(e, ui) {
        var start = ui.oldindex;
        var end = ui.item.index();
        $.post(
            "{{ path('admin_ajax_plaza') }}", {
                big_start: ui.oldindex,
               big_end: ui.item.index()
            },function(ret) {
                if(ret.error > 0){
                    alert(ret.msg);
                }else{
                    alert("拖动排序调整成功！")
                });
            }
        });
    });
</script>
```

将拖动排序的首末两个位置通过ajax传值到php后端，然后在后端进行数据排序处理并进行保存等操作。


*php代码*

```
public function jquery_sort($start, $end, $data = []){
    if($start <= $end){
        $temp_start = $data[$start];
        foreach($data as $k=>$v){
            if($k >= $start && $k < $end){
                $data[$k] = $data[$k+1];
            }elseif($k == $end){
                $data[$end] = $temp_start;
            }else{
                continue;
            }
        }
    }else{
        $temp_start = $data[$start];
        for($i = $start; $i > $end; $i --){
            $data[$i] = $data[$i - 1];
        }
        $data[$end] = $temp_start;
    }
    return $data;
}
```

排序传值的时候一定要注意，因为ajax传过去的排序值是顺序值，而数组的键名可能是乱序的数组，所以为了避免排序出错，使用**array_values**去除原有键名，然后再进行排序。