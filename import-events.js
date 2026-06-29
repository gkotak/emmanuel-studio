import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'tqrrtmwq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
})

const events = [
  {
    title: "Corpus Christi — our Patronal Festival",
    slug: { _type: 'slug', current: 'corpus-christi' },
    category: "Patronal Festival",
    date: "Sunday 7 June 2026",
    sortDate: "2026-06-07",
    location: "Emmanuel Church, NW6",
    deck: "We keep our Patronal Festival at Corpus Christi — the feast of \"God with us,\" from which Emmanuel takes its name.",
    summary: "Join us after the special 10:30 Sung Mass for a Bring & Share BBQ, and Choral Evensong at 6:30pm.",
    featured: true,
    thumbnailUrl: "https://i0.wp.com/emmanuelnw6.com/wp-content/uploads/2026/06/Patronal-Bring-and-Share-.png?w=720",
    lede: "A day of thanksgiving, food and music as we celebrate the feast from which our church takes its name.",
    body: [
      { _type: 'block', _key: 'b1', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's1', text: "Emmanuel keeps its Patronal Festival at Corpus Christi — the feast of the Body of Christ, and of \"God with us,\" the name our church carries.", marks: [] }] },
      { _type: 'block', _key: 'b2', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's2', text: "We begin with a special Sung Mass at 10:30, after which everyone is warmly invited to stay for a Bring & Share BBQ. Bring a side, a dessert or a soft drink to share — and a picnic blanket for the garden.", marks: [] }] },
      { _type: 'block', _key: 'b3', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's3', text: "The festival closes with Choral Evensong at 6:30pm, sung by our parish choir.", marks: [] }] },
    ],
    posters: [
      { _type: 'object', _key: 'p1', url: "https://i0.wp.com/emmanuelnw6.com/wp-content/uploads/2026/06/Patronal-Bring-and-Share-.png?w=1000", alt: "Bring & Share BBQ poster — Corpus Christi" },
      { _type: 'object', _key: 'p2', url: "https://i0.wp.com/emmanuelnw6.com/wp-content/uploads/2026/06/Choral-Evensong-1-1.png?w=1000", alt: "Choral Evensong for Corpus Christi poster" },
    ],
    detailRows: [
      { _type: 'object', _key: 'd1', label: 'Date', value: 'Sunday 7 June 2026' },
      { _type: 'object', _key: 'd2', label: 'Bring & Share', value: 'After the 10:30 Sung Mass' },
      { _type: 'object', _key: 'd3', label: 'Choral Evensong', value: '6:30pm' },
      { _type: 'object', _key: 'd4', label: 'Where', value: 'Emmanuel Church & garden' },
      { _type: 'object', _key: 'd5', label: 'Bring', value: 'A dish to share & a blanket' },
    ],
  },
  {
    title: "Holy Week at Emmanuel",
    slug: { _type: 'slug', current: 'holy-week' },
    category: "Holy Week & Easter",
    date: "Palm Sunday — Easter Day · 2026",
    sortDate: "2026-03-29",
    location: "Emmanuel Church, NW6",
    deck: "Walk the way of the cross with us, from the triumph of Palm Sunday to the joy of Easter morning.",
    summary: "Walk the way of the cross with us, from Palm Sunday through to the joy of Easter morning — with services held jointly at Emmanuel and St Cuthbert's.",
    featured: false,
    thumbnailUrl: "https://i0.wp.com/emmanuelnw6.com/wp-content/uploads/2026/03/Holy-Week-Poster-1.png?w=720",
    lede: "The heart of the Christian year — the journey with Christ through his Passion, death and resurrection.",
    body: [
      { _type: 'block', _key: 'b1', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's1', text: "Holy Week takes us with Jesus from the triumph of Palm Sunday, through the Last Supper and the cross of Good Friday, to the empty tomb on Easter morning.", marks: [] }] },
      { _type: 'block', _key: 'b2', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's2', text: "Services are held jointly between Emmanuel and St Cuthbert's churches. The full schedule for each day — Palm Sunday, Daily Mass, Maundy Thursday, Good Friday and Easter Sunday — is shown on the poster.", marks: [] }] },
      { _type: 'block', _key: 'b3', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's3', text: "All are welcome at every service. Do come and keep these holy days with us.", marks: [] }] },
    ],
    posters: [
      { _type: 'object', _key: 'p1', url: "https://i0.wp.com/emmanuelnw6.com/wp-content/uploads/2026/03/Holy-Week-Poster-1.png?w=1000", alt: "Holy Week service schedule poster" },
    ],
    detailRows: [
      { _type: 'object', _key: 'd1', label: 'Palm Sunday', value: 'Blessing of palms & procession' },
      { _type: 'object', _key: 'd2', label: 'Maundy Thursday', value: 'Eucharist of the Last Supper' },
      { _type: 'object', _key: 'd3', label: 'Good Friday', value: 'The Liturgy of the day' },
      { _type: 'object', _key: 'd4', label: 'Easter Day', value: 'The first Eucharist of Easter' },
      { _type: 'object', _key: 'd5', label: 'Where', value: "Emmanuel & St Cuthbert's" },
    ],
  },
  {
    title: "Lenten Exhibition",
    slug: { _type: 'slug', current: 'lenten-exhibition' },
    category: "Art & Exhibition",
    date: "Passion Sunday — Good Friday · 2026",
    sortDate: "2026-03-22",
    location: "Emmanuel Church, NW6",
    deck: "An exhibition open in the church through the closing weeks of Lent — a space to pause, look and reflect.",
    summary: "An exhibition open in the church through the closing weeks of Lent — a space to pause, look and reflect on the journey towards the cross.",
    featured: false,
    thumbnailUrl: "https://i0.wp.com/emmanuelnw6.com/wp-content/uploads/2026/03/Exhibition-Sign-scaled.png?w=720",
    lede: "A quiet space within the church to pause and reflect as we travel together towards the cross.",
    body: [
      { _type: 'block', _key: 'b1', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's1', text: "Through the closing weeks of Lent, an exhibition is open within the church — a quiet space to pause, look and reflect as Holy Week draws near.", marks: [] }] },
      { _type: 'block', _key: 'b2', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's2', text: "The exhibition is open from Passion Sunday until Good Friday. All are welcome to visit during the church's opening hours; do ask a member of the clergy if you would like to know more.", marks: [] }] },
    ],
    posters: [
      { _type: 'object', _key: 'p1', url: "https://i0.wp.com/emmanuelnw6.com/wp-content/uploads/2026/03/Exhibition-Sign-scaled.png?w=1000", alt: "Lenten exhibition poster" },
    ],
    detailRows: [
      { _type: 'object', _key: 'd1', label: 'Opens', value: 'Passion Sunday' },
      { _type: 'object', _key: 'd2', label: 'Closes', value: 'Good Friday' },
      { _type: 'object', _key: 'd3', label: 'Where', value: 'Emmanuel Church' },
      { _type: 'object', _key: 'd4', label: 'Admission', value: 'Free — all welcome' },
    ],
  },
  {
    title: "Advent Prayers in the Lady Chapel",
    slug: { _type: 'slug', current: 'advent-prayers' },
    category: "Advent · Quiet Prayer",
    date: "December 2025",
    sortDate: "2025-12-01",
    location: "Emmanuel Church, NW6",
    deck: "A gentle, quiet space for prayer through Advent — for anyone carrying loneliness, loss or simply weariness.",
    summary: "Amid the busyness and the twinkling lights, we keep a quiet space in the Lady Chapel for prayer and stillness.",
    featured: false,
    thumbnailUrl: "https://i0.wp.com/emmanuelnw6.com/wp-content/uploads/2025/12/Lady-Chapel-Advent-Prayers-1.png?w=720",
    lede: "Amid the busyness and the twinkling lights, a place to be still and to wait with hope.",
    body: [
      { _type: 'block', _key: 'b1', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's1', text: "Advent and Christmas can be a difficult time. In the midst of the busyness and the twinkling lights, some of us may be feeling the pain of loneliness, loss, or simply weariness.", marks: [] }] },
      { _type: 'block', _key: 'b2', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's2', text: "We keep a quiet, gentle space in the Lady Chapel through Advent — a place to bring whatever you are carrying, and to wait in hope for the coming of Christ.", marks: [] }] },
    ],
    posters: [
      { _type: 'object', _key: 'p1', url: "https://i0.wp.com/emmanuelnw6.com/wp-content/uploads/2025/12/Lady-Chapel-Advent-Prayers-1.png?w=1000", alt: "Advent Prayers in the Lady Chapel poster" },
    ],
    detailRows: [
      { _type: 'object', _key: 'd1', label: 'When', value: 'Through Advent' },
      { _type: 'object', _key: 'd2', label: 'Where', value: 'The Lady Chapel, Emmanuel' },
      { _type: 'object', _key: 'd3', label: 'For', value: 'Anyone seeking quiet & prayer' },
    ],
  },
  {
    title: "St Nicholas Workshop for Kids",
    slug: { _type: 'slug', current: 'st-nicholas-workshop' },
    category: "Children & Families",
    date: "December 2025",
    sortDate: "2025-12-06",
    location: "Emmanuel Church, NW6",
    deck: "Advent crafts, the story of St Nick, and the enthronement of our new Child Bishop.",
    summary: "Advent crafts, the story of St Nick, and the enthronement of our new Child Bishop — a joyful morning for children of all ages.",
    featured: false,
    thumbnailUrl: "https://i0.wp.com/emmanuelnw6.com/wp-content/uploads/2025/12/St-Nicholas-Workshop-2025.png?w=720",
    lede: "A joyful morning for children of all ages as we begin our journey through Advent.",
    body: [
      { _type: 'block', _key: 'b1', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's1', text: "A joyful morning for children of all ages: Advent crafts, the story of St Nicholas — the saint behind Father Christmas — and the enthronement of our new Child Bishop.", marks: [] }] },
      { _type: 'block', _key: 'b2', style: 'normal', markDefs: [], children: [{ _type: 'span', _key: 's2', text: "Each year we choose a Child Bishop, who works with the ministry team to lead prayers and worship at our special festivals through the year. Come and join the fun!", marks: [] }] },
    ],
    posters: [
      { _type: 'object', _key: 'p1', url: "https://i0.wp.com/emmanuelnw6.com/wp-content/uploads/2025/12/St-Nicholas-Workshop-2025.png?w=1000", alt: "St Nicholas Workshop for Kids poster" },
    ],
    detailRows: [
      { _type: 'object', _key: 'd1', label: 'For', value: 'Children of all ages' },
      { _type: 'object', _key: 'd2', label: 'What', value: 'Advent crafts & the story of St Nick' },
      { _type: 'object', _key: 'd3', label: 'Plus', value: 'Enthronement of the Child Bishop' },
      { _type: 'object', _key: 'd4', label: 'Where', value: 'Emmanuel Church' },
    ],
  },
]

async function run() {
  console.log('Importing events...')
  for (const ev of events) {
    await client.create({ _type: 'event', ...ev })
    console.log(`  ✓ ${ev.title}`)
  }
  console.log('\n✅ All events imported.')
}

run().catch(err => { console.error(err); process.exit(1) })
