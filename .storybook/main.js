module.exports = {
  stories:
    process.env.ENVIRONMENT === 'test'
      ? ['../components/**/*stories.js', '../components/**/**.test.js']
      : ['../components/**/*stories.js'],
  addons: [
    {
      name: '@storybook/addon-essentials'
    }
  ]
}
