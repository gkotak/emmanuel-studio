// One-time import script — populates Sanity with content from the static HTML
// Run with: node import-content.js

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'tqrrtmwq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
})

// ── Service Times ─────────────────────────────────────────────────────────────
const serviceTimes = [
  { name: 'Said Eucharist (BCP)', day: 'Sunday', time: '8:00', group: 'sunday', order: 1, description: 'Said according to the Book of Common Prayer. This short, 30-minute service offers a quiet, reflective start to the week.', active: true },
  { name: 'Joyful Noise Eucharist', day: 'Sunday', time: '9:15', group: 'sunday', order: 2, description: 'A lively celebration of the Mass designed for pre-school children and their families. Harin leads our music on the guitar and brings wonderful joy and energy to this service! Joyful Noise does not take place during the school summer holidays.', active: true },
  { name: 'Sung Eucharist', day: 'Sunday', time: '10:30', group: 'sunday', order: 3, description: "Our more traditional celebration of the Eucharist with music led by our parish choir. During term time our Children's Church and Youth Church meet during the service. On the first Sunday of the month the whole congregation gathers for All Age Worship, and on the third Sunday our children and youth meet for Forest Church in the garden.", active: true },
  { name: 'Morning Prayer', day: 'Mon–Thu', time: '9:00', group: 'weekday', order: 4, description: 'A 20-minute service of prayer and Bible readings to start the day. All are welcome to join in person.', active: true },
  { name: 'School Collective Worship', day: 'Monday', time: '14:30', group: 'weekday', order: 5, description: 'Emmanuel School join us for church once a week. On the first Monday of the month we celebrate the Eucharist together.', active: true },
  { name: 'Contemplative Eucharist', day: 'Monday', time: '18:30', group: 'weekday', order: 6, description: 'A simple, quiet service with plenty of time for silence and contemplative prayer. All are welcome to join for Silent Prayer from 6:15pm.', active: true },
  { name: 'Healing Eucharist', day: 'Wednesday', time: '12:30', group: 'weekday', order: 7, description: 'A said Eucharist with a focus on prayers of healing: for ourselves, the world, and those who have commended themselves to our prayers. Healing prayers and anointing are offered at this service.', active: true },
]

// ── Who's Who ────────────────────────────────────────────────────────────────
const people = [
  {
    name: 'The Reverend Dr Catriona Laing', role: 'Vicar', group: 'clergy', order: 1,
    bio: "Catriona has been our vicar since September 2023. She discerned God's call to ordained ministry whilst working on humanitarian projects in Iraq in 2004. Whilst pursuing her call to the priesthood she helped to establish the Cambridge Inter-Faith Programme.\n\nHer work in inter-faith relations later inspired the subject of her PhD: a study of Muslim–Christian relations with a particular emphasis on prayer. Catriona's vocation continues to be shaped by a concern for inter-faith relations and a deep commitment to social justice. She now combines these with a strong sense of her calling as a parish priest — to encourage and support learning and discipleship within the congregation and community she serves.",
  },
  { name: 'Mthr Melissa Dickinson', role: 'Associate Curate', group: 'clergy', order: 2, bio: 'A fuller bio will follow shortly.' },
  { name: 'Mthr Clemency Flitter', role: 'Associate Priest', group: 'clergy', order: 3, bio: 'Clemency joined us in 2025; a fuller bio will follow shortly.' },
  { name: 'Will Rose', role: 'Director of Music', group: 'staff', order: 4, bio: 'Will studied Music at Queens\' College, Cambridge, where he was a Choral Scholar, winning several prestigious conducting prizes. Away from Emmanuel he is a music teacher at a top London secondary school.' },
  { name: 'Claire Hammett', role: "Children's Champion", group: 'staff', order: 5, bio: 'Brief bio to follow.' },
  { name: 'To be confirmed', role: 'Churchwardens', group: 'churchwardens', order: 6, bio: 'Churchwarden names and bios to be added.' },
  { name: 'To be confirmed', role: 'Operations Manager', group: 'staff', order: 7, bio: 'Bio to be taken from the current website.' },
  { name: 'To be confirmed', role: 'Youth Worker', group: 'staff', order: 8, bio: 'Name and bio to be added.' },
]

// ── Room Hire Rates ───────────────────────────────────────────────────────────
const roomRates = [
  { room: 'Darke Room', note: 'Meetings only', rate: '£21 / hr', capacity: 14, featured: false, order: 1 },
  { room: 'Wood Room', note: 'Plus 10% for one-off hires', rate: '£36 / hr', capacity: 30, featured: false, order: 2 },
  { room: 'Julian Room', note: 'Plus 10% for one-off hires', rate: '£36 / hr', capacity: 26, featured: false, order: 3 },
  { room: 'Rear Nave', note: 'Plus 10% for one-off hires', rate: '£46 / hr', capacity: 120, featured: false, order: 4 },
  { room: 'Whole Nave', note: 'Including Rear Nave · plus 10% for one-off hires', rate: '£53 / hr', capacity: 350, featured: false, order: 5 },
  { room: 'Concert', note: 'Includes Whole Nave', rate: '£68 / hr', capacity: 350, featured: false, order: 6 },
  { room: "Children's Party", note: 'Rear Nave & Wood Room', rate: '£260 / 3 hrs  or  £335 / 4 hrs', capacity: 120, featured: true, order: 7 },
]

function toBlocks(text) {
  return text.split('\n\n').filter(Boolean).map(para => ({
    _type: 'block',
    _key: Math.random().toString(36).slice(2),
    style: 'normal',
    children: [{ _type: 'span', _key: Math.random().toString(36).slice(2), text: para, marks: [] }],
    markDefs: [],
  }))
}

async function run() {
  console.log('Importing service times...')
  for (const s of serviceTimes) {
    await client.create({ _type: 'serviceTime', ...s })
    console.log(`  ✓ ${s.name}`)
  }

  console.log('\nImporting who\'s who...')
  for (const p of people) {
    const { bio, ...rest } = p
    await client.create({ _type: 'person', ...rest, bio: toBlocks(bio) })
    console.log(`  ✓ ${p.name}`)
  }

  console.log('\nImporting room hire rates...')
  for (const r of roomRates) {
    await client.create({ _type: 'roomHireRate', ...r })
    console.log(`  ✓ ${r.room}`)
  }

  console.log('\n✅ All content imported successfully.')
}

run().catch(err => { console.error(err); process.exit(1) })
