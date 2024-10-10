export const collectionsAttributeData = [
  {
    id: 1,
    collectionName: "burgers",
    attributes: [
      {
        attributeName: "name",
        displayName: "product name:",
        inputType: "text",
        changeHandler: "handleChange",
        placeholder: "the product's name",
        required: true,
      },
      {
        attributeName: "price",
        displayName: "base product price:",
        inputType: "number",
        changeHandler: "handleChange",
        placeholder: "base price in pence",
        required: true,
      },
      {
        attributeName: "description",
        displayName: "description:",
        inputType: "text",
        changeHandler: "handleChange",
        placeholder: "omit if not required",
        required: false,
      },
      {
        attributeName: "hasSizeOption",
        displayName: `does the product have size options?

if selected, at least one size price below must be given a value.`,
        inputType: "checkbox",
        changeHandler: "handleChangeCheckbox",
        required: false,
      },
      {
        attributeName: "sizeOptionDoublePrice",
        displayName: `double size price:
( leave blank if not required )`,
        inputType: "number",
        changeHandler: "handleChange",
        placeholder: "in pence",
        required: false,
      },
      {
        attributeName: "sizeOptionTriplePrice",
        displayName: `triple size price:
( leave blank if not required )`,
        inputType: "number",
        changeHandler: "handleChange",
        placeholder: "in pence",
        required: false,
      },
      {
        attributeName: "hasSaucesOption",
        displayName: "has sauces option?",
        inputType: "checkbox",
        changeHandler: "handleChangeCheckbox",
        required: false,
      },
      {
        attributeName: "numberOfSaucesAvailable",
        displayName: `maximum number of sauces a customer can choose for this product?

Must have a value of 1 or 3 if the 'has sauces option?' has been checked above.
( leave blank if 'has sauces option?' above has NOT been checked ).`,
        inputType: "number",
        changeHandler: "handleChange",
        placeholder: "either 1 or 3",
        required: false,
      },
      {
        attributeName: "hasCheeseSliceOption",
        displayName: "has cheese slice option?",
        inputType: "checkbox",
        changeHandler: "handleChangeCheckbox",
        required: false,
      },
      {
        attributeName: "hasDonerMeatOption",
        displayName: "has doner meat option?",
        inputType: "checkbox",
        changeHandler: "handleChangeCheckbox",
        required: false,
      },
      {
        attributeName: "hasGratedCheeseOption",
        displayName: "has grated cheese option?",
        inputType: "checkbox",
        changeHandler: "handleChangeCheckbox",
        required: false,
      },
      {
        attributeName: "hasSaladOption",
        displayName: "has salad option?",
        inputType: "checkbox",
        changeHandler: "handleChangeCheckbox",
        required: false,
      },
    ],
  },
];
