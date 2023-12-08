// eslint-disable-next-line import/no-extraneous-dependencies
const defaultPlugin = require('@commitlint/config-conventional');

const getRules = (input) => {
  if (typeof input === 'string') {
    return [input];
  }
  return input;
};

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      defaultPlugin.rules['type-enum'][0],
      defaultPlugin.rules['type-enum'][1],
      [...getRules(defaultPlugin.rules['type-enum'][2]), 'RELEASING'],
    ],
    'type-case': [
      defaultPlugin.rules['type-case'][0],
      defaultPlugin.rules['type-case'][1],
      [...getRules(defaultPlugin.rules['type-case'][2]), 'upper-case'],
    ],
  },
};
