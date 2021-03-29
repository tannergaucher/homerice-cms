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
  ],
  preview: {
    select: {
      title: 'text',
    },
  },
}
