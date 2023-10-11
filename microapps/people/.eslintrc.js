module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
    },
    extends: ['plugin:vue/essential'],
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      "vue/multi-word-component-names":'off'
    },
    parserOptions: {
      parser: '@babel/eslint-parser',
    },
  };
  