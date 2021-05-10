export default {
  name: 'place',
  title: 'Place',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'plusCode',
      title: 'Plus Code',
      type: 'string',
    },
    {
      title: 'Location',
      name: 'location',
      type: 'geopoint',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
  ],
}
