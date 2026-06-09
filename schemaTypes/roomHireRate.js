import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'roomHireRate',
  title: 'Room Hire Rates',
  type: 'document',
  fields: [
    defineField({
      name: 'room',
      title: 'Room name',
      description: 'e.g. "Darke Room" or "Whole Nave"',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'note',
      title: 'Note under room name',
      description: 'e.g. "Meetings only" or "Plus 10% for one-off hires"',
      type: 'string',
    }),
    defineField({
      name: 'rate',
      title: 'Rate',
      description: 'e.g. "£21 / hr" or "£260 / 3 hrs"',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'capacity',
      title: 'Max capacity (seated)',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Highlight this row',
      description: 'Highlights the row (used for the Children\'s Party package).',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      description: 'Lower numbers appear first in the table.',
      type: 'number',
    }),
  ],
  preview: {
    select: {title: 'room', subtitle: 'rate'},
  },
  orderings: [
    {
      title: 'Display order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})
