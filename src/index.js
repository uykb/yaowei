const page = require('./jsons/index.json')

for (index in page.parts) {
    var template = require(`./views/${page.parts[index].widget}.pug`);
    document.write(template({data: page.parts[index].data}));
}
