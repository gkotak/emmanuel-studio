import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'person',
  title: 'Who\'s Who',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full name',
      description: 'e.g. "Revd Dr Catriona Laing"',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / title',
      description: 'e.g. "Vicar" or "Curate"',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'group',
      title: 'Group',
      description: 'Which section of the Who\'s Who page does this person appear under?',
      type: 'string',
      options: {
        list: [
          {title: 'Clergy', value: 'clergy'},
          {title: 'Churchwardens', value: 'churchwardens'},
          {title: 'Parish Staff', value: 'staff'},
          {title: 'PCC Officers', value: 'pcc'},
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      description: 'A short bio shown on the Who\'s Who page.',
      type: 'array',
      of: [{type: 'block', styles: [{title: 'Normal', value: 'normal'}], marks: {decorators: [{title: 'Italic', value: 'em'}]}}],
    }),
    defineField({
      name: 'email',
      title: 'Email address',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      description: 'Lower numbers appear first within the group.',
      type: 'number',
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'role', media: 'photo'},
  },
})
