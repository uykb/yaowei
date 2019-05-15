const topmenu = require('./jsons/topmenu.json')
const footer = require('./jsons/footer.json')
const content = require('./jsons/about.json')

// Top menu part
let template = require(`./views/topmenu.pug`);
document.write(template({data: topmenu}));

// Content part
for (let index in content) {
    template = require(`./views/${content[index].widget}.pug`);
    document.write(template({data: content[index].data}));
}

// Footer part
template = require(`./views/footer.pug`);
document.write(template({data: footer}));
