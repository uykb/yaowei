const topmenu = require('../jsons/topmenu.json')
const footer = require('../jsons/footer.json')

// Top menu part
let template = require(`../views/topmenu.pug`);
document.write(template({data: topmenu}));

// Content part
let part = require('../jsons/solutions/solution_list.json');
for (let id in part) {
    template = require(`../views/${part[id].widget}.pug`);
    document.write(template({data: part[id].data}));
}

// Footer part
template = require(`../views/footer.pug`);
document.write(template({data: footer}));
