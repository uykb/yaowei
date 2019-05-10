const topmenu = require('../jsons/topmenu.json')
const footer = require('../jsons/footer.json')

const PRODUCT_ID = 'product_WVR1300L'; // The same value as the filename without extension.

// Top menu part
let template = require(`../views/topmenu.pug`);
document.write(template({data: topmenu}));

// Content part
let part = require(`../jsons/products/${PRODUCT_ID}.json`);
for (let id in part) {
    template = require(`../views/${part[id].widget}.pug`);
    document.write(template({data: part[id].data}));
}

// Footer part
template = require(`../views/footer.pug`);
document.write(template({data: footer}));
