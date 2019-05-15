const topmenu = require('./jsons/topmenu.json')
const footer = require('./jsons/footer.json')
const content = require('./jsons/index.json')

// Top menu part
let template = require(`./views/topmenu.pug`);
document.write(template({data: topmenu}));

// Content part
for (let index in content) {
    // Manipulate widget 'news_autolist'.
    if (content[index].widget.search(/news_autolist/i) >= 0) {
        let newslistjson = require('./jsons/news/news_list.json');
        for (let id in newslistjson) {
            if (newslistjson[id].data.newslist !== undefined) {
                content[index].data.newslist = [];
                for (let newsid in newslistjson[id].data.newslist) {
                    if (newsid >= content[index].data.maxitems) break;
                    let newscontent = require(`./jsons/news/${newslistjson[id].data.newslist[newsid]}.json`)
                    content[index].data.newslist.push(
                        {
                            id: newslistjson[id].data.newslist[newsid],
                            title: newscontent.title,
                            preface: newscontent.preface,
                            datetime: newscontent.datetime
                        }
                    );
                }
            }
        }
    } 
    template = require(`./views/${content[index].widget}.pug`);
    document.write(template({data: content[index].data}));
}

// Footer part
template = require(`./views/footer.pug`);
document.write(template({data: footer}));
