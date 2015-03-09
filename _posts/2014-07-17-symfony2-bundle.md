---
layout: post
title: Symfony2配置Bundle路由信息
description: Symfony2配置Bundle路由信息
date: 2014-07-17 17:48:28
tags: [Symfony2, bundle, 路由]
categories: [Symfony2]
published: true
---
Symfony2有一套很规范的路由配置方式。在创建新的**Bundle**的时候，通过从Symfony主配置文件一步步地引用来实现路由到当前Bundle的路径信息。

下面记录下进行路由信息的简单配置。

###1. 修改*/app/config/routing.yml*文件
这是整个系统的主路由信息配置文件，修改**resouce**信息，引入到Bundle下的**routing.yml**文件并在Bundle下的routing文件进行配置，这样在逻辑上更加清晰直观。
```
ibw_jobeet:
    resource: "@IbwJobeetBundle/Resources/config/routing.yml"
    prefix:   /
```

> 在此要注意一个问题，就是若是有*type:*,若与resource中的文件类型不匹配，则删除此type或者进行对应的修改。

###2. 修改Bundle下的routing.yml文件
一般来说，在这里即可引入实际的Bundle访问路由地址，但也可以继续引入Bundle子目录routing文件信息。在此，则直接进行此文件实际信息配置。
<!--more-->
```
job:
    path:     /
    defaults: { _controller: "IbwJobeetBundle:Job:index" }

job_show:
    path:     /{id}/show
    defaults: { _controller: "IbwJobeetBundle:Job:show" }

job_new:
    path:     /new
    defaults: { _controller: "IbwJobeetBundle:Job:new" }

job_create:
    path:     /create
    defaults: { _controller: "IbwJobeetBundle:Job:create" }
    requirements: { _method: post }

job_edit:
    path:     /{id}/edit
    defaults: { _controller: "IbwJobeetBundle:Job:edit" }

job_update:
    path:     /{id}/update
    defaults: { _controller: "IbwJobeetBundle:Job:update" }
    requirements: { _method: post|put }

job_delete:
    path:     /{id}/delete
    defaults: { _controller: "IbwJobeetBundle:Job:delete" }
    requirements: { _method: post|delete }
```

