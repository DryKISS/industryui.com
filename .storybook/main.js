module.exports = {
  stories:
    process.env.ENVIRONMENT === 'test'
      ? ['../components/**/__tests__/**/*stories.js', '../components/**/**.test.js']
      : ['../components/**/__tests__/**/*stories.js'],
  addons: [
    {
      name: '@storybook/addon-essentials'
    }
  ]
}
