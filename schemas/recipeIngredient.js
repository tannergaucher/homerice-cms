export default {
  name: "recipeIngredient",
  title: "Recipe Ingredient",
  type: "document",

  fields: [
    {
      name: "ingredient",
      title: "Ingredient",
      type: "reference",
      to: { type: "ingredient" },
    },
    {
      name: "quantity",
      title: "Quantity",
      type: "number",
    },
  ],
  preview: {
    select: {
      title: "ingredient.text",
    },
  },
};
