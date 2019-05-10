const topmenu = require('../jsons/topmenu.json')
const footer = require('../jsons/footer.json')

const PRODUCT_ID = 'product_F100CG2'; // The same value as the filename without extension.

// Top menu part
let template = require(`../views/topmenu.pug`);
document.write(template({data: topmenu}));

// Content part
let part = require(`../jsons/products/${PRODUCT_ID}.json`);
for (let id in part) {
    // Manipulate layout '_AB_content'.
    if (part[id].widget.search(/_AB_content/) > 0) {
        let shortcut_list = [];
        let html_content = '';
        for (let subid in part[id].data) {
            template = require(`../views/${part[id].data[subid].widget}.pug`);
            if (part[id].data[subid].widget.search(/_AB_tag/) > 0) {
                shortcut_list.push(part[id].data[subid].data);
            }
            html_content += template({data: part[id].data[subid].data});
        }
        template = require(`../views/${part[id].widget}.pug`);
        document.write(template({data: {menu: shortcut_list, htmlcontent:html_content}}));
    } else {
        template = require(`../views/${part[id].widget}.pug`);
        document.write(template({data: part[id].data}));
    }
}

// Footer part
template = require(`../views/footer.pug`);
document.write(template({data: footer}));
