module.exports = {
  parser: '@babel/eslint-parser',
  extends: ['standard', 'standard-react', 'prettier'],
  env: {
    browser: true,
    es6: true
  },
  settings: {
    react: {
      version: '17.0.2'
    }
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
      { printWidth: 100, semi: false, singleQuote: true, trailingComma: 'none', endOfLine: 'auto' }
    ],
    'max-len': [
      'error',
      {
        // Ignore SVGs d=
        ignorePattern: 'd="([\\s\\S]*?)"|data:image|^export [^,]+ from|^import [^,]+ from',
        code: 100,
        tabWidth: 2
      }
    ],

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
