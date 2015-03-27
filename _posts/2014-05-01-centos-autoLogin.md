---
layout: post
title: CentOS自动登录
description: CentOS自动登录
date: 2014-05-01 15:36:42
tags: [centos, 自动登录]
categories: [linux]
published: true
---
最近做的一个项目，需要去掉CentOS的登录界面直接进入系统，简单的配置即可解决。

*修改文件：*  

```Bash
vim /etc/gdm/custom.conf
```

*加入内容：* 

```Bash
[daemon]
AutomaticLogin=自动登陆的用户名
AutomaticLoginEnable=True
```