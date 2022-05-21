# @taoliujun/eslint

[![npm](https://img.shields.io/npm/v/@taoliujun/eslint.svg)](https://www.npmjs.com/package/@taoliujun/eslint)

> eslint for private use

## Installation

```shell
# yarn
yarn add -D @taoliujun/eslint
```

## Usage

* .eslintrc.js for js/ts

```javascript
// for js/ts
module.exports = {
    extends: ['@taoliujun/eslint'],
};
```

* .eslintrc.js for react

```javascript
// for react
module.exports = {
    extends: ['@taoliujun/eslint/react'],
};
```

* .prettierrc.js

```javascript
module.exports = require('@shm-open/eslint-config-bundle/prettier');
```
