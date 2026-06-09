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
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {dateFormat: 'D MMMM YYYY'},
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Time',
      description: 'e.g. "18:30" or "2:00pm"',
      type: 'string',
    }),
    defineField({
      name: 'endTime',
      title: 'End time (optional)',
      description: 'Leave blank if not needed.',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      description: 'e.g. "The Nave" or "Wood Room"',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Service', value: 'Service'},
          {title: 'Concert', value: 'Concert'},
          {title: 'Community', value: 'Community'},
          {title: 'Children & Families', value: 'Children & Families'},
          {title: 'Outreach', value: 'Outreach'},
          {title: 'Other', value: 'Other'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'photo',
      title: 'Photo (optional)',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'featured',
      title: 'Feature on home page',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'date'},
  },
  orderings: [
    {
      title: 'Date, soonest first',
      name: 'dateAsc',
      by: [{field: 'date', direction: 'asc'}],
    },
  ],
})
