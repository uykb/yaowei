const topmenu = require('./jsons/topmenu.json')
const footer = require('./jsons/footer.json')
const content = require('./jsons/news_list.json')

// Top menu part
var template = require(`./views/topmenu.pug`);
document.write(template({data: topmenu}));

// Content part
for (var index in content) {
    template = require(`./views/${content[index].widget}.pug`);
    if (content[index].data.newslist !== null) {
        // eslint-disable-next-line no-console
        console.log(index);
    }
    document.write(template({data: content[index].data}));
}

// Footer part
template = require(`./views/footer.pug`);
document.write(template({data: footer}));
