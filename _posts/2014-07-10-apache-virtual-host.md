---
layout: post
title: Apache配置虚拟主机
description: Apache配置虚拟主机
date: 2014-07-10 07:45:33
tags: [Apache,虚拟主机,php]
categories: [服务器]
published: true
---
在Apache环境下配置虚拟主机，即在本机浏览器中输入地址即可直接访问本机目录文件。

##1.编辑*httpd.conf*
文件在Apache的安装目录下的*conf*文件夹中，搜索*Virtual hosts*,取消注释，即载入虚拟主机的配置文件。

```
# Virtual hosts
Include conf/extra/httpd-vhosts.conf  #去掉该行注释
```

##2.编辑*httpd-vhosts.conf*
文件在Apache安装目录的*conf/extra*文件夹中，加入如下代码：

```ApacheConf
# 配置虚拟主机  
<VirtualHost 127.0.0.2:80>  
    #设置访问本机地址  
    DocumentRoot E:/xampp/htdocs/kudong/web 
    ServerName kudong.com  
    #配置缺省页面  
    DirectoryIndex index.shtml index.html index.htm index.php  
    <Directory E:/xampp/htdocs/kudong/web >  
        #如果没有默认页面的话，是否显示列表  
        #Options Indexes FollowSymLinks 表示允许显示目录列表  
        Options FollowSymLinks  
        #是否允许Rewrite  
        AllowOverride all  
        #设置访问权限  
        Order allow,deny  
        Allow from all  
    </Directory>  
</VirtualHost>  
```

##3.编辑*hosts*文件
文件路径为：*C:\WINDOWS\system32\drivers\etc\hosts*，加入代码：

```ApacheConf
127.0.0.1    kudong.com
```

**重启Apache服务**，完成虚拟主机配置。

----------
*参考文章：*  
[http://blog.csdn.net/liruxing1715/article/details/7864991](http://blog.csdn.net/liruxing1715/article/details/7864991)