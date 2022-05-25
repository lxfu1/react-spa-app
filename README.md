# React 栈微前端

> 项目直接基于 [create-react-app](https://github.com/facebook/create-react-app) 创建，仅做微调，会存在一些不合理的地方，有想法的修复一下，无想法的忽略。

微前端方案依赖 [single-spa](https://github.com/single-spa/single-spa) 实现。

## 依赖安装

分别到 `react-app1` 、 `react-app2` 、 `root-config` 下安装依赖

```sh
  npm i
```

## 启动

启动有两种模式，一种是启动子应用做功能开发，一种是启动主应用。

### 启动子应用

在子应用模块执行 `npm start` 即可

### 启动主应用

由于主应用依赖子应用，所以需要先启动子应用。

step1:

```sh
 cd ./react-app1

 npm run start:micro
```

step2:

```sh
 cd ./react-app2

 npm run start:micro
```

step3:

```sh
 cd ./root-config

 npm run start
```

## 预览

访问 [http://localhost:9000](http://localhost:9000)
