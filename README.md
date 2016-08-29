# Desprecated
不再维护这个平台了。

# Introduce
这个工作台是为了辅助CNQA FixPack Team更好、更快地完成日常工作的，同时提供一些关于CNQA Team整体的资源库，如KB。
>　主要功能包括：
  - [Crawler](#crawler) For [Jenkins] Server
  - [Sub Tasks Builder](#builder) For Liferay [JIRA]
  - Job List Generator For [Regression](#regression)/[AA Project](#comparator)
  - [Evaluator](#evaluator) For Duplicate Error Case
  - [KB](#kb) For CNQA(In Progress)
  - [Poshi Watcher](#poshi-watcher)(In Progress)

## Version
1.0.0

## Installation

你需要先安装Node v4+环境，安装教程参考[how to install NodeJS]。

Local Dependencies安装
```sh
$ git clone [git-repo-url] fix-pack-workbench
$ cd fix-pack-workbench
$ npm i
```
Global Dependencies安装
```sh
$ npm i selenium-standalone@latest -g
$ selenium-standalone install
```
启动本地Selenium standalone Server
```sh
$ selenium-standalone start
```

## Usage
### 控制台
```sh
$ cd fix-pack-workbench
$ cd bin
$ node www
```
or
```sh
$ cd fix-pack-workbench
$ npm start
```

访问http://localhost:8081

### Crawler
启动控制台Server后，访问http://localhost:8081/crawler

### Builder
```sh
$ selenium-standalone start
$ cd fix-pack-workbench
$ cd private/fixpack/sub_task
$ wdio wdio.conf.js
```
### Regression
```sh
$ $ cd fix-pack-workbench
$ cd private/fixpack/regression
$ node catch_regression.js
```
运行结束后，会在result文件夹生成相应的.xlsx文件

### Comparator
启动控制台Server后，访问http://localhost:8081/crawler

### Evaluator
```sh
$ cd fix-pack-workbench
$ cd private/evaluator
$ node evaluator.js
```
运行结束后，会在result文件夹生成相应的.xlsx文件

### KB
启动控制台Server后，访问http://localhost:8081/kb

### Poshi Watcher
启动控制台Server后，访问http://localhost:8081/editors

### Note
各项目生成的结果存放文件夹均为子项目根目录的result文件夹

Setting文件的注释
```sh
{
  //liferay源码根目录
  "project_home": "/home/lyon/liferay/portal/portal-6210",
  //portal-web源码根目录
  "portalweb_home": "/portal-web/test/functional/com/liferay/portalweb",
  
  //user setting
  "user_info": {
    //用户名
    "username": "haoliang.wu",
    //密码
    "password": "woaini0514"
  },
  
  //fixpack setting
  "fixpack_info": {
    //fixpack的ticket number
    "ticket": "LRQA-20022",
    //fixpack的名字
    "name": "portal-56-6130",
    //fixpack在mirror的build number
    "build": "1"
  },
  
  //crawler setting
  "crawler_info": {
    //jenkins fixpack URL
    "url": "https://test.liferay.com/8/view/test-portal-fixpack-frontend-tomcat-mysql%28ee-6.2.10_6.2.10.15%29/",
    //jenkins baseline URL
    "url_baseline": "https://test.liferay.com/8/view/test-portal-release-ee-frontend-tomcat-mysql%28ee-6.2.10_6.2.10.15%29/",
    //jenkins build number
    "build": "#5",
    //crawler的模式
    "is_baseline": true
  },
  
  //jenkins setting
  "jenkins_info": {
    //jenkins的host地址
    "host": "https://test.liferay.com"
  },
  
  //sub task setting
  "sub_task_info": {
    //sub task目标网站的host地址
    "host": "https://issues.liferay.com/browse"
  },
  
  //regression setting
  "regression_info": {
    //regression目标网站的host地址
    "host": "https://issues.liferay.com/browse"
  }
}
```

   [Jenkins]: <https://test.liferay.com/8/>
   [JIRA]: <https://issues.liferay.com/secure/Dashboard.jspa>
   [git-repo-url]: <https://github.com/haoliangwu/FixPack-Workbench>
   [how to install NodeJS]:<https://nodejs.org/en/>


