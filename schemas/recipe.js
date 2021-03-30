export default {
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'draft',
      title: 'Draft',
      type: 'boolean',
    },
    {
      name: 'slug',
      title: 'Recipe Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'ingredient' } }],
    },
    {
      name: 'optionalIngredients',
      title: 'Optional Ingredients',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'ingredient' } }],
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'category' },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'youtubeVideoId',
      title: 'Youtube video ID',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Recipe Body',
      type: 'blockContent',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
  },
}
