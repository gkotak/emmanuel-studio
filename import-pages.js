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

// Helper: build a single portable-text block from an array of runs.
// Each run is either a plain string, or { text, href } for a link,
// or { text, style } to mark a whole paragraph as a heading (h2/h3).
const richBlock = (key, runs, style = 'normal') => {
  const markDefs = []
  const children = runs.map((run, i) => {
    if (typeof run === 'string') {
      return { _type: 'span', _key: `${key}s${i}`, text: run, marks: [] }
    }
    const linkKey = `${key}l${i}`
    markDefs.push({ _type: 'link', _key: linkKey, href: run.href })
    return { _type: 'span', _key: `${key}s${i}`, text: run.text, marks: [linkKey] }
  })
  return { _type: 'block', _key: key, style, markDefs, children }
}

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
    deck: "Whether you've been going to Anglican churches all your life or this is the first time you'll step inside, we hope you'll find a warm welcome.",
    introBody: toBlocks(
      'Whilst we are proud of our Anglican identity, we are a very international community, with a number of different Christian denominations represented in our congregation.',
      'At our main Parish Mass you can expect a robed choir, acolytes and incense, with a team of servers who reflect the diversity of our congregation. Our said Eucharists are more simple, and Joyful Noise is more noisy (!). The thread that ties them together is Eucharistic-centred worship.',
      "To help us each find our place at the table, we have a number of services of Holy Communion during the week and on Sundays. Don't hesitate to contact a member of the clergy if you'd like to learn more. Even better, just come and visit!"
    ),
    sections: [
      {
        _type: 'cardGridSection',
        _key: 'imnew-services',
        eyebrow: 'Find your place at the table',
        cards: [
          {_key: 'c1', eyebrow: 'Sunday · 10:30', title: 'Sung Eucharist', body: "Our main Parish Mass — a robed choir, incense and the fullest celebration of the liturgy. Children's & Youth Church meet during term."},
          {_key: 'c2', eyebrow: 'Sunday · 8:00', title: 'Said Eucharist (BCP)', body: 'A quiet, simple, 30-minute service said according to the Book of Common Prayer — a reflective start to the week.'},
          {_key: 'c3', eyebrow: 'Sunday · 9:15', title: 'Joyful Noise', body: 'A lively, noisy celebration of the Mass for pre-school children and their families, with music led on the guitar. (Term time only.)'},
        ],
      },
      {
        _type: 'quoteSection',
        _key: 'imnew-quote',
        quote: 'The Eucharist sits at the heart of our understanding of who we are at Emmanuel.',
        cite: 'What to expect at Emmanuel',
      },
      {
        _type: 'cardGridSection',
        _key: 'imnew-access',
        layout: 'iconList',
        eyebrow: 'Coming to Emmanuel',
        heading: 'Everyone is welcome here.',
        cards: [
          {_key: 'a1', title: 'Step-free access', body: "Both Emmanuel and St Cuthbert's are accessible for wheelchairs, with bathrooms for disabled access at both buildings."},
          {_key: 'a2', title: 'Hearing loop', body: 'Our sound system at Emmanuel is fitted with a hearing aid loop throughout the church.'},
          {_key: 'a3', title: 'Children welcome', body: 'The Harold Darke Room at the back has books and toys for under-4s — come and go as you need.'},
          {_key: 'a4', title: 'Refreshments', body: 'Tea, coffee and a warm welcome follow the 10:30 service every Sunday — do stay.'},
        ],
      },
    ],
    calloutHeading: 'Still have a question?',
    calloutBody: toBlocks(
      "Don't hesitate to contact a member of the clergy if you'd like to learn more — or simply come along this Sunday."
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
    calloutHeading: 'Join us in prayer.',
    calloutBody: toBlocks(
      'Whether for the first time or the thousandth, there is a place for you at the table at Emmanuel.'
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
    introBody: toBlocks(
      'Children and youth make up a core part of our church community at Emmanuel — and we know how much they have to teach us about spirituality and questions of faith.',
      "For this reason we invest heavily in their Christian growth: for our youngest members through the Joyful Noise congregation, and for older children and young people through Children's & Youth Church, singing in the choir, joining the serving team, and helping to lead the readings and intercessions at our monthly intergenerational worship."
    ),
    calloutHeading: 'Come and join us.',
    calloutBody: toBlocks(
      "Whether on a Sunday morning or at Thursday's Stay and Play, we'd love to welcome you and your family to Emmanuel."
    ),
  },
  {
    _id: 'sitePage-music',
    _type: 'sitePage',
    pageId: 'music',
    headline: 'Music & Choir',
    deck: 'Music is at the heart of worship at Emmanuel — and our choir combines choral excellence with a welcoming, inclusive spirit.',
    introBody: [
      richBlock('mu0', ['We believe that music plays a pivotal part in congregational worship, enhancing and deepening our connection to God.']),
      richBlock('mu1', ['Our choir combines choral excellence with a welcoming and inclusive spirit. We sing at the 10:30am Eucharist every Sunday, offering a diverse repertoire of sacred music, ranging from Renaissance polyphony to contemporary works. In addition to our weekly worship, the choir leads the music for special services at key points in the liturgical year.']),
      richBlock('mu2', ['We are always keen to welcome new singers and musicians of all ages and abilities. The choir rehearses once a week from 7:15–8:15pm on Wednesday evenings, and sings as part of the 10:30am Eucharist each Sunday. Whilst regular commitment is encouraged, it is not necessary to be available for every rehearsal and service to be a member of the choir.']),
      richBlock('mu3', [
        'We are a friendly and welcoming choir, with a great social scene, often going for drinks post-rehearsal. An ability to read sheet music is desirable, but not necessary provided you have a willingness to learn. If you are interested, please contact our Director of Music, Will, at ',
        { text: 'w.g.rose41@gmail.com', href: 'mailto:w.g.rose41@gmail.com' },
        '.',
      ]),
    ],
    calloutHeading: 'Lift your voice with us.',
    calloutBody: toBlocks(
      "Whatever your experience, there's a place for you in our music. New singers and musicians are always warmly welcome."
    ),
  },
  {
    _id: 'sitePage-contact',
    _type: 'sitePage',
    pageId: 'contact',
    headline: 'Contact us',
    deck: 'If you would like to request a prayer for yourself or someone else, or to contact us about any other matter, please reach the clergy via the Parish Office below.',
    introBody: [
      richBlock('ct0', ['Whatever is on your heart — a prayer request, a question, or simply wanting to get in touch — we would be glad to hear from you.']),
      richBlock('ct1', ['The clergy can be reached through the Parish Office, and we aim to respond as soon as we are able. If your enquiry concerns a baptism, wedding or funeral, do let us know and we will pass it to the right person.']),
      richBlock('ct2', ['You are always welcome to come and find us in person, too — before or after any of our services, or by arranging a time to visit the church and the Nazareth Chapel for quiet prayer.']),
      richBlock('ct3', ['Join our email list and newsletter'], 'h3'),
      richBlock('ct4', [
        "If you'd like to join our email list — which includes receiving our regular newsletter — please ",
        { text: 'click here', href: 'https://emmanuelnw6.us9.list-manage.com/subscribe?u=82a1a8e47d9788dccae693588&id=bbf2ae4052' },
        '. We send updates fortnightly, with news, service times and what’s coming up across the parish.',
      ]),
    ],
    calloutHeading: 'Stay connected.',
    calloutBody: toBlocks(
      'Join our email list to receive the regular newsletter, with news and what\'s on across the parish.'
    ),
  },
  {
    _id: 'sitePage-donations',
    _type: 'sitePage',
    pageId: 'donations',
    headline: 'Every gift keeps the doors open.',
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
