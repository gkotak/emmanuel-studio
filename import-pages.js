// One-time script to seed Sanity with current page text from the static site
// Run with: SANITY_TOKEN=xxx node import-pages.js

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'tqrrtmwq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
})

// Helper: convert plain text paragraphs into Sanity portable text blocks
const toBlocks = (...paragraphs) =>
  paragraphs.map((text, i) => ({
    _type: 'block',
    _key: 'b' + i,
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: 's' + i, text, marks: [] }],
  }))

const pages = [
  {
    _id: 'sitePage-home',
    _type: 'sitePage',
    pageId: 'home',
    headline: 'A church in the heart of West Hampstead',
    deck: 'An inclusive community in the catholic tradition of the Church of England, in the heart of West Hampstead since 1897.',
    calloutHeading: 'Wherever you find yourself, you are welcome here.',
    introBody: toBlocks(
      'Emmanuel is a diverse, inclusive church in the liberal catholic tradition — a vibrant part of North London. Together, we are learning to be a community of faith shaped by the celebration of the Eucharist, a regular pattern of prayer and a vocation to share the all-encompassing love of God with the parish we serve.',
      'Wherever you find yourself on your journey of exploration of the Christian faith — curious, doubtful, seeking, ambivalent or long-time devout believer — we trust you will find a warm welcome at Emmanuel.'
    ),
  },
  {
    _id: 'sitePage-im-new',
    _type: 'sitePage',
    pageId: 'im-new',
    headline: 'Come as you are.',
    calloutHeading: 'Still have a question?',
    calloutBody: toBlocks(
      "We'd love to hear from you — drop us a line and a member of the clergy will get back to you."
    ),
  },
  {
    _id: 'sitePage-service-times',
    _type: 'sitePage',
    pageId: 'service-times',
    headline: 'Service & Prayer Times',
    deck: 'The Eucharist and the daily office shape the rhythm of our shared life. All are welcome at every service.',
    introBody: toBlocks(
      'As we gather to meet with Christ and one another, we seek to be a place where we are supported on our spiritual journeys, inspired to connect faith with the rest of our lives, and encouraged to put that faith into action.',
      'The Eucharist sits at the heart of our understanding of who we are at Emmanuel. From the very young to the very old, we seek to equip our community to discover more fully the presence of God in their lives. To help us each find our place at the table, we have a number of services of Holy Communion during the week and on Sundays.'
    ),
  },
  {
    _id: 'sitePage-weddings',
    _type: 'sitePage',
    pageId: 'weddings',
    headline: 'Weddings & Banns of Marriage',
    deck: 'We love weddings — and are always delighted to pray for and accompany couples as they take this important step.',
    introBody: toBlocks(
      'If you are engaged and considering getting married at Emmanuel or St Cuthbert\'s, we would love to hear from you!',
      'We love weddings and are always delighted to pray for and accompany couples as they take this important step. We warmly encourage couples to attend three or four marriage preparation sessions ahead of the wedding day; these will be arranged between the priest and the couple, and will ensure that sessions are compatible with work and other commitments.',
      'If you would like to know more about weddings in either of our churches, please contact the parish office in the first instance and a member of the clergy will be in touch.'
    ),
    calloutHeading: "Let's begin the conversation.",
    calloutBody: toBlocks(
      'Tell us a little about you and your plans, and a member of the clergy will be in touch to talk through the next steps.'
    ),
  },
  {
    _id: 'sitePage-funerals',
    _type: 'sitePage',
    pageId: 'funerals',
    headline: 'Funerals & Memorials',
    deck: 'We have experience in walking with people through these difficult times, and will do our best to support you as you navigate the sadness and challenges of grief.',
    introBody: toBlocks(
      'We know that arranging a funeral or a memorial service can be a very overwhelming experience.',
      'We have experience in walking with people in these difficult times and will do our best to support you as you navigate the sadness and challenges of grief.',
      'In helping you plan and prepare for a funeral or memorial service, we will do our best to help the love of God feel close to you. We are here to pray for and with you, and to work with you to put together a service that honours your loved one in the way that feels most right for you.',
      'If you would like to discuss a funeral, please contact the parish office. We will respond with care and without delay.'
    ),
    calloutHeading: 'We are here for you.',
    calloutBody: toBlocks(
      'Whenever you are ready, the parish office will help you take the next step — there is no rush, and no question too small.'
    ),
  },
  {
    _id: 'sitePage-baptisms',
    _type: 'sitePage',
    pageId: 'baptisms',
    headline: 'Baptism, First Communion & Confirmation',
    deck: 'We gladly baptise new members of whatever age into the family of God — praying for them as they embark on their pilgrimage of faith.',
    introBody: toBlocks(
      'At Emmanuel we gladly baptise new members of whatever age into the family of God, praying for them as they embark on their exciting journey and pilgrimage of faith.',
      'Our baptism services tend to take place at our 10:30 service on the third Sunday of the month. If you\'d prefer, we can also offer baptism at our 9:15 Joyful Noise service.'
    ),
    calloutHeading: 'A new beginning.',
    calloutBody: toBlocks(
      'Whatever your age, there is a place for you in the family of God at Emmanuel. We would love to walk this journey with you.'
    ),
  },
  {
    _id: 'sitePage-children-families',
    _type: 'sitePage',
    pageId: 'children-families',
    headline: 'Children & Families',
    deck: 'From our youngest members to our teenagers, Emmanuel is a place where children and families are warmly welcomed into the life of the church.',
    calloutHeading: 'Come and join us.',
    calloutBody: toBlocks(
      'Whether your children are in nursery or secondary school, or you\'re an adult wanting to get more involved — there\'s a place for you here.'
    ),
  },
  {
    _id: 'sitePage-music',
    _type: 'sitePage',
    pageId: 'music',
    headline: 'Music & Choir',
    deck: 'Music is at the heart of worship at Emmanuel — and our choir combines choral excellence with a welcoming, inclusive spirit.',
    calloutHeading: 'Lift your voice with us.',
    calloutBody: toBlocks(
      'We are always looking for singers who love music and want to use that gift in worship. Come and sing with us.'
    ),
  },
  {
    _id: 'sitePage-contact',
    _type: 'sitePage',
    pageId: 'contact',
    headline: 'Contact us',
    deck: 'If you would like to request a prayer for yourself or someone else, or to contact us about any other matter, please reach the clergy via the Parish Office below.',
    introBody: toBlocks(
      'Whatever is on your heart — a prayer request, a question, or simply wanting to get in touch — we would be glad to hear from you.'
    ),
    calloutHeading: 'Stay connected.',
    calloutBody: toBlocks(
      'Join our email list to receive the regular newsletter, with news and what\'s on across the parish.'
    ),
  },
  {
    _id: 'sitePage-donations',
    _type: 'sitePage',
    pageId: 'donations',
    headline: 'How can I help?',
    deck: "It costs £15,000 a month to run Emmanuel. We raise all of it ourselves, locally — it doesn't come from the Government or the Church of England.",
    introBody: toBlocks(
      'While we hold fundraising events and rent out the church, one of the foundations of our finances is the tremendous support we receive from our congregation through regular donations.'
    ),
    calloutHeading: 'Every gift keeps the doors open.',
    calloutBody: toBlocks(
      'Thank you for supporting the life, worship and ministry of Emmanuel Church.'
    ),
  },
]

async function run() {
  const transaction = client.transaction()
  for (const page of pages) {
    transaction.createOrReplace(page)
  }
  const result = await transaction.commit()
  console.log(`Created/updated ${result.results.length} site page documents`)
}

run().catch(err => { console.error(err); process.exit(1) })
