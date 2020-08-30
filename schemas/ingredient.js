export default {
  name: "ingredient",
  title: "Ingredient",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Text",
      type: "string",
    },
    {
      name: "ASIN",
      title: "ASIN",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "text",
    },
  },
};
