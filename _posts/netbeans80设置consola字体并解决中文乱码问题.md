title: Netbeans8.0设置Consola字体并解决中文乱码问题
date: 2014-05-03 20:17:44
tags: [Netbeans,Consola,中文乱码,字体]
categories: php
---
在Netbeans8.0上开发php，设置字体为Consola后，发现中文显示是乱码的，经过修改jre的配置文件成功解决了这个问题。

进入jdk安装目录下 **/jre/lib** 文件夹，找到 **fontconfig.properties.src** ，拷贝为 **fontconfig.properties** ，修改此文件。

*找到：*

```
sequence.monospaced.GBK=chinese-ms936,alphabetic,dingbats,symbol,chinese-ms936-extb
monospaced.plain.alphabetic=Courier New
monospaced.bold.alphabetic=Courier New Bold
monospaced.bolditalic.alphabetic=Courier New Italic
monospaced.bolditalic.alphabetic=Courier New Bold Italic
```

*修改为：*
<!--more-->
```
sequence.monospaced.GBK=alphabetic,chinese-ms936,dingbats,symbol,chinese-ms936-extb
monospaced.plain.alphabetic=Consolas
monospaced.bold.alphabetic=Consolas Bold
monospaced.bolditalic.alphabetic=Consolas Italic
monospaced.bolditalic.alphabetic=Consolas Bold Italic
```

*在末尾添加consola字体定义：*

```
filename.Consolas=CONSOLA.TTF
filename.Consolas_Bold=CONSOLAB.TTF
filename.Consolas_Italic=CONSOLAI.TTF
filename.Consolas_Bold_Italic=CONSOLAZ.TTF
```

在Netbeans中进行配置

*Netbeans->工具->选项->字体和颜色*  
字体设置为 **Monospaced** 。

设置成功。其他字体的设置将Consola改为其他字体即可。