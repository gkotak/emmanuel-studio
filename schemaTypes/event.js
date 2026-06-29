import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Events & Calendar',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL slug',
      description: 'Auto-generated from the title. Used in the page URL, e.g. "corpus-christi".',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      description: 'Shown as the kicker label on cards and the detail page.',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date (display)',
      description: 'Human-readable date shown on the page, e.g. "Sunday 7 June 2026" or "Palm Sunday — Easter Day · 2026"',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'sortDate',
      title: 'Sort date',
      description: 'Used to order events newest-first. Pick the first or main date of the event.',
      type: 'date',
      options: {dateFormat: 'D MMMM YYYY'},
    }),
    defineField({
      name: 'location',
      title: 'Location',
      description: 'e.g. "Emmanuel Church, NW6"',
      type: 'string',
      initialValue: 'Emmanuel Church, NW6',
    }),
    defineField({
      name: 'deck',
      title: 'Short description (deck)',
      description: 'One sentence shown under the headline on both the card and the detail page header.',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Card summary',
      description: 'Two sentences shown on the events index card. Can match the deck or be slightly different.',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'featured',
      title: 'Feature as the lead event',
      description: 'Shows this event as the large featured entry at the top of the events index page. Only one event should be featured at a time.',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'posters',
      title: 'Poster images',
      description: 'One or two poster images shown on the left of the detail page. Add a URL or upload.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'url', title: 'Image URL', description: 'Paste an external URL, or leave blank and upload below.', type: 'url'}),
            defineField({name: 'upload', title: 'Upload image', type: 'image', options: {hotspot: false}}),
            defineField({name: 'alt', title: 'Alt text', type: 'string'}),
          ],
          preview: {select: {title: 'alt', media: 'upload'}},
        },
      ],
    }),
    defineField({
      name: 'lede',
      title: 'Opening paragraph (lede)',
      description: 'The italic opening sentence shown at the top of the article body.',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'body',
      title: 'Event description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'detailRows',
      title: 'Detail rows',
      description: 'The key facts table on the detail page — e.g. Date, Where, Bring, etc.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Label', type: 'string'}),
            defineField({name: 'value', title: 'Value', type: 'string'}),
          ],
          preview: {select: {title: 'label', subtitle: 'value'}},
        },
      ],
    }),
    defineField({
      name: 'thumbnailUrl',
      title: 'Card thumbnail URL',
      description: 'Image shown on the event card on the index page.',
      type: 'url',
    }),
    defineField({
      name: 'thumbnailUpload',
      title: 'Card thumbnail upload',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'date', media: 'thumbnailUpload'},
  },
  orderings: [
    {
      title: 'Date, newest first',
      name: 'sortDateDesc',
      by: [{field: 'sortDate', direction: 'desc'}],
    },
  ],
})
