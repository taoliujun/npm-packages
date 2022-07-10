module.exports = {
  extends: ['./react'],

  rules: {
    /**
     * B端表格、表单的组件行数很容易就增长了，所以放宽到200行
     */
    'max-lines-per-function': ['error', { max: 200, skipBlankLines: true, skipComments: true }],
    // 换行符
    'linebreak-style': ['error', 'unix'],
  },

  overrides: [
    // 框架强制部分文件export default
    {
      files: [
        './config/config.ts',
        './src/app.ts',
        './src/layouts/index.tsx',
        './src/pages/index.tsx',
        './src/pages/!(components)/index.tsx',
        './src/pages/!(components)/!(components)/index.tsx',
        './src/pages/!(components)/!(components)/!(components)/index.tsx',
        './src/pages/!(components)/!(components)/!(components)/!(components)/index.tsx',
        './src/pages/!(components)/!(components)/!(components)/!(components)/!(components)/index.tsx',
        './src/pages/**/_mock.ts',
      ],
      rules: {
        'import/no-unused-modules': ['off'],
        'import/no-default-export': ['off'],
      },
    },
  ],
};
