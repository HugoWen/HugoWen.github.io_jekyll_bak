---
layout: post
title: Excel科学计数法转换文本
description: Excel科学计数法转换文本
date: 2014-05-05 16:26:51
tags: [csv,excel,科学计数法,文本转换]
categories: [软件技术]
published: true
---
在Excel表格中处理csv格式通讯录，往往会遇到一个问题，就是电话号码超过一定位数后就会转换成科学计数法，这样再进行其他导出的时候就会无法正确显示，要么丢失精度，要么直接显示成科学计数法的形式。

摸索半天，找到了一个完美的解决办法。选中需要转换的column，点击*数据->分列*，选择分隔符号，不选中任何符号，最后**列数据类型**选择文本。

![第一步](http://ww3.sinaimg.cn/large/a15ae2e5gw1eg3ih9ffyuj20l702raak.jpg)

![第二步](http://ww1.sinaimg.cn/large/a15ae2e5gw1eg3ik6bu7aj20a2022t8v.jpg)

![第三步](http://ww1.sinaimg.cn/large/a15ae2e5gw1eg3iljxoa3j20dz01t0ss.jpg)
<!--more-->
![第四步](http://ww3.sinaimg.cn/large/a15ae2e5gw1eg3imnryy5j205o02x0so.jpg)

OK，成功转换。