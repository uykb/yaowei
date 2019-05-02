const HtmlWebpackPlugin = require('html-webpack-plugin')

// The List of html files that need to be generated.
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
        'news_list_1',
        'news_list_2',
        'news_list_3'
    ],
    news: [
        // output news document file pattern: 'news_[id].html',
        "news_20190500", // the 1st item correspond to the template file 'new_doc_1.js',
        "news_20190401", // the 2nd item correspond to the template file 'new_doc_2.js',
        "news_20190400" // the 3rd item correspond to the template file 'new_doc_3.js', etc.
    ]
}

module.exports = {
    Entrypoints: function() {
        var epString = '';
        var fileid = 0;

        // ep for htmlfiles.index
        for (var id in htmlfiles.index) {
            epString += `"${htmlfiles.index[id].entrypoint_id}":"./src/${htmlfiles.index[id].entrypoint_id}.js",`;
        }
        // ep for htmlfiles.news_list
        for (id in htmlfiles.news_list) {
            fileid = parseInt(id) + 1;
            epString += `"news_list_${fileid}":"./src/news/news_list_${fileid}.js",`;
        }
        // ep for htmlfiles.news
        for (id in htmlfiles.news) {
            fileid = parseInt(id) + 1;
            epString += `"${htmlfiles.news[id]}":"./src/news/news_doc_${fileid}.js",`;
        }

        if (epString !== '') {
            epString = epString.slice(0, epString.length-1)
        }

        return JSON.parse(`{${epString}}`)
    },
    Plugins: function() {
        var tempObj;
        var returnList = [];
        var fileid = 0;

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
            fileid = parseInt(id) + 1;
            tempObj = new HtmlWebpackPlugin({
                chunks: [
                  `news_list_${fileid}`,
                ],
                favicon: './src/favicon.ico',
                filename: `news_list_${fileid}.html`,
                inject: 'body',
                minify: true,
                template: './src/views/template_news_list.pug',
                title: `企业新闻 - 列表 - 第${fileid}页`
            });
            returnList.push(tempObj);
        }
        // HtmlWebpackPlugin for htmlfiles.news
        let content = '';
        for (id in htmlfiles.news) {
            fileid = parseInt(id) + 1;
            content = require(`./src/jsons/news/${htmlfiles.news[id]}.json`);
            tempObj = new HtmlWebpackPlugin({
                chunks: [
                  htmlfiles.news[id],
                ],
                favicon: './src/favicon.ico',
                filename: `${htmlfiles.news[id]}.html`,
                inject: 'body',
                minify: true,
                template: './src/views/template_news_doc.pug',
                title: `企业新闻 - ${content.title}`
            });
            returnList.push(tempObj);
        }

        return returnList
    }
};
