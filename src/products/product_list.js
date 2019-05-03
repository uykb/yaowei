const topmenu = require('../jsons/topmenu.json')
const footer = require('../jsons/footer.json')

// Top menu part
let template = require(`../views/topmenu.pug`);
document.write(template({data: topmenu}));

// Content part
// Part1
let part = require('../jsons/products/product_list_part1.json');
template = require(`../views/${part.widget}.pug`);
document.write(template({data: part.data}));
// Part2, The news list part.


// Footer part
template = require(`../views/footer.pug`);
document.write(template({data: footer}));
