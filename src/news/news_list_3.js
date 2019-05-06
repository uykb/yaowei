const topmenu = require('../jsons/topmenu.json')
const footer = require('../jsons/footer.json')

// Indicate the current page no.
// The only one parameter which need to be changed in the files 'news_list_nn.js".
const CURRENT_PAGE = 3;

// Top menu part
let template = require(`../views/topmenu.pug`);
document.write(template({data: topmenu}));

// Content part
let part = require('../jsons/news/news_list.json');
for (let id in part) {
    if (part[id].data.newslist !== undefined) {
        part[id].data.newslist_content = [];
        for (let newsid in part[id].data.newslist) {
            part[id].data.newslist_content.push(require(`../jsons/news/${part[id].data.newslist[newsid]}.json`));
        }
        part[id].data.current_page = CURRENT_PAGE;
    }
    template = require(`../views/${part[id].widget}.pug`);
    document.write(template({data: part[id].data}));
}

// Footer part
template = require(`../views/footer.pug`);
document.write(template({data: footer}));
