import studio from '@sanity/eslint-config-studio'

export default [
  ...studio,
  {
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
]
