import studio from '@sanity/eslint-config-studio'
import globals from 'globals'

export default [
  ...studio,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      'react/no-unescaped-entities': 'off',
    },
  },
]
