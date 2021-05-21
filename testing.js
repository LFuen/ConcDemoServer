const colors = [
  "Color1", 
  "Color2",
  "Color3", 
  "Color4",
  "Color5", 
  "Color6",
  "Color7", 
  "Color8",
  "Color9", 
  "Color10",
  "Color11", 
  "Color12",
];

const products = [
  "Product1", 
  "Product2",
  "Product3", 
  "Product4",
  "Product5", 
  "Product6",
  "Product7", 
  "Product8",
  "Product9", 
  "Product10",
  "Product11", 
  "Product12",
  "Product13",
  "Product14", 
  "Product15",
  "Product16", 
  "Product17",
];

let phaseArray = ["In Production", "Produced", "In Stock"];

let orderMap = "";

for (let i = 0, h = 1; i < colors.length; i++) {
  for (let j = 0; j < products.length; j++) {
    for (let k = 0; k < phaseArray.length; k++) {
    orderMap += `'${colors[i]}, ${products[j]}, ${phaseArray[k]}': ${h},\n`;
    h++;
    }
  }
}

console.log(orderMap);

let dataToInsert = "";

for (let i = 0; i < colors.length; i++) {
  for (let j = 0; j < products.length; j++) {
    for (let k = 0; k < phaseArray.length; k++) {
      dataToInsert += `('${colors[i]}', '${products[j]}', 0, 0, '${phaseArray[k]}'), \n`;
    }
  }
}

console.log(dataToInsert)
// console.log(dataToInsert)
