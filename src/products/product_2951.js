const topmenu = require('../jsons/topmenu.json')
const footer = require('../jsons/footer.json')

const PRODUCT_ID = 'product_2951'; // The same value as the filename without extension.

// Top menu part
let template = require(`../views/topmenu.pug`);
document.write(template({data: topmenu}));

// Content part
let part = require(`../jsons/products/${PRODUCT_ID}.json`);
for (let id in part) {
    // Manipulate layout '_tabs_content'.
    if (part[id].widget.search(/_tabs_content/) > 0) {
        let tabsdata = [];
        for (let tabid in part[id].data) {
            let html_content = '';
            for (let id2 in part[id].data[tabid].tabdata) {
                template = require(`../views/${part[id].data[tabid].tabdata[id2].widget}.pug`);
                html_content += template({data: part[id].data[tabid].tabdata[id2].data});
            }
            tabsdata.push({tabname: part[id].data[tabid].tabname, tabhtml: html_content});
        }
        template = require(`../views/${part[id].widget}.pug`);
        document.write(template({data: tabsdata}));
    } else {
        template = require(`../views/${part[id].widget}.pug`);
        document.write(template({data: part[id].data}));
    }
}

// Footer part
template = require(`../views/footer.pug`);
document.write(template({data: footer}));
