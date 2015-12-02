# Introduce
这个工作台是为了辅助CNQA FixPack Team更好、更快地完成日常工作的，同时提供一些关于CNQA Team整体的资源库，如KB。
>　主要功能包括：
  - Crawler For [Jenkins] Server
  - Sub Tasks Builder For Liferay [JIRA]
  - Job List Generator For Regression/AA Project
  - Evaluator For Duplicate Error Case
  - KB For CNQA(In Progress)
  - POSHI Watcher(In Progress)
  - [test](#test)

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
### test
启动控制台Server
```sh
$ cd fix-pack-workbench/bin
$ node www
```

### Note
各项目生成的结果存放文件夹


   [Jenkins]: <https://test.liferay.com/8/>
   [JIRA]: <https://issues.liferay.com/secure/Dashboard.jspa>
   [git-repo-url]: <https://github.com/haoliangwu/FixPack-Workbench>
   [how to install NodeJS]:<https://nodejs.org/en/>



