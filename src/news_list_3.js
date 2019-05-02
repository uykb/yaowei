const topmenu = require('./jsons/topmenu.json')
const footer = require('./jsons/footer.json')

// Indicate the current page no.
// The only one parameter which need to be changed in the files 'news_list_nn.js".
const CURRENT_PAGE = 3;

// Top menu part
let template = require(`./views/topmenu.pug`);
document.write(template({data: topmenu}));

// Content part
// Part1
let part = require('./jsons/news/news_list_part1.json');
template = require(`./views/${part.widget}.pug`);
document.write(template({data: part.data}));
// Part2, The news list part.
part = require('./jsons/news/news_list_part2.json');
part.data.newslist_content = [];
for (let id in part.data.newslist) {
    part.data.newslist_content.push(require(`./jsons/news/${part.data.newslist[id]}.json`));
}
part.data.current_page = CURRENT_PAGE;
template = require(`./views/${part.widget}.pug`);
document.write(template({data: part.data}));

// Footer part
template = require(`./views/footer.pug`);
document.write(template({data: footer}));
