---
layout: post
title: Ubuntu配置qt4+opencv环境
description: Ubuntu配置qt4+opencv环境
date: 2014-05-01 16:00:04
tags: [qt4,opencv,ubuntu,linux]
categories: [qt4,linux,opencv]
published: true
---

## **配置系统环境**

*安装g++：*

```
sudo apt-get install g++
sudo apt-get install g++ automake
```

*更新和升级系统：*

```
sudo apt-get update
sudo apt-get upgrade
```
<!--more-->
## **配置qt4环境**

*安装qt4相关：*

`sudo apt-get install libqt4-dev qt4-dev-tools qt4-designer qt4-doc qt4-demos`

*安装qt4 creator：*

下载地址： [http://qt-project.org/downloads/](http://qt-project.org/downloads/)  
下载后是run文件，修改权限并运行，然后图形化界面安装

```
sudo chmod 777 qt-creator-opensource-linux-x86_64-3.0.1.run
```

## **配置opencv环境**

*安装必要的依赖环境：*

```
sudo apt-get install build-essential libgtk2.0-dev libjpeg-dev libtiff4-dev libjasper-dev libopenexr-dev cmake python-dev python-numpy python-tk libtbb-dev libeigen2-dev yasm libfaac-dev libopencore-amrnb-dev libopencore-amrwb-dev libtheora-dev libvorbis-dev libxvidcore-dev libx264-dev libqt4-dev libqt4-opengl-dev sphinx-common texlive-latex-extra libv4l-dev libdc1394-22-dev libavcodec-dev libavformat-dev libswscale-dev
```

*下载、编译、运行opencv2.4.1（不建议2.4.8，我配置2.4.8后出现问题）*

```
wget http://downloads.sourceforge.net/project/opencvlibrary/opencv-unix/2.4.1/OpenCV-2.4.1.tar.bz2
tar jxvf OpenCV-2.4.1.tar.bz2
cd OpenCV-2.4.1
mkdir build
cd build
cmake -D WITH_TBB=ON -D BUILD_NEW_PYTHON_SUPPORT=ON -D WITH_V4L=ON -D INSTALL_C_EXAMPLES=ON -D INSTALL_PYTHON_EXAMPLES=ON -D BUILD_EXAMPLES=ON -D WITH_QT=ON -D WITH_OPENGL=ON ..
make
sudo make install
```

*编辑系统环境变量：*
	
`sudo vim /etc/ld.so.conf.d/opencv.conf`

*添加opencv库所在路径：*

```
/usr/local/lib
sudo ldconfig
sudo vim /etc/bash.bashrc
```

*在末尾添加：*

```
PKG_CONFIG_PATH=$PKG_CONFIG_PATH:/usr/local/lib/pkgconfig  
export PKG_CONFIG_PATH 
```

至此，配置成功。