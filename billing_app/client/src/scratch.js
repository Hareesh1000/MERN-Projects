const items = require('./data/items.json');

console.log(items.item_category);

const data_category = [...new Set(items.map(item => item.item_category))];
console.log(data_category);
