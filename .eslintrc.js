module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    semi: ['error', 'always'],
    'eol-last': ['error','never'],
    'no-use-before-define': [0],
    'require-yield': [0],
    'global-require': [0],
    'no-console': [0],
    'arrow-body-style': [0],
    'arrow-parens': ['error', 'as-needed'],
    'jsx-quotes': ['error', 'prefer-single'],
    'object-curly-newline': [0],
    'react/jsx-no-bind': [0],
    'react/prop-types': [0],
    'react/prefer-stateless-function': [0],
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/destructuring-assignment': [0],
    'jsx-a11y/no-static-element-interactions': [0],
    'jsx-a11y/no-noninteractive-element-interactions': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'jsx-a11y/anchor-is-valid': [0],
    'import/no-extraneous-dependencies': [0],
    'import/no-unresolved': [0],
    'react/jsx-filename-extension': [0]
  }
}