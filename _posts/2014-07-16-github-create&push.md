---
layout: post
title: Github创建分支与提交代码
description: Github创建分支与提交代码
date: 2014-07-16 12:20:57
tags: [github,分支,git]
categories: [git,GitHub]
published: true
---
#创建项目分支
在已经存在的项目中建立分支，从而为项目贡献自己的代码或者作为一个新的项目的开始。记录下创建分支的简单步骤以及基本的提交代码到Github的命令。
##1. 选择repository创建分支
在repository主页上点击*fork*按钮。

![](../../../../img/1406171234.jpg)

##2. Clone分支到本地

```Bash
git clone https://github.com/username/Spoon-Knife.git
```

##3. 配置本地库与原始库的关联
由于克隆后的本地库的只有一个与自己的GitHub上的分支关联的名为origin的远程，所以要提交自己的更新到原始库，必须配置与原始库https://github.com/octocat/Spoon-Knife的关联，名为upstream

执行以下命令：

```Bash
cd Spoon-Knife
git remote add upstream https://github.com/octocat/Spoon-Knife.git	#添加名为upstream的原始库关联
git fetch upstream	#从原始库抓取更新
```

#提交代码
*提交更新代码到项目*

```Bash
git commit -a -m 'Update README'
git push origin master
git fetch upstream
```

*添加一个新的文件到项目*

```Bash
git add 文件名 
git commit -a -m 'Add new doc'
git push origin master
git fetch upstream
```

#提交项目分支
将自己修改的项目分支提交到原项目中，点击repository页右边栏**Pull Request**,进入页面填写标题和评论，然后点发送，等待原始库admin审核，审核成功后，即merge到原始代码库，完成项目代码提交。
![](../../../../img/1406171348.jpg)