const topmenu = require('../jsons/topmenu.json')
const footer = require('../jsons/footer.json')

// Indicate the current page no.
// The only one parameter which need to be changed in the files 'news_list_nn.js".
const PAGE_ID = 'news_20190501';
let content = require(`../jsons/news/${PAGE_ID}.json`);

// Top menu part
let template = require(`../views/topmenu.pug`);
document.write(template({data: topmenu}));

// Content part
// Part1
let part = require('../jsons/news/news_doc_title.json');
template = require(`../views/${part.widget}.pug`);
document.write(template({data: part.data}));
// Part2, The news list part.
template = require(`../views/${content.widget}.pug`);
document.write(template({data: content}));

// Footer part
template = require(`../views/footer.pug`);
document.write(template({data: footer}));
