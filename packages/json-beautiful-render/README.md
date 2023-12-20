# json-beautiful-render

[中文](./README.zh_CN.md) | [English](./README.en_US.md)

[![npm](https://img.shields.io/npm/v/json-beautiful-render.svg)](https://www.npmjs.com/package/json-beautiful-render)

将json数据渲染成html。支持在原生javascript或react、vue等框架中使用。

效果预览如下。

![image](https://github.com/taoliujun/npm-packages/assets/5689134/50883b5c-150a-4412-ab1e-8961987818aa)

# 安装

```shell
npm add json-beautiful-render
```

# 使用

## 基础使用

```javascript
import jsonRender from 'json-beautiful-render';

jsonRender(document.querySelector('#container'), {
    name: 'hello world',
});
```

## 定制渲染的颜色

```javascript
import jsonRender from 'json-beautiful-render';

jsonRender(
    document.querySelector('#container'),
    {
        name: 'hello world',
    },
    {
        valueColor: 'green',
    },
);
```

# API

## jsonRender(el, json, options)

渲染的方法

| 参数    | 说明       | 类型    | 默认值 |
| ------- | ---------- | ------- | ------ |
| el      | 挂载的容器 | Element | -      |
| json    | JSON对象   | Object  | -      |
| options | 配置       | Options | -      |

## Options

配置项

| 参数                 | 说明                                 | 类型        | 默认值 |
| -------------------- | ------------------------------------ | ----------- | ------ |
| activeBgColor        | 项目激活时，整行区域的背景色         | string      | -      |
| activeHighLightColor | 项目激活时，文字区域的背景色         | string      | -      |
| levelHighLightColor  | 项目激活时，该项目所有父级键名的颜色 | string      | -      |
| labelColor           | 键名的文本颜色                       | string      | -      |
| valueColor           | 键值的文本颜色                       | string      | -      |
| valueColors          | 不同变量类型的文本颜色               | ValueColors | -      |

## ValueColors

不同变量类型的文本颜色

| 参数        | 说明                    | 类型   | 默认值 |
| ----------- | ----------------------- | ------ | ------ |
| string      | 字符串                  | string | -      |
| number      | 数字                    | string | -      |
| specialness | 特殊值，如null、boolean | string | -      |
