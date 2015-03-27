---
layout: post
title: php根据url获取图片文件 
date: 2015-03-16 22:55
tags: [php, curl]
categories: [php]
published: true
---

使用curl根据url获取图片文件并保存到本地。

```php
<?php
public function get_pic_by_url($url){
	$curl = curl_init($url);
    $filename = date("Ymdhis").".jpg";
    curl_setopt($curl,CURLOPT_RETURNTRANSFER,1);
    $imageData = curl_exec($curl);    
    curl_close($curl);
    $img = @fopen($filename, 'a');
    fwrite($img, $imageData);
    fclose($img);
    return $filename;
}
```

代码是默认写到根目录下，所以直接通过文件名获取到文件，然后就可以进行之后的图片文件操作了。

