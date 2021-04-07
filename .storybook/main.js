// module.exports = {
//   stories:
//     process.env.ENVIRONMENT === 'test'
//       ? ['../components/**/__tests__/*stories.js', '../components/**/**.test.js']
//       : ['../components/**/__tests__/*stories.js'],
//   addons: [
//     {
//       name: '@storybook/addon-essentials'
//     }
//   ]
// }


const molecules = '../components/molecules/'

module.exports = {
  stories: [
    `${molecules}navbar/__tests__/navbar.stories.js`,
    `${molecules}tabs/__tests__/stories.js`
  ],
  addons: [
    {
      name: '@storybook/addon-essentials'
    }
  ]
}
