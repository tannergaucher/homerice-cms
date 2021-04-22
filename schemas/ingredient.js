export default {
  name: 'ingredient',
  title: 'Ingredient',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'ASIN',
      title: 'ASIN',
      type: 'string',
    },
    {
      name: 'externalHref',
      title: 'External Href',
      type: 'url',
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
      name: 'slug',
      title: 'Ingredient Slug',
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
