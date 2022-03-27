### 步骤一：安装MongoDB

在终端中输入`mongod --version`查看是否已经安装mongodb，如果电脑中没有mongodb数据库，则需要先安装数据库才可正常打开此项目。安装方法如下：

1. https://www.mongodb.com/download-center/enterprise 直接打开此链接选择对应平台对应版本下载安装包即可。

2. 下载完成后: 

   * 若为windows系统，直接打开安装软件依步骤向下执行到最终安装完成即可

   * 若为mac系统，打开后将解压文件夹放入/usr/local路径下，可直接用终端打开此文件夹

3. 安装完成后，两种系统均需要配置环境变量，具体配置说明如下: [mac](https://www.jianshu.com/p/7241f7c83f4a) [windows](https://blog.csdn.net/XUEER88888888888888/article/details/80036968)

4. 在终端中输入`mongod --version`，若正常能查看版本号即为安装成功并配置完成环境变量。

   

### 步骤二 ： 分别安装上前后端对应的依赖

+ **前端：** 到 meishijie-fe 文件路径处在 cmd 执行命令 ``npm i/yarn`` 
+ **后端：**到 meishijie-back 文件路径处在 cmd 执行命令 ``npm i/yarn`` 

### 步骤三：启动数据库

* cmd 执行命令： ` mongod --dbpath mockdata的路径地址 ` 不要关闭命令行

### 步骤四： 导入数据

* 打开新的cmd 执行命令： `mongorestore -h 127.0.0.1:27017 -d meishijie --dir mockdata文件夹目录路径`

### 步骤五： 启动项目( 顺序不要乱 )

* **启动后端：**打开cdm 在 meishijie-back  后端项目处执行命令 ` npm run dev/yarn dev`
* **启动前端：**新打开一个 cdm 在 meishijie-fe 前端项目处支持命令 ` npm run serve / yarn serve`

### 注意事项：

+ 执行步骤很重要，不要随意切换顺序
+ 启动数据库之后 千万不要关闭命令窗口不要结束执行进程，新开一个cmd来执行导入数据的命令
+ 导入数据成功之后，可以关闭这个命令窗口，也就是最终会有3个命令窗口在执行