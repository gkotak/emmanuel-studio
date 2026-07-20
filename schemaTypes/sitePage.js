import {defineField, defineType} from 'sanity'

// Shared portable-text block config (bold/italic, links, h2/h3)
const richTextBlock = {
  type: 'block',
  styles: [
    {title: 'Normal', value: 'normal'},
    {title: 'Heading', value: 'h2'},
    {title: 'Sub-heading', value: 'h3'},
  ],
  marks: {
    decorators: [
      {title: 'Bold', value: 'strong'},
      {title: 'Italic', value: 'em'},
    ],
    annotations: [
      {
        name: 'link',
        type: 'object',
        title: 'Link',
        fields: [{name: 'href', type: 'url', title: 'URL'}],
      },
    ],
  },
}

const bodyField = (name, title, description) =>
  defineField({name, title, description, type: 'array', of: [richTextBlock]})

// ---- Flexible page sections -------------------------------------------------
// Each section is a typed block editors can add/reorder under any page. Keep the
// set small and generic so it survives redesigns and is reusable across pages.

const richTextSection = {
  name: 'richTextSection',
  title: 'Rich text',
  type: 'object',
  fields: [
    {name: 'eyebrow', title: 'Eyebrow (small label above)', type: 'string'},
    {name: 'heading', title: 'Heading', type: 'string'},
    {name: 'body', title: 'Body', type: 'array', of: [richTextBlock]},
  ],
  preview: {
    select: {title: 'heading', subtitle: 'eyebrow'},
    prepare: ({title, subtitle}) => ({title: title || 'Rich text', subtitle: subtitle || 'Rich text section'}),
  },
}

const cardGridSection = {
  name: 'cardGridSection',
  title: 'Card grid',
  type: 'object',
  description: 'A grid of small cards — service options, info cards, cost items, etc.',
  fields: [
    {name: 'eyebrow', title: 'Eyebrow (small label above)', type: 'string'},
    {name: 'heading', title: 'Heading', type: 'string'},
    {
      name: 'layout',
      title: 'Layout',
      type: 'string',
      description:
        'Cards: bordered boxes in a grid. Icon list: heading on the left, items with a check mark on the right.',
      options: {
        list: [
          {title: 'Cards (bordered boxes)', value: 'cards'},
          {title: 'Icon list (heading left, ticked items)', value: 'iconList'},
        ],
        layout: 'radio',
      },
      initialValue: 'cards',
    },
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'card',
          fields: [
            {name: 'eyebrow', title: 'Eyebrow / tag', type: 'string'},
            {name: 'title', title: 'Title', type: 'string'},
            {name: 'body', title: 'Body', type: 'text', rows: 3},
          ],
          preview: {
            select: {title: 'title', subtitle: 'eyebrow'},
            prepare: ({title, subtitle}) => ({title: title || 'Card', subtitle}),
          },
        },
      ],
    },
  ],
  preview: {
    select: {title: 'heading', cards: 'cards'},
    prepare: ({title, cards}) => ({
      title: title || 'Card grid',
      subtitle: `${(cards || []).length} card(s)`,
    }),
  },
}

const featureSection = {
  name: 'featureSection',
  title: 'Feature (image + text)',
  type: 'object',
  fields: [
    {name: 'eyebrow', title: 'Eyebrow (small label above)', type: 'string'},
    {name: 'heading', title: 'Heading', type: 'string'},
    {name: 'body', title: 'Body', type: 'array', of: [richTextBlock]},
    {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
    {name: 'imageAlt', title: 'Image alt text', type: 'string'},
    {name: 'reverse', title: 'Image on the right', type: 'boolean', initialValue: false},
  ],
  preview: {
    select: {title: 'heading', subtitle: 'eyebrow', media: 'image'},
    prepare: ({title, subtitle, media}) => ({title: title || 'Feature', subtitle, media}),
  },
}

const quoteSection = {
  name: 'quoteSection',
  title: 'Pull quote',
  type: 'object',
  fields: [
    {name: 'quote', title: 'Quote', type: 'text', rows: 3},
    {name: 'cite', title: 'Attribution / caption', type: 'string'},
  ],
  preview: {
    select: {title: 'quote', subtitle: 'cite'},
    prepare: ({title, subtitle}) => ({title: title || 'Pull quote', subtitle}),
  },
}

const peopleSection = {
  name: 'peopleSection',
  title: 'People',
  type: 'object',
  fields: [
    {name: 'eyebrow', title: 'Eyebrow (small label above)', type: 'string'},
    {name: 'heading', title: 'Heading', type: 'string'},
    {
      name: 'people',
      title: 'People',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'sectionPerson',
          fields: [
            {name: 'role', title: 'Role', type: 'string'},
            {name: 'name', title: 'Name', type: 'string'},
            {name: 'bio', title: 'Bio', type: 'text', rows: 4},
            {name: 'image', title: 'Photo', type: 'image', options: {hotspot: true}},
          ],
          preview: {
            select: {title: 'name', subtitle: 'role', media: 'image'},
            prepare: ({title, subtitle, media}) => ({title: title || 'Person', subtitle, media}),
          },
        },
      ],
    },
  ],
  preview: {
    select: {title: 'heading', people: 'people'},
    prepare: ({title, people}) => ({
      title: title || 'People',
      subtitle: `${(people || []).length} person(s)`,
    }),
  },
}

export const sectionTypes = [
  richTextSection,
  cardGridSection,
  featureSection,
  quoteSection,
  peopleSection,
]

export default defineType({
  name: 'sitePage',
  title: 'Site Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'pageId',
      title: 'Page',
      description: 'Which page this content belongs to.',
      type: 'string',
      readOnly: true,
      options: {
        list: [
          {title: 'Home', value: 'home'},
          {title: "I'm New", value: 'im-new'},
          {title: 'Weddings', value: 'weddings'},
          {title: 'Baptisms & Confirmation', value: 'baptisms'},
          {title: 'Funerals', value: 'funerals'},
          {title: 'Children & Families', value: 'children-families'},
          {title: 'Music & Choir', value: 'music'},
          {title: 'Contact', value: 'contact'},
          {title: 'Donations', value: 'donations'},
          {title: 'Service Times', value: 'service-times'},
        ],
      },
    }),
    defineField({
      name: 'headline',
      title: 'Page headline',
      description: 'The main H1 heading shown at the top of the page.',
      type: 'string',
    }),
    defineField({
      name: 'deck',
      title: 'Deck (subtitle)',
      description: 'The short sentence shown beneath the headline.',
      type: 'text',
      rows: 2,
    }),
    bodyField('introBody', 'Intro body', 'The main opening text on the page.'),
    defineField({
      name: 'sections',
      title: 'Page sections',
      description:
        'Structured content between the intro and the closing callout — cards, features, quotes and people. Add, remove and reorder as needed.',
      type: 'array',
      of: [
        {type: 'richTextSection'},
        {type: 'cardGridSection'},
        {type: 'featureSection'},
        {type: 'quoteSection'},
        {type: 'peopleSection'},
      ],
    }),
    defineField({
      name: 'calloutHeading',
      title: 'Callout heading',
      description: 'The heading in the dark callout/CTA band at the bottom of the page.',
      type: 'string',
    }),
    bodyField('calloutBody', 'Callout body', 'The text in the dark callout/CTA band.'),
  ],
  preview: {
    select: {title: 'pageId', subtitle: 'headline'},
    prepare({title, subtitle}) {
      const labels = {
        home: 'Home',
        'im-new': "I'm New",
        weddings: 'Weddings',
        baptisms: 'Baptisms & Confirmation',
        funerals: 'Funerals',
        'children-families': 'Children & Families',
        music: 'Music & Choir',
        contact: 'Contact',
        donations: 'Donations',
        'service-times': 'Service Times',
      }
      return {title: labels[title] || title, subtitle}
    },
  },
})
