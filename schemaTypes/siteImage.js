import {defineField, defineType} from 'sanity'

// A named, replaceable image slot for fixed page imagery (hero banners,
// gallery photos, etc.) that isn't tied to an editable content block.
// The website falls back to the bundled /assets file if a slot is empty.
export default defineType({
  name: 'siteImage',
  title: 'Site Images',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'Slot',
      description: 'Which image on the site this replaces. Do not change.',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'label',
      title: 'Label',
      description: 'Where this image appears.',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'image',
      title: 'Image',
      description: 'Upload a new image to replace the one currently on the site.',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'alt',
      title: 'Alt text',
      description: 'Describes the image for screen readers and search engines.',
      type: 'string',
    }),
  ],
  preview: {
    select: {title: 'label', subtitle: 'key', media: 'image'},
    prepare: ({title, subtitle, media}) => ({title: title || subtitle, subtitle, media}),
  },
})
