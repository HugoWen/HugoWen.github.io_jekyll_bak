---
layout: post
title: Symfony2基本操作命令记录
description: Symfony2基本操作命令记录
date: 2014-07-16 16:16:32
tags: [php,symfony2,doctrine,composer]
categories: [Symfony2]
published: true
---
记录Symfony2的基本操作配置命令。

1.安装composer

```Bash
curl -s https://getcomposer.org/installer | php
php composer.phar install
```

2.配置vender

在根目录下使用composer命令

```Bash
composer install
```

3.更新vender库

```Bash
composer update
```

4.配置css、javascript等静态文件

```Bash
php app/console assets:install
```
<!--more-->
5.生成项目bundle

```Bash
php app/console generate:bundle --namespace=Ibw/JobeetBundle
```

6.执行上面生成bundle命令之后需要根据提示进行简单配置：

```Bash
Bundle name [IbwJobeetBundle]: IbwJobeetBundle
Target directory [/var/www/jobeet/src]: /var/www/jobeet/src
Configuration format (yml, xml, php, or annotation) [yml]: yml
Do you want to generate the whole directory structure [no]? yes
Do you confirm generation [yes]? yes
Confirm automatic update of your Kernel [yes]? yes
Confirm automatic update of the Routing [yes]? yes
```

7.使用Doctrine生成数据库

```Bash
php app/console doctrine:database:create
```

8.使用Doctrien创建实体类

根据创建的存放字段域的“元数据”文件，使用Doctrine生成对应的实体类和对应的Repository类

```Bash
php app/console doctrine:generate:entities IbwJobeetBundle
```

9.使用Doctrine生成数据表

```Bash
php app/console doctrine:schema:update --force
```

10.使用DoctrineFixtureBundle生成数据表中具体数据

```Bash
php app/console doctrine:fixture:load
```

11.清除Symfony缓存

```Bash
php app/console cache:clear --env=dev
php app/console cache:clear --env=prod
```

12.创建一个新的控制器(Controller)，这个控制器带有CRUD动作(Action)

```Bash
php app/console doctrine:generate:crud --entity=IbwJobeetBundle:Job --route-prefix=ibw_job --with-write --format=yml
```

13.查看所有route路由信息

```Bash
php app/console router:debug

php app/console router:debug job_show
```

