title: Symfony2添加并更新vender库
date: 2014-07-17 12:44:12
tags: [Symfony2, vender, php]
categories: Symfony2
---
在Symfony2中有一种简单的方法添加和更新vender库。

###1. 修改*composer.json*文件
添加代码到*composer.json*文件的*require*区块中，以在更新vender库时成功识别要添加的Bundle，这里以添加*DoctrineFixturesBundle*为例。
```json
// composer.json
// ...
    "require": {
        // ...
        "doctrine/doctrine-fixtures-bundle": "dev-master",
        "doctrine/data-fixtures": "dev-master"
    },

// ...
```

###2. 更新vender库
```
composer update
```
<!--more-->

###3. 在*app/AppKernel.php*中注册
在*app/AppKernel.php*文件中注册新添加的Bundle，注册之后才能成功使用。
```phpa
// app/AppKernel.php
// ...

public function registerBundles()
{
    $bundles = array(
        // ...
        new Doctrine\Bundle\FixturesBundle\DoctrineFixturesBundle()
    );

    // ...
}
```

