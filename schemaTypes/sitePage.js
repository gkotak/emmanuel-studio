import {defineField, defineType} from 'sanity'

const bodyField = (name, title, description) =>
  defineField({
    name,
    title,
    description,
    type: 'array',
    of: [
      {
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
      },
    ],
  })

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
    bodyField('section2Body', 'Section 2 body', 'Body text for the second content section (if any).'),
    bodyField('section3Body', 'Section 3 body', 'Body text for the third content section (if any).'),
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
