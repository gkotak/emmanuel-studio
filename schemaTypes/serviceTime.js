import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'serviceTime',
  title: 'Service Times',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Service name',
      description: 'e.g. "Sung Eucharist" or "Morning Prayer"',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'day',
      title: 'Day',
      type: 'string',
      options: {
        list: [
          {title: 'Sunday', value: 'Sunday'},
          {title: 'Monday', value: 'Monday'},
          {title: 'Tuesday', value: 'Tuesday'},
          {title: 'Wednesday', value: 'Wednesday'},
          {title: 'Thursday', value: 'Thursday'},
          {title: 'Friday', value: 'Friday'},
          {title: 'Saturday', value: 'Saturday'},
          {title: 'Mon–Thu', value: 'Mon–Thu'},
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Time',
      description: 'e.g. "10:30" or "18:30"',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'A short description of the service shown on the website.',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'group',
      title: 'Group',
      description: 'Which section does this service appear under?',
      type: 'string',
      options: {
        list: [
          {title: 'Sundays', value: 'sunday'},
          {title: 'In the week', value: 'weekday'},
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      description: 'Lower numbers appear first within the group.',
      type: 'number',
    }),
    defineField({
      name: 'active',
      title: 'Show on website',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'time'},
    prepare({title, subtitle}) {
      return {title, subtitle: subtitle ? `${subtitle}` : ''}
    },
  },
  orderings: [
    {
      title: 'Display order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
})
