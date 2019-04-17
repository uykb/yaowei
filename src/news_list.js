const topmenu = require('./jsons/topmenu.json')
const footer = require('./jsons/footer.json')

// Top menu part
let template = require(`./views/topmenu.pug`);
document.write(template({data: topmenu}));

// Content part
// Part1
let part = require('./jsons/news/news_list_part1.json');
template = require(`./views/${part.widget}.pug`);
document.write(template({data: part.data}));
// Part2
part = require('./jsons/news/news_list_part2.json');
part.data.newslist_content = [];
for (let id in part.data.newslist) {
    part.data.newslist_content.push(require(`./jsons/news/${part.data.newslist[id]}.json`));
}
template = require(`./views/${part.widget}.pug`);
document.write(template({data: part.data}));

// Footer part
template = require(`./views/footer.pug`);
document.write(template({data: footer}));
