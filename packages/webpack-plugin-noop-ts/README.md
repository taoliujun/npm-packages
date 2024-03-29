# webpack-plugin-noop-ts

[![npm](https://img.shields.io/npm/v/webpack-plugin-noop-ts.svg)](https://www.npmjs.com/package/webpack-plugin-noop-ts)

> webpack plugin for typescript that does nothing, fork https://github.com/QingWei-Li/noop-webpack-plugin

## Installation

```shell
# npm
npm add -D webpack-plugin-noop-ts
```

## Usage

```typescript
import { Configuration } from 'webpack';
import NoopWebpackPlugin from 'webpack-plugin-noop-ts';

const webpackConfig = (): Configuration => {
  const isWebpackDev = process.env.NODE_ENV === 'development';

  return {
    // your config
    plugins: [...[isWebpackDev ? new YourPlugin() : NoopWebpackPlugin()]],
  };
};
```

## License

MIT
