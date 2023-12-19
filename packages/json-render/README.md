# json-render

[![npm](https://img.shields.io/npm/v/@taoliujun/utils.svg)](https://www.npmjs.com/package/@taoliujun/utils)

一个json美化渲染器，用于将json数据渲染成html。支持在原生javascript、react、vue等框架中使用。

## 安装

```shell
npm add json-render
```

## 使用

### 基础使用

```javascript
import jsonRender from 'json-render';

jsonRender(document.querySelector('#container'), {
  name: 'hello world',
});
```

### 文字通用颜色配置

```javascript
import jsonRender from 'json-render';

jsonRender(
  document.querySelector('#container'),
  {
    name: 'hello world',
  },
  {
    textColor: 'green',
  },
);
```

## API

### jsonRender(el, json, options)

渲染的方法

| 参数    | 说明       | 类型    | 默认值 |
| ------- | ---------- | ------- | ------ |
| el      | 挂载的容器 | Element | -      |
| json    | JSON对象   | Object  | -      |
| options | 配置       | Options | -      |

### Options

配置项

| 参数                 | 说明                                 | 类型        | 默认值 |
| -------------------- | ------------------------------------ | ----------- | ------ |
| valueColors          | 变量的颜色                           | ValueColors | -      |
| textColor            | 普通文字颜色                         | string      | -      |
| activeBgColor        | 项目激活时，整行区域的背景色         | string      | -      |
| activeHighLightColor | 项目激活时，文字区域的背景色         | string      | -      |
| levelHighLightColor  | 项目激活时，该项目所有父级键名的颜色 | string      | -      |

### ValueColors

变量的颜色，值应该是颜色。

| 参数        | 说明                    | 类型   | 默认值 |
| ----------- | ----------------------- | ------ | ------ |
| string      | 字符串                  | string | -      |
| number      | 数字                    | string | -      |
| specialness | 特殊值，如null、boolean | string | -      |
