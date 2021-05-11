/**
 * Pages for the site
 */

module.exports = () => {
  return Object.assign({
    // Core
    '/': { page: '/' },
    '/404': { page: '/404' },

    // About
    '/about': { page: '/about' },

    // Blog
    '/blog': { page: '/blog' },

    // Careers
    '/careers': { page: '/careers' },

    // Contact
    '/contact': { page: '/contact' },

    // Our Work
    '/our-work': { page: '/our-work' },

    // Policies
    '/policies/privacy-policy': { page: '/policies/privacy-policy' },
    '/policies/terms-conditions': { page: '/policies/terms-conditions' },
    '/policies/site-map': { page: '/policies/site-map' },

    // Team
    '/team': { page: '/team' },

    // What We Do
    '/what-we-do': { page: '/what-we-do' }
  })
}
