const colors = [
  'Color 1',
  'Color 2',
  'Color 3',
  'Color 4',
  'Color 5',
  'Color 6',
  'Color 7',
  'Color 8',
  'Color 9',
  'Color 10',
  'Color 11',
  'Color 12',
  'Color 13',
  'Color 14',
  'Color 15',
  'Color 16',
  'Color 17',
  'Color 18',
  'Color 19'
];

const products = [
  'Product 1',
  'Product 2',
  'Product 3',
  'Product 4',
  'Product 5',
  'Product 6',
  'Product 7',
  'Product 8',
  'Product 9',
  'Product 10',
  'Product 11',
  'Product 12',
  'Product 13',
  'Product 14',
  'Product 15',
  'Product 16',
  'Product 17',
  'Product 18',
  'Product 19',
  'Product 20',
  'Product 21',
  'Product 22',
  'Product 23',
  'Product 24',
  'Product 25',
  'Product 26',
  'Product 27',
  'Product 28',
  'Product 29',
  'Product 30',
  'Product 31',
  'Product 32',
  'Product 33',
  'Product 34'
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

// console.log(dataToInsert)
// console.log(dataToInsert)
