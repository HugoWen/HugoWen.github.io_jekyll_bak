---
layout: post
title: CentOS服务器使用LNMP安装包搭建环境
description: CentOS服务器使用LNMP安装包搭建环境
date: 2014-07-11 15:09:21
published: true
tags: [服务器, CentOS, LNMP, nginx]
categories: [服务器, linux]
published: true
---
之前做过手动配置LNMP环境，感觉十分复杂麻烦，在这里使用LNMP安装包来进行环境搭建。

##1.执行screen命令
执行screen命令的目的是当使用远程工具操作服务器时，很可能会出现网络断线的情况，这样就会造成lnmp安装中断，有可能前功尽弃。为了防止这种现象，在安装lnmp前，先执行screen命令来进行解决。

```Bash
yum install screen
screen -S lnmp
```
##2.下载并安装LNMP安装包

```Bash
wget -c http://soft.vpser.net/lnmp/lnmp1.1-full.tar.gz && tar zxf lnmp1.1-full.tar.gz && cd lnmp1.1-full && ./centos.sh
```

中途需要一些基本设置账户，按照操作一步步来就可成功安装。安装成功后基本的配置都已经搞定，十分方便，省时省力！

----------
*参考文章：*
[http://lnmp.org/install.html](http://lnmp.org/install.html)
