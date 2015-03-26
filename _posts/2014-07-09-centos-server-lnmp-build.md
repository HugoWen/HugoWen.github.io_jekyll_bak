---
layout: post
title: CentOS服务器搭建LNMP环境
description: CentOS服务器搭建LNMP环境
date: 2014-07-09 22:03:47
tags: [linux,服务器,php,nginx,lnmp,centos]
categories: [服务器,linux]
published: true
---
记录CentOS服务器搭建LNMP(linux+nginx+mysql+php)的步骤。

##1.配置防火墙

开启80端口、3306端口

```
vim /etc/sysconfig/iptables
```

在默认的22端口规则下添加：
```
-A INPUT -m state --state NEW -m tcp -p tcp --dport 80 -j ACCEPT #允许80端口通过防火墙
-A INPUT -m state --state NEW -m tcp -p tcp --dport 3306 -j ACCEPT #允许3306端口通过防火墙
```

重启防火墙
```
/etc/init.d/iptables restart
```
<!--more-->

##2.关闭SELINUX
```
vi /etc/selinux/config
```

```
#SELINUX=enforcing #注释掉
#SELINUXTYPE=targeted #注释掉
SELINUX=disabled #增加
```

重启系统
```
shutdown -r now
```

##3.安装第三方yum源
```
yum install wget
wget http://www.atomicorp.com/installers/atomic
sh ./atomic
yum check-update
```

##4.安装nginx
```
yum install nginx
```

设置开机启动
```
chkconfig nginx on
```

启动nginx
```
service nginx start
```

##5.安装mysql
```
yum install mysql mysql-server
```

启动mysql
```
/etc/init.d/mysqld start
```

设置开机启动
```
chkconfig mysqld on
```

为root账户设置密码
```
mysql_secure_installation
```

设置完成后，重启mysql
```
/etc/init.d/mysqld restart
```

##6.安装php5
```
yum install php php-fpm
```

安装php组件，使php5支持mysql
```
yum install php-mysql php-gd libjpeg* php-imap php-ldap php-odbc php-pear php-xml php-xmlrpc php-mbstring php-mcrypt php-bcmath php-mhash libmcrypt
```

设置php-fpm开机启动
```
chkconfig php-fpm on
```

启动php-fpm
```
/etc/init.d/php-fpm start
```

##7.配置nginx支持php
编辑nginx.conf
```
vim /etc/nginx/nginx.conf
```

```
user nginx nginx	#修改nginx账户为：nginx组的nginx用户
```

编辑default.conf
```
vim /etc/nginx/conf.d/default.conf
```

```
index index.php index.html index.htm;

# pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
#
location ~ \.php$ {
root html;
fastcgi_pass 127.0.0.1:9000;
fastcgi_index index.php;
fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
include fastcgi_params;
}
#取消FastCGI server部分location的注释,并要注意fastcgi_param行的参数,改为$document_root$fastcgi_script_name,或者使用绝对路径
```

重启nginx
```
service nginx restart
```

##8.php配置
```
vim /etc/php.ini
```

```
date.timezone = PRC	   #把前面的分号去掉，改为date.timezone = PRC
expose_php = Off 		 #禁止显示php版本的信息
magic_quotes_gpc = On 	#打开magic_quotes_gpc来防止SQL注入
short_open_tag = ON 	  #在229行支持php短标签
open_basedir = .:/tmp/    #设置表示允许访问当前目录(即PHP脚本文件所在之目录)和/tmp/目录,可以防止php木马跨站
```

##9.php-fpm配置
```
vim /etc/php-fpm.d/www.conf
```

```
user = nginx #修改用户为nginx
group = nginx #修改组为nginx
```

**至此，CentOS服务器搭建LNMP环境成功！**

----------
*参考文章：*  
[http://www.jb51.net/article/37986.htm](http://www.jb51.net/article/37986.htm)