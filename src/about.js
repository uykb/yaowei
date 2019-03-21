const menu = require('./jsons/topmenu.json')
const footer = require('./jsons/footer.json')
const content = require('./jsons/about.json')

// Top menu part
var template = require(`./views/topmenu.pug`);
document.write(template({menu: menu}));

// Content part
for (index in content) {
    template = require(`./views/${content[index].widget}.pug`);
    document.write(template({data: content[index].data}));
}

// Footer part
template = require(`./views/footer.pug`);
document.write(template({footer: footer}));
