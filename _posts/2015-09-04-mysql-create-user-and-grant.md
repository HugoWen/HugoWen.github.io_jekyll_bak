---
layout: post
title: mysql创建用户并授权
date: 2015-09-04 08:50
tags: [mysql, privileges]
categories: [mysql]
published: true
---


MySQL中创建用户并授权的命令行操作：

## 1. 创建用户

- 登录mysql

``` 
	mysql -u root - p;
	输入密码
```

- 创建用户

```
	CREATE USER 'user_name'@'localhost' IDENTIFIED BY 'user_pass';
```

这里为本地`localhost`创建了一个名为 `user_name`, 密码是 `user_pass` 的用户。


## 2. 为用户授权

- 为用户授予数据库相关操作权限。

```
	GRANT all privileges ON database_name.table_name TO 'user_name'@'localhost' IDENTIFIED BY 'user_pass';
```

给创建的用户添加名为`database_name`的数据库中的`table_name`表的所有操作权限（`all privileges`）。

> 为所有数据库和表添加权限则使用 `*.*` 。  
> 添加一定的权限可将`all privileges`替换为`select`、`update`、`delete`等权限。


- 更新数据库权限表

```
	flush privileges;
```