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
        displayName: "base product price ( in PENCE ):",
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
        displayName: `double size price ( in PENCE ):
( leave blank if not required )`,
        inputType: "number",
        changeHandler: "handleChange",
        placeholder: "in pence",
        required: false,
      },
      {
        attributeName: "sizeOptionTriplePrice",
        displayName: `triple size price ( in PENCE ):
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
  {
    id: 2,
    collectionName: "chicken",
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
        displayName: "base product price ( in PENCE ):",
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
        attributeName: "hasSaltAndVinegarOption",
        displayName: "has salt & vinegar option?",
        inputType: "checkbox",
        changeHandler: "handleChangeCheckbox",
        required: false,
      },
      {
        attributeName: "hasChooseCanOption",
        displayName: "has choose can option?",
        inputType: "checkbox",
        changeHandler: "handleChangeCheckbox",
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
        attributeName: "hasSaladOption",
        displayName: "has salad option?",
        inputType: "checkbox",
        changeHandler: "handleChangeCheckbox",
        required: false,
      },
    ],
  },
  {
    id: 3,
    collectionName: "chips",
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
        displayName: "base product price ( in PENCE ):",
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

if selected, the large size price below must be given a value.`,
        inputType: "checkbox",
        changeHandler: "handleChangeCheckbox",
        required: false,
      },
      {
        attributeName: "sizeOptionLargePrice",
        displayName: `large size price ( in PENCE ):
( leave blank if not required )`,
        inputType: "number",
        changeHandler: "handleChange",
        placeholder: "in pence",
        required: false,
      },
      {
        attributeName: "hasSaltAndVinegarOption",
        displayName: "has salt & vinegar option?",
        inputType: "checkbox",
        changeHandler: "handleChangeCheckbox",
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
        attributeName: "hasCondimentsOption",
        displayName: "has condiments option?",
        inputType: "checkbox",
        changeHandler: "handleChangeCheckbox",
        required: false,
      },
      {
        attributeName: "numberOfCondimentsAvailable",
        displayName: `maximum number of condiments a customer can choose for this product?

Must have a value of 1 or 2 if the 'has condiments option?' has been checked above.
( leave blank if 'has condiments option?' above has NOT been checked ).`,
        inputType: "number",
        changeHandler: "handleChange",
        placeholder: "either 1 or 2",
        required: false,
      },
    ],
  },
  {
    id: 4,
    collectionName: "fish",
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
        displayName: "base product price ( in PENCE ):",
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

if selected, the large price below must be given a value.`,
        inputType: "checkbox",
        changeHandler: "handleChangeCheckbox",
        required: false,
      },
      {
        attributeName: "sizeOptionLargePrice",
        displayName: `large size price ( in PENCE ):
( leave blank if not required )`,
        inputType: "number",
        changeHandler: "handleChange",
        placeholder: "in pence",
        required: false,
      },
      {
        attributeName: "hasSaltAndVinegarOption",
        displayName: "has salt & vinegar option?",
        inputType: "checkbox",
        changeHandler: "handleChangeCheckbox",
        required: false,
      },
    ],
  },
  {
    id: 5,
    collectionName: "doner kebabs",
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
        displayName: "base product price ( in PENCE ):",
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
        attributeName: "hasSaladOption",
        displayName: "has salad option?",
        inputType: "checkbox",
        changeHandler: "handleChangeCheckbox",
        required: false,
      },
    ],
  },
  {
    id: 6,
    collectionName: "chicken kebabs",
    attributes: [
      {
        attributeName: "name",
        displayName: `product name:

we recommend including the word 'chicken' in the product name. 
this is to ensure that the customer is aware that there will be a choice of chicken meats  in the kebab.`,
        inputType: "text",
        changeHandler: "handleChange",
        placeholder: "the product's name",
        required: true,
      },
      {
        attributeName: "price",
        displayName: "base product price ( in PENCE ):",
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
        attributeName: "hasSaladOption",
        displayName: "has salad option?",
        inputType: "checkbox",
        changeHandler: "handleChangeCheckbox",
        required: false,
      },
    ],
  },
  {
    id: 7,
    collectionName: "mixed meats kebabs",
    attributes: [
      {
        attributeName: "name",
        displayName: `product name:

we recommend includind the word 'mixed' in the product name. 
this is to ensure that the customer is aware that there will be a choice of meats.`,
        inputType: "text",
        changeHandler: "handleChange",
        placeholder: "the product's name",
        required: true,
      },
      {
        attributeName: "price",
        displayName: "base product price ( in PENCE ):",
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
        attributeName: "hasSaladOption",
        displayName: "has salad option?",
        inputType: "checkbox",
        changeHandler: "handleChangeCheckbox",
        required: false,
      },
      {
        attributeName: "hasMeatsOption",
        displayName: `has meats option?

if you want the product to have all 3 meats available, make sure to leave the box below unchecked.

also, provide a description in the 'description' box above, so that the customer knows they are getting all 3 meats.`,
        inputType: "checkbox",
        changeHandler: "handleChangeCheckbox",
        required: false,
      },
      {
        attributeName: "numberOfMeatsAvailable",
        displayName: `maximum number of Meats a customer can choose for this product?

MUST have a value of 2 if the 'has Meats option?' has been checked above.
( leave blank if 'has meats option?' above has NOT been checked ).
 
if you provide the value of 2 here, you MUST check the 'has meats option' box above in order to show the meats choices to the customer.`,
        inputType: "number",
        changeHandler: "handleChange",
        placeholder: "",
        required: false,
      },
    ],
  },
  {
    id: 8,
    collectionName: "jacket potato",
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
        displayName: "base product price ( in PENCE ):",
        inputType: "number",
        changeHandler: "handleChange",
        placeholder: "base price in pence",
        required: true,
      },
    ],
  },
  {
    id: 9,
    collectionName: "chicken curry",
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
        displayName: "base product price ( in PENCE ):",
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

if selected, the large price below must be given a value.`,
        inputType: "checkbox",
        changeHandler: "handleChangeCheckbox",
        required: false,
      },
      {
        attributeName: "sizeOptionLargePrice",
        displayName: `large size price ( in PENCE ):
( leave blank if not required )`,
        inputType: "number",
        changeHandler: "handleChange",
        placeholder: "in pence",
        required: false,
      },
    ],
  },
  {
    id: 10,
    collectionName: "pies",
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
        displayName: "base product price ( in PENCE ):",
        inputType: "number",
        changeHandler: "handleChange",
        placeholder: "base price in pence",
        required: true,
      },
    ],
  },
  {
    id: 11,
    collectionName: "savouries",
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
        displayName: "base product price ( in PENCE ):",
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

if selected, the large price below must be given a value.`,
        inputType: "checkbox",
        changeHandler: "handleChangeCheckbox",
        required: false,
      },
      {
        attributeName: "sizeOptionLargePrice",
        displayName: `large size price ( in PENCE ):
( leave blank if not required )`,
        inputType: "number",
        changeHandler: "handleChange",
        placeholder: "in pence",
        required: false,
      },
      {
        attributeName: "hasSaltAndVinegarOption",
        displayName: "has salt & vinegar option?",
        inputType: "checkbox",
        changeHandler: "handleChangeCheckbox",
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
    ],
  },
  {
    id: 12,
    collectionName: "specials",
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
        displayName: "base product price ( in PENCE ):",
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
        attributeName: "sizeOptionMediumPrice",
        displayName: `medium size price ( in PENCE ):
( leave blank if not required )`,
        inputType: "number",
        changeHandler: "handleChange",
        placeholder: "in pence",
        required: false,
      },
      {
        attributeName: "sizeOptionLargePrice",
        displayName: `large size price ( in PENCE ):
( leave blank if not required )`,
        inputType: "number",
        changeHandler: "handleChange",
        placeholder: "in pence",
        required: false,
      },
      {
        attributeName: "sizeOptionDoublePrice",
        displayName: `double size price ( in PENCE ):
( leave blank if not required )`,
        inputType: "number",
        changeHandler: "handleChange",
        placeholder: "in pence",
        required: false,
      },
      {
        attributeName: "sizeOptionTriplePrice",
        displayName: `triple size price ( in PENCE ):
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
      {
        attributeName: "hasMeatsOption",
        displayName: `has meats option?

if the product includes all 3 meats, make sure to leave the box below unchecked and provide a description in the 'description' box above, so that the customer knows they are getting all 3 meats.`,
        inputType: "checkbox",
        changeHandler: "handleChangeCheckbox",
        required: false,
      },
      {
        attributeName: "numberOfMeatsAvailable",
        displayName: `maximum number of Meats a customer can choose for this product?

MUST have a value of 1, 2 or 3, if the 'has Meats option?' has been checked above.
( leave blank if 'has meats option?' above has NOT been checked ).
 
if you provide the value of 1, 2 or 3 here, you MUST check the 'has meats option' box above in order to show the meats choices to the customer.`,
        inputType: "number",
        changeHandler: "handleChange",
        placeholder: "",
        required: false,
      },
      {
        attributeName: "hasCondimentsOption",
        displayName: "has condiments option?",
        inputType: "checkbox",
        changeHandler: "handleChangeCheckbox",
        required: false,
      },
      {
        attributeName: "numberOfCondimentsAvailable",
        displayName: `maximum number of condiments a customer can choose for this product?

Must have a value of 1 or 2 if the 'has condiments option?' has been checked above.
( leave blank if 'has condiments option?' above has NOT been checked ).`,
        inputType: "number",
        changeHandler: "handleChange",
        placeholder: "either 1 or 2",
        required: false,
      },
      {
        attributeName: "hasSaltAndVinegarOption",
        displayName: "has salt & vinegar option?",
        inputType: "checkbox",
        changeHandler: "handleChangeCheckbox",
        required: false,
      },
      {
        attributeName: "hasChooseCanOption",
        displayName: "has choose can option?",
        inputType: "checkbox",
        changeHandler: "handleChangeCheckbox",
        required: false,
      },
      {
        attributeName: "hasChoosePieOption",
        displayName: `has choose pie option?

does the product come with the option to choose from a list of pies?`,
        inputType: "checkbox",
        changeHandler: "handleChangeCheckbox",
        required: false,
      },
    ],
  },
  {
    id: 13,
    collectionName: "extras",
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
        displayName: "base product price ( in PENCE ):",
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
        attributeName: "sizeOptionMediumPrice",
        displayName: `medium size price ( in PENCE ):
( leave blank if not required )`,
        inputType: "number",
        changeHandler: "handleChange",
        placeholder: "in pence",
        required: false,
      },
      {
        attributeName: "sizeOptionLargePrice",
        displayName: `large size price ( in PENCE ):
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
    ],
  },
  {
    id: 14,
    collectionName: "drinks",
    attributes: [
      {
        attributeName: "name",
        displayName: `product name:
we recommend adding 
'( bottle )' 
or 
'( can )' 
to the product name, so that the customer is aware of the drinks type.
for example: 
'lemonade ( bottle )'`,
        inputType: "text",
        changeHandler: "handleChange",
        placeholder: "the product's name",
        required: true,
      },
      {
        attributeName: "price",
        displayName: "base product price ( in PENCE ):",
        inputType: "number",
        changeHandler: "handleChange",
        placeholder: "base price in pence",
        required: true,
      },
    ],
  },
];
