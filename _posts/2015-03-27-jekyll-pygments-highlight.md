---
layout: post
title: jekyll使用pygments设置代码高亮
date: 2015-03-27 18:17
tags: [jekyll, pygments, code, highlight]
categories: [jekyll]
published: true
---

jekyll原生支持pygments语法高亮，但需要安装并稍作配置。

###安装pygments

首先需要系统配置好python环境，这里以mac为例，使用`pip`安装pygments。

```bash
sudo pip install pygments
```

安装成功后，可以通过pygmentize进行样式的生成。  
首先可以先查看一下pygments支持的样式：

```python
>>> from pygments.styles import STYLE_MAP
>>> STYLE_MAP.keys()
['monokai', 'manni', 'rrt', 'perldoc', 'borland', 'colorful', 'default', 'murphy', 'vs', 'trac', 'tango', 'fruity', 'autumn', 'bw', 'emacs', 'vim', 'pastie', 'friendly', 'native']
>>>
```

其中对应的样式可以在[pygments demo](http://pygments.org/demo)页面下一一查看。  
然后使用`pygmentsize`生成对应样式的css文件：

```bash
pygmentize -S monokai -f html > pygments.css
```

其中，*monokai*是样式名，*html*是formatter，*pygments*是生成的css文件。

最后进行jekyll的配置并导入刚刚生成的css文件。  
配置*_config.yml*

```yaml
markdown:         redcarpet
redcarpet:
    extensions: ["fenced_code_blocks", "tables", "highlight", "strikethrough"]
highlighter:      pygments
```

然后就可以在代码中使用高亮了。  