const HtmlWebpackPlugin = require('html-webpack-plugin')

// List the html files need to be generated.
const htmlfiles = {
    index: [
        {
            entrypoint_id: 'index',
            template: './src/views/template_index.pug',
            output: 'index.html',
            title: '网站首页'
        },
        {
            entrypoint_id: 'about',
            template: './src/views/template_about.pug',
            output: 'about.html',
            title: '关于网站'
        },
        {
            entrypoint_id: 'all_widgets',
            template: './src/views/template_all_widgets.pug',
            output: 'all_widgets.html',
            title: '☀️网页小部件展示☀️'
        }
    ],
    news_list: [
        {
            entrypoint_id: 'news_list_1',
            template: './src/views/template_news_list.pug',
            listjsonfile: './src/jsons/news/news_list_part2.json',   // indicate the json file where the news list saved in.
            output: 'news_list_1.html',
            title: '企业新闻 - 第1页'
        },
        {
            entrypoint_id: 'news_list_2',
            template: './src/views/template_news_list.pug',
            listjsonfile: './src/jsons/news/news_list_part2.json',   // indicate the json file where the news list saved in.
            output: 'news_list_2.html',
            title: '企业新闻 - 第2页'
        },
        {
            entrypoint_id: 'news_list_3',
            template: './src/views/template_news_list.pug',
            listjsonfile: './src/jsons/news/news_list_part2.json',   // indicate the json file where the news list saved in.
            output: 'news_list_3.html',
            title: '企业新闻 - 第3页'
        }
    ],
    news: [
        // output news file pattern: 'news_[id].html',
        "news_20190401",
        "news_20190400"
    ]
}

module.exports = {
    Entrypoints: function() {
        var epString = '';

        // ep for htmlfiles.index
        for (var id in htmlfiles.index) {
            epString += `"${htmlfiles.index[id].entrypoint_id}":"./src/${htmlfiles.index[id].entrypoint_id}.js",`;
        }
        // ep for htmlfiles.news_list
        for (id in htmlfiles.news_list) {
            epString += `"${htmlfiles.news_list[id].entrypoint_id}":"./src/${htmlfiles.news_list[id].entrypoint_id}.js",`;
        }
        // ep for htmlfiles.news
        // do something here...

        if (epString !== '') {
            epString = epString.slice(0, epString.length-1)
        }

        return JSON.parse(`{${epString}}`)
    },
    Plugins: function() {
        var tempObj;
        var returnList = [];

        // HtmlWebpackPlugin for htmlfiles.index
        for (var id in htmlfiles.index) {
            tempObj = new HtmlWebpackPlugin({
                chunks: [
                  `${htmlfiles.index[id].entrypoint_id}`,
                ],
                favicon: './src/favicon.ico',
                filename: htmlfiles.index[id].output,
                inject: 'body',
                minify: true,
                template: htmlfiles.index[id].template,
                title: htmlfiles.index[id].title
            });
            returnList.push(tempObj);
        }
        // HtmlWebpackPlugin for htmlfiles.news_list
        for (id in htmlfiles.news_list) {
            tempObj = new HtmlWebpackPlugin({
                chunks: [
                  `${htmlfiles.news_list[id].entrypoint_id}`,
                ],
                favicon: './src/favicon.ico',
                filename: htmlfiles.news_list[id].output,
                inject: 'body',
                minify: true,
                template: htmlfiles.news_list[id].template,
                title: htmlfiles.news_list[id].title
            });
            returnList.push(tempObj);
        }
        // HtmlWebpackPlugin for htmlfiles.news
        // do something here...

        return returnList
    }
};
