// Single source of truth. Edit here. Entries marked TODO are placeholders.
export const product = {
  id: "sunoven-cooker",
  name: "SUNOVEN Solar Cooker",
  description: "A solar cooker for outdoor cooking. [TODO: confirm product description]",
  price: 0, // TODO: price in ZAR
  currency: "R",
  specs: [
    { label: "Energy source", value: "Sunlight" },
    { label: "Dimensions", value: null },
    { label: "Weight", value: null },
    { label: "Capacity", value: null },
    { label: "Included", value: null },
  ], // value: null renders as a highlighted placeholder
};
export const foods = ["Beef stew","Chicken stew","Beans","Rice","Sweet potatoes","Vegetables","Fish"];
export const steps = [
  { title: "Position", text: "Place the cooker where it receives direct sunlight." },
  { title: "Prepare", text: "Place your prepared food inside using the recommended cookware." },
  { title: "Cook", text: "Harness sunlight to cook your meal." },
];
export const benefits = [
  { title: "Sunlight is the energy", text: "A cooker that uses sunlight as its cooking energy source." },
  { title: "An outdoor alternative", text: "Another way to cook in outdoor environments." },
  { title: "No fuel while cooking", text: "No conventional cooking fuel is needed during solar operation." },
  { title: "Made accessible", text: "Designed to make outdoor cooking more accessible." },
];
