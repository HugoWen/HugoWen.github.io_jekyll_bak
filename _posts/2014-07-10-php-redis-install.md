---
layout: post
title: Windows下Redis的安装和在php下的扩展使用
description: Windows下Redis的安装和在php下的扩展使用
date: 2014-07-10 07:49:29
tags: [redis,php]
categories: [php,redis]
published: true
---
##Windows下Redis的安装和开启服务
下载并安装Redis对应的Windows版本，下载地址：[https://github.com/mythz/redis-windows](https://github.com/mythz/redis-windows)

根据系统选择需要的文件并解压，启动redis服务。  
进入redis目录，开启服务
```
redis-server.exe redis.conf
```

在需要redis服务时，此命令窗口要保持开启，关闭时redis服务也会随之关闭。

开启另一个命令行窗口，进入redis目录
```
redis-cli.exe -h 192.168.1.105(自己的ip地址) -p 6379
```

##php下配置Redis扩展使用
下载安装php_redis.dll和php_igbinary.dll文件。  
下面是对应php5.5的下载链接，根据自己的环境进行选择下载：
<!--more-->

php_redis-5.5-vc11-ts-x86-00233a.zip [http://d-h.st/4A5](http://d-h.st/4A5)  
php_igbinary-5.5-vc11-ts-x86-c35d48.zip [http://d-h.st/QGH](http://d-h.st/QGH)  

php_redis-5.5-vc11-nts-x86-00233a.zip [http://d-h.st/uGS](http://d-h.st/uGS)  
php_igbinary-5.5-vc11-nts-x86-c35d48.zip [http://d-h.st/bei](http://d-h.st/bei)

php_redis-5.5-vc11-ts-x64-00233a.zip [http://d-h.st/1tO](http://d-h.st/1tO)  
php_igbinary-5.5-vc11-ts-x64-c35d48.zip [http://d-h.st/rYb](http://d-h.st/rYb)  

php_redis-5.5-vc11-nts-x64-00233a.zip [http://d-h.st/N0d](http://d-h.st/N0d)  
php_igbinary-5.5-vc11-nts-x64-c35d48.zip [http://d-h.st/c1a](http://d-h.st/c1a)

将php_igbinary.dll和php_redis.dll放入php的ext目录下，然后修改php.ini，加入这两个扩展，顺序一定要按照如下：
```
extension=php_igbinary.dll
extension=php_redis.dll
```

重启Apache服务，查看*phpinfo()*，出现redis即配置成功。

附php测试代码
```
$redis = new Redis();  
$redis->connect("192.168.138.2","6379");  //php客户端设置的ip及端口  
//存储一个 值  
$redis->set("say","Hello World");  
echo $redis->get("say");     //应输出Hello World  
  
//存储多个值  
$array = array('first_key'=>'first_val',  
          'second_key'=>'second_val',  
          'third_key'=>'third_val');  
$array_get = array('first_key','second_key','third_key');  
$redis->mset($array);  
var_dump($redis->mget($array_get));  
```

----------
*参考文章：*  
[http://os.51cto.com/art/201403/431103.htm](http://os.51cto.com/art/201403/431103.htm)
[http://www.iteye.com/topic/1132714](http://www.iteye.com/topic/1132714)
[http://alfred-long.iteye.com/blog/1684545](http://alfred-long.iteye.com/blog/1684545)