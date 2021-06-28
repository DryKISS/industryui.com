module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['standard', 'standard-react', 'prettier'],
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  settings: {
    react: {
      version: '17.0.1'
    }
  },
  globals: {
    before: true,
    cy: true,
    Cypress: true,
    localStorage: true
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'prettier/prettier': [
      1,
      { printWidth: 100, semi: false, singleQuote: true, trailingComma: 'none' }
    ],
    'max-len': [
      'error',
      {
        // Ignore SVGs d=
        ignorePattern: 'd="([\\s\\S]*?)"|data:image|^export [^,]+ from',
        code: 100,
        tabWidth: 2
      }
    ],

    // Next JS does not require react import
    'react/react-in-jsx-scope': 'off',

    // Make sure imports are taken care off
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',

    // don't force es6 functions to include space before paren
    'space-before-function-paren': 0,
    'react/prop-types': 0,

    // allow specifying true explicitly for boolean props
    'react/jsx-boolean-value': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react/no-did-update-set-state': 0
  }
}
