export default {
  name: 'post',
  title: 'Post',
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
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
    },
    {
      name: 'youtubeVideoId',
      title: 'YouTube video ID',
      type: 'string',
    },
    {
      name: 'videoMusicCredit',
      title: 'Video Music Credit',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Post Body',
      type: 'blockContent',
    },
    {
      name: 'gear',
      title: 'Gear',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'gear' } }],
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
