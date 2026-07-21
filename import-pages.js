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
    sections: [
      {
        _type: 'cardGridSection',
        _key: 'bap-cards',
        cards: [
          {_key: 'b1', eyebrow: 'The sacrament of belonging', title: 'Baptism', body: 'Through baptism we are welcomed into the family of God and the life of the Church. We baptise people of every age — infants, children and adults alike — and walk with each household as they prepare.'},
          {_key: 'b2', eyebrow: 'Once a year · taken by the Bishop', title: 'Confirmation', body: "We have a confirmation service once a year. Confirmations are taken by the Bishop and are the occasion for baptised people to 'confirm' the vows that were made on their behalf when they were baptised."},
          {_key: 'b3', eyebrow: 'Good Shepherd Sunday · from age 8', title: 'First Holy Communion', body: 'At Emmanuel we admit to First Holy Communion those children who would like to take part in the Eucharist but are not yet old enough to be confirmed. We encourage children to wait to be confirmed until they are much older (around 16 or older), but invite them to participate fully in the sacrament of Holy Communion from around age 8. Admission typically takes place on Good Shepherd Sunday, following a series of 6–8 sessions teaching about the Eucharist.'},
        ],
      },
      {
        _type: 'featureSection',
        _key: 'bap-feature',
        isBand: true,
        eyebrow: 'A growing faith',
        heading: "Welcomed to the Lord's table",
        imagePath: '/assets/first-communion.jpg',
        imageAlt: 'Children and adults presented to the Bishop at a Confirmation and First Holy Communion service',
        body: toBlocks(
          'From the youngest children admitted to First Holy Communion, to those confirmed by the Bishop, we walk with each person as they take their next step in the life of faith — surrounded by the prayers of the whole community.'
        ),
      },
    ],
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
    sections: [
      {
        _type: 'cardGridSection',
        _key: 'cf-sunday',
        cards: [
          {_key: 'cc1', eyebrow: 'Ages 4–11 · Godly Play', title: "Children's Church", body: "Throughout term time, Children's Church meets during the 10:30 Sunday service. Our curriculum follows the Godly Play method of Bible storytelling — an approach which seeks to inspire curiosity and wonder in our younger members.\n\nIt fosters a sense of the overwhelming love God has for all God's people, helping each child discover their own place in the story of faith."},
          {_key: 'cc2', eyebrow: 'Ages 9–11 · Up to Year 7', title: 'Youth Church', body: 'Youth Church typically involves some games, music and a lively exploration of the Gospel of the Day, or a chosen topic for the term.\n\nOlder children are welcome to join, but we find that by Year 7 they tend to be ready to join us for the service in church — singing, serving, or leading prayers and readings.'},
        ],
      },
      {
        _type: 'featureSection',
        _key: 'cf-stayplay',
        isBand: true,
        eyebrow: 'Thursdays in term time',
        heading: 'Stay and Play',
        imagePath: '/assets/children-families.jpg',
        imageAlt: 'Children gathered at the altar steps with clergy during an all-age service',
        body: toBlocks(
          'Stay and Play happens every Thursday in term time, 9:30 to 11:00am. This is a relaxed, friendly drop-in session with loads of great toys and usually a bit of a sing-song at the end.',
          "It's a great way to meet other local parents and carers, and to get answers to questions about life in West Hampstead with kids. Coffee, toast and healthy snacks are provided, and one of the clergy or our youth worker is always around to host.",
          'All babies, toddlers and pre-school age children, together with their parents and carers, are warmly welcome — with plenty of tea and coffee for the adults.'
        ),
      },
    ],
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
    sections: [
      {
        _type: 'featureSection',
        _key: 'mu-heritage',
        reverse: true,
        eyebrow: 'Our musical heritage',
        heading: 'A tradition stretching back over a century.',
        imagePath: '/assets/music-choir.jpg',
        imageAlt: 'The Emmanuel choir singing in the stalls beneath the organ, led by the Director of Music',
        body: toBlocks(
          'Music at Emmanuel is steeped in illustrious tradition. The English composer Harold Darke was organist at the church from 1906–1911, during which period he composed his setting of Christina Rossetti\'s "In the Bleak Midwinter".',
          'In contrast to many choral societies, the choir tackles new repertoire on a weekly basis, with the aim of providing fulfilling and musically enriching opportunities no matter your previous choral experience.'
        ),
      },
      {
        _type: 'peopleSection',
        _key: 'mu-people',
        eyebrow: 'Those who lead our music',
        people: [
          {_key: 'p1', role: 'Director of Music', name: 'Will Rose', bio: "Will studied Music at Queens' College, Cambridge, where he was a Choral Scholar. At university he won several prestigious conducting prizes and conducted every major instrumental ensemble across the University. Away from Emmanuel, Will is a music teacher at a top London secondary school."},
          {_key: 'p2', role: 'Organist', name: 'Joseph Verdin', bio: "On Sundays the choir is joined by Joseph Verdin, who held multiple Organ Scholarships at Durham University and has accompanied guest services at St Paul's Cathedral, St George's Chapel, Windsor, and York Minster."},
        ],
      },
      {
        _type: 'featureSection',
        _key: 'mu-childrens',
        eyebrow: 'For our youngest singers',
        heading: "Children's Choir",
        imagePath: '/assets/childrens-choir.jpg',
        imageAlt: 'Robed young choristers gathered at the altar during a sung service',
        body: [
          richBlock('cc0', ['Come and sing with the Emmanuel Church choir! We rehearse once a week in the church with our choir director, Will. We sing in the church on the first Sunday of every month, and also in special services, including at Easter.']),
          richBlock('cc1', ["We learn loads of exciting music, and always have lots of fun in our rehearsals. You don't need to be able to read sheet music to join, and it's a great way to make new friends! All rehearsals are free to attend."]),
          richBlock('cc2', ['To find out more, please contact Will at ', {text: 'w.g.rose41@gmail.com', href: 'mailto:w.g.rose41@gmail.com'}, '.']),
        ],
      },
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
    sections: [
      {
        _type: 'cardGridSection',
        _key: 'dn-costs',
        cards: [
          {_key: 'dc1', title: 'Ministry', body: 'Clergy pay, housing and pension — the people who lead our worship and care.'},
          {_key: 'dc2', title: 'Building', body: 'Maintenance, utilities and insurance for a much-loved Victorian church.'},
          {_key: 'dc3', title: 'Administration', body: 'Office costs for the day-to-day operation of the parish and its activities.'},
          {_key: 'dc4', title: 'Services', body: 'The direct costs of worship — music, liturgy, candles, vestments and more.'},
          {_key: 'dc5', title: 'Outreach', body: 'Reaching beyond our walls — the food bank, night shelter and other care.'},
        ],
      },
      {
        _type: 'cardGridSection',
        _key: 'dn-other',
        cards: [
          {_key: 'do1', title: 'Reading at a service', body: 'Share in the liturgy by reading the lessons aloud.'},
          {_key: 'do2', title: 'Joining the choir', body: 'Add your voice to the music of the Sung Eucharist.'},
          {_key: 'do3', title: 'Greeting people', body: 'Welcome visitors and regulars as they arrive at church.'},
          {_key: 'do4', title: 'Sunday School', body: 'Lead or support our children during the morning service.'},
          {_key: 'do5', title: 'Gardening', body: 'Help keep the church grounds and green looking their best.'},
          {_key: 'do6', title: 'Small building works', body: 'Lend a hand with the practical upkeep of the building.'},
        ],
      },
    ],
    // Note: the donations page has no callout band (removed in the design),
    // so calloutHeading/calloutBody are intentionally omitted here.
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
