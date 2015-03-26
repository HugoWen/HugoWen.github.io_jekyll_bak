---
layout: post
title: php使用array_flip()去除重复
date: 2015-03-17 18:18
tags: [php, array_flip]
categories: [php]
published: true
---

php通过使用两次*array_flip()*函数进行去除数组中重复元素。

```
//两次反转键值删除重复数组元素
$def_array = array_flip(array_flip($source_array));
```

*array_flip()*函数为反转数组中得键名和键值，第一次使用*array_flip()*将键名键值反转，根据php数组不能存在同名键名，所以会自动剔除掉同名键名的数组值。然后再次使用函数恢复原来的键名和键值，此时已成功删除掉重复键值的数组元素。存在多个重复数组元素值时，保存键名在后边的数组元素。
