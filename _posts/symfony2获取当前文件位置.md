title: Symfony2获取当前文件位置
date: 2014-07-17 11:18:41
tags: [Symfony2, path, 文件位置, 绝对路径]
categories: Symfony2
---
由于Symfony2文件结构比较复杂，对于初学者来说对文件位置的获取若是直接写出绝对路径或相对路径比较麻烦且容易出错，但方便的是，Symfony提供了一个*path()*函数，便可以直接获得当前文件的位置。
```
{{ path()}}
```