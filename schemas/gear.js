export default {
  name: 'gear',
  title: 'Gear',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'externalHref',
      title: 'External Href',
      type: 'url',
    },
    {
      name: 'ASIN',
      title: 'ASIN',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Gear Slug',
      type: 'slug',
      options: {
        source: 'text',
        maxLength: 96,
      },
    },
  ],
  preview: {
    select: {
      title: 'text',
    },
  },
}
