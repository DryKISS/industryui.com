/**
 * Portfolio - Wordpress
 */
export const PORTFOLIO_WORDPRESS = [
  {
    active: true,
    author: 'Ian Warner',
    client: 'razorfish',
    cover: '/images/portfolio/razorfish/blackberry-challenge/hero.png',
    description: '',
    duration: [],
    links: [],
    meta: {
      description:
        'Blackberry wanted to hook into the Youth market. We built the site using a Custom Wordpress theme and plugins',
      title: 'Blackberry® Youth Challenge',
      type: 'article'
    },
    outcome: [],
    slug: 'blackberry-challenge',
    tasks: [],
    team: ['Ian Warner - Developer'],
    title: 'Blackberry Youth Challenge',
    type: 'wordpress'
  },
  {
    active: true,
    author: 'Ian Warner',
    client: 'deliveroo',
    cover: '/images/portfolio/deliveroo/blog/deliveroo-home-mobile.png',
    description: `
      <p>
        DryKISS was contacted by a former colleague; now Head of Content at Deliveroo, to help
        achieve some significant blog edits. These edits were forming part of the new Deliveroo
        brand launch on Sunday 4th September 2016.
      </p>
      <p>
        The blog actually consisted of a Wordpress MulitSite holding seven international blogs.
        Each one would have to be tested and edited.
      </p>
      <p>It just happened we were contacted just three days earlier...</p>

      <h3>Business understanding</h3>
      <p>
        The discovery phase for the work required had to be undertaken over Skype due to the
        tight deadline. DryKISS set up our usual scrum Trello board and placed all the features
        and work packages that needed to be delivered.
      </p>
      <p>
        We then liaised through Trello to achieve a slick communication between DryKISS,
        internal designer and the Content manager.
      </p>

      <h3>Pain points</h3>
      <p>Blog had to be deployed through another third party company</p>
      <p>Getting setup on the development system was unknown</p>
      <p>Wordpress setup was unknown</p>

      <h3>Goal</h3>
      <p>
        The overriding goal was to complete the brand re-design of all the pages of the blog
        before a newsletter to 2 million users was distributed.
      </p>
      <p>
        This meant working incredibly fast to make the changes to facilitate a suitable sign
        off.
      </p>

      <h3>Developement</h3>
      <p>
        The Wordpress theme and internal mechanics were understood quickly. So it was then just
        a matter of pushing through the CSS changes, checking against cross-browser
        compatibility, responsive look and feel and new font inclusion.
      </p>
      <p>
        DrKISS complete the changes mid-day on the Sunday, to allow a full spectrum text by the
        client. Everything was deployed at midnight with just some minor changes to the caching
        mechanism to set it live.
      </p>
    `,
    duration: ['3 days development'],
    links: [
      {
        href: 'https://deliveroo.co.uk/blog/',
        label: 'Deliveroo Blog'
      }
    ],
    meta: {
      description: 'Deliveroo - Food home delivery',
      title: 'Deliveroo - Food home delivery',
      type: 'article'
    },
    outcome: ['Delivered edits on time', 'Deployed at midnight'],
    slug: 'deliveroo-rebrand',
    tasks: [
      'Wordpress theme edits',
      'Wordpress plug-in edits',
      'Responsive development',
      'Deployment</ListItem>'
    ],
    team: ['Ian Warner - Technical Lead'],
    title: 'Deliveroo Rebrand',
    type: 'wordpress'
  }
]
