const content = require('./jsons/all_widgets.json')

// All Widgets Sample
for (var index in content) {
    var template = require(`./views/${content[index].widget}.pug`);
    document.write(template({data: content[index].data}));
}
