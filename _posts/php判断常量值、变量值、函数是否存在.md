title: php判断常量值、变量值、函数是否存在
date: 2014-07-16 23:22:21
tags: [php, 常量, 变量, 函数, 存在]
categories: php
---
1.常量值是否存在

检测常量值是否存在使用defined()函数，不存在则返回false。
```
<?php 
/* 判断常量是否存在*/ 
if (defined('MYCONSTANT')) { 
	echo MYCONSTANT; 
} 
```

2.变量值是否存在

检测变量值是否存在使用isset()函数，不存在或存在为null，皆返回false。
```
<?php 
/* 判断变量是否存在*/ 
if ((isset($var_name)) { 
	echo $var_name;
} 
```

3.函数是否存在

检测函数是否存在使用function_exists()函数，不存在则返回false。
```
<?php
/* 判断函数是否存在*/ 
if (function_exists('fun_name')) {
	fun_name();
}
```
