/**
 * Messages data
 *
 * Audience
 * All: all
 * Internal: internal
 * Customer Only: customer
 * Supplier Only: supplier
 * Customer & Supplier: customer-supplier
 */
export const messages = [
  {
    avatar: 'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
    content:
      'Hiya we are expecting a PPM scheduled maintenance check on our LED lightbulbs throughout the third floor of XYZ Company offices today. Would appreciate a timely response on this so we can sort out security.',
    reply: 'Re: 5397 — PPM',
    icon: 'email',
    id: 0,
    from: 'Mike <mike@xyz.com>',
    to: 'internal',
    pictureId: null,
    statusText: 'delivered',
    time: 'Mon 4 Nov 2019 11:59',
    type: 'in',
    more: false
  },
  {
    avatar: 'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
    content:
      'Hiya this is a message adding "Read more " where we are expecting a PPM scheduled maintenance check on our LED lightbulbs throughout the third floor of XYZ Company offices today.\n  Would appreciate a timely response on this so we can sort out security. \n Text hidden by See More',
    reply: 'Re: 5397 — PPM',
    icon: 'email',
    id: 1,
    from: 'Mike <mike@xyz.com>',
    to: 'internal',
    pictureId: null,
    statusText: 'delivered',
    time: 'Mon 4 Nov 2019 11:59',
    type: 'in',
    more: true
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
    content: 'Late arrival.',
    icon: 'notification',
    from: 'System message',
    id: 2,
    to: 'all',
    pictureId: null,
    statusText: 'sent',
    time: 'Mon 4 Nov 2019 13:00',
    type: 'in'
  },
  {
    content: 'Sorry to say our contractor is running slightly late',
    icon: 'comment',
    id: 3,
    from: 'Cleverly <support@cleverly.com>',
    to: 'customer',
    pictureId: null,
    statusText: 'sent',
    time: 'Mon 4 Nov 2019 13:11',
    type: 'out'
  },
  {
    content:
      'Thank you for the comment, please let us know what time the contractor will be here so we can pass security.',
    reply: 'Re: 5397 — PPM',
    icon: 'email',
    id: 4,
    from: 'Mike <support@cleverly.com>',
    to: 'internal',
    pictureId: null,
    statusText: 'delivered',
    time: 'Mon 4 Nov 2019 13:13',
    type: 'in'
  },
  {
    content: 'Arrived on site.',
    icon: 'notification',
    id: 5,
    from: 'System message',
    to: 'customer-supplier',
    pictureId: null,
    statusText: 'sent',
    time: 'Mon 4 Nov 2019 13:35',
    type: 'in'
  },
  {
    content: 'Mike can you let us know that the contractor is through security?',
    reply: 'Re: 5397 — PPM',
    icon: 'email',
    id: 6,
    from: 'Cleverly <support@cleverly.com>',
    to: 'customer',
    pictureId: null,
    statusText: 'sent',
    time: 'Mon 4 Nov 2019 13:39',
    type: 'out'
  },
  {
    content: 'Job complete.',
    icon: 'notification',
    id: 7,
    from: 'System message',
    to: 'all',
    pictureId: null,
    statusText: 'sent',
    time: 'Mon 4 Nov 2019 14:25',
    type: 'in'
  }
]
