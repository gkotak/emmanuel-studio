import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'newsPost',
  title: 'News',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Headline',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Parish News', value: 'Parish News'},
          {title: 'Community', value: 'Community'},
          {title: 'Worship', value: 'Worship'},
          {title: 'Events', value: 'Events'},
          {title: 'Outreach', value: 'Outreach'},
          {title: 'Music', value: 'Music'},
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Date published',
      type: 'date',
      options: {dateFormat: 'D MMMM YYYY'},
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({name: 'alt', title: 'Alt text', type: 'string', description: 'Describe the image for screen readers.'}),
      ],
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      description: 'One or two sentences shown on the news index page.',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required().max(200),
    }),
    defineField({
      name: 'body',
      title: 'Article body',
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
              {name: 'link', type: 'object', title: 'Link', fields: [{name: 'href', type: 'url', title: 'URL'}]},
            ],
          },
        },
        {type: 'image', options: {hotspot: true}},
      ],
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'publishedAt', media: 'photo'},
  },
  orderings: [
    {
      title: 'Date, newest first',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
})
