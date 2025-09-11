import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'description', type: 'text' }),
    defineField({ name: 'logo', type: 'image' }),
    defineField({ name: 'defaultOG', type: 'image' }),
    defineField({
      name: 'social',
      type: 'object',
      fields: [
        { name: 'instagram', type: 'url', title: 'Instagram URL' },
        { name: 'email', type: 'string', title: 'Contact Email' },
      ],
    }),
  ],
})