---
layout: post
title: js浏览器添加到收藏
date: 2015-03-25 10:37
tags: [javascript]
categories: [javascript]
published: true
---


```
	<div onclick="AddFavorite()">收藏本站</div>
	<script type="text/javascript">
		function AddFavorite(){
			alert("已点");
	    	try{
	        	window.external.addFavorite('kudong.im', 'sTitle');
	    	}catch (e){
	        	try{
	            	window.sidebar.addPanel(sTitle, sURL, "");
	        	}catch (e){
	            	alert("加入收藏失败，请使用Ctrl+D进行添加");
	        	}
	    	}
		}
	</script>
```
