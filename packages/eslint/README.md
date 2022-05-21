# @taoliujun/eslint-config

[![npm](https://img.shields.io/npm/v/@taoliujun/eslint-config.svg)](https://www.npmjs.com/package/@taoliujun/eslint)

> eslint for private use

## Installation

```shell
# yarn
yarn add -D @taoliujun/eslint-config
```

## Usage

* .eslintrc.js for js/ts

```javascript
// for js/ts
module.exports = {
    extends: ['@taoliujun/eslint-config'],
};
```

* .eslintrc.js for react

```javascript
// for react
module.exports = {
    extends: ['@taoliujun/eslint-config/react'],
};
```

* .prettierrc.js

```javascript
module.exports = require('@taoliujun/eslint-config/prettier');
```
