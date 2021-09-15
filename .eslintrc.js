module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'standard-with-typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    project: './tsconfig.json',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'react/jsx-uses-react': 'off', // react 17 之后，可以关掉此配置
    'react/react-in-jsx-scope': 'off' // react 17 之后，可以关掉此配置
  },
  settings: {
    react: {
      // 需要配置，否则报 'Warning: React version not specified in eslint-plugin-react settings.'
      version: 'detect'
    }
  }
}
