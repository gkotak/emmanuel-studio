// Upload the current /assets images into Sanity so they are editable in the
// Studio: creates a `siteImage` doc per named slot (pre-filled with the current
// photo), and fills the image field on existing page `sections`.
//
// Run: SANITY_TOKEN=xxx node import-images.js

import {createClient} from '@sanity/client'
import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ASSETS = path.join(__dirname, '..', 'site', 'assets')

const client = createClient({
  projectId: 'tqrrtmwq',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_TOKEN,
})

// Named slots for fixed page imagery (the hardcoded furniture).
const slots = [
  {key: 'home-hero', label: 'Home — hero banner', file: 'hero-congregation.jpg', alt: 'The congregation gathered for worship in the nave'},
  {key: 'home-welcome-group', label: 'Home — welcome group photo', file: 'welcome-group.jpg', alt: 'A large, diverse group of parishioners gathered together in the nave'},
  {key: 'home-nave', label: 'Home — pull-quote background', file: 'nave-wide.jpg', alt: 'The nave of Emmanuel Church'},
  {key: 'imnew-hero', label: "I'm New — hero banner", file: 'hero-congregation.jpg', alt: 'The congregation gathered for worship in the nave'},
  {key: 'weddings-1', label: 'Weddings — photo 1', file: 'wedding-bw.jpg', alt: 'A bride and groom standing together at the altar during their wedding ceremony, surrounded by candles and flowers'},
  {key: 'weddings-2', label: 'Weddings — photo 2', file: 'wedding-couple.jpg', alt: 'A newly married couple sharing a joyful moment in the church after their wedding'},
  {key: 'weddings-3', label: 'Weddings — photo 3', file: 'wedding-aisle.webp', alt: 'A bride and groom walking together down the aisle at Emmanuel'},
  {key: 'baptisms-aside-font', label: 'Baptisms — font photo (sidebar)', file: 'baptism-font.jpg', alt: 'A child being held at the font during a baptism'},
  {key: 'room-hire', label: 'Room Hire — main photo', file: 'room-hire-party.jpg', alt: "A children's party inflatable set up in the nave"},
  {key: 'food-bank', label: 'Food Bank — main photo', file: 'parish-supper.jpg', alt: 'Parishioners sharing a candlelit supper at a long table in the church'},
  {key: 'history-1', label: 'History — photo 1', file: 'nave-wide.jpg', alt: 'The nave of Emmanuel Church looking east toward the apse'},
  {key: 'history-2', label: 'History — photo 2', file: 'hero.jpg', alt: 'The interior of Emmanuel Church showing pointed arches and lancet windows'},
  {key: 'history-3', label: 'History — photo 3', file: 'baptism-font.jpg', alt: 'The stone font at Emmanuel Church with its tall pinnacled oak cover'},
]

// Section images to fill: {docId, sectionKey, file}
const sectionImages = [
  {docId: 'sitePage-baptisms', sectionKey: 'bap-feature', file: 'first-communion.jpg'},
  {docId: 'sitePage-music', sectionKey: 'mu-heritage', file: 'music-choir.jpg'},
  {docId: 'sitePage-music', sectionKey: 'mu-childrens', file: 'childrens-choir.jpg'},
  {docId: 'sitePage-children-families', sectionKey: 'cf-stayplay', file: 'children-families.jpg'},
]

// Upload each distinct file once and cache the asset id.
const assetCache = {}
async function uploadAsset(file) {
  if (assetCache[file]) return assetCache[file]
  const buf = fs.readFileSync(path.join(ASSETS, file))
  const asset = await client.assets.upload('image', buf, {filename: file})
  assetCache[file] = asset._id
  console.log(`  uploaded ${file} -> ${asset._id}`)
  return asset._id
}

const imageRef = (assetId) => ({_type: 'image', asset: {_type: 'reference', _ref: assetId}})

async function run() {
  console.log('Uploading assets…')

  // 1) siteImage slot docs
  const tx = client.transaction()
  for (const slot of slots) {
    const assetId = await uploadAsset(slot.file)
    tx.createOrReplace({
      _id: `siteImage-${slot.key}`,
      _type: 'siteImage',
      key: slot.key,
      label: slot.label,
      alt: slot.alt,
      image: imageRef(assetId),
    })
  }
  await tx.commit()
  console.log(`Created/updated ${slots.length} siteImage slots`)

  // 2) fill section image fields on existing sitePage docs
  for (const s of sectionImages) {
    const assetId = await uploadAsset(s.file)
    await client
      .patch(s.docId)
      .set({[`sections[_key=="${s.sectionKey}"].image`]: imageRef(assetId)})
      .commit()
    console.log(`  set image on ${s.docId} / ${s.sectionKey}`)
  }
  console.log(`Filled ${sectionImages.length} section image fields`)
}

run().catch((err) => { console.error(err); process.exit(1) })
