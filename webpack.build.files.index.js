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
    news_list_page_count: 3,    // the amount pages of news list.
    news: [
        // output news document file pattern: 'news_[id].html',
        "news_20190500", // the 1st item correspond to the template file 'new_doc_1.js',
        "news_20190401", // the 2nd item correspond to the template file 'new_doc_2.js',
        "news_20190400" // the 3rd item correspond to the template file 'new_doc_3.js', etc.
    ],
    solition_list: [
        {
            entrypoint_id: 'solution_list',
            template: './src/views/template_solution_list.pug',
            output: 'solution_list.html',
            title: '解决方案'
        }
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
        for (id = 1; id <= htmlfiles.news_list_page_count; id++) {
            epString += `"news_list_${id}":"./src/news/news_list_${id}.js",`;
        }
        // ep for htmlfiles.news
        var fid = 0;
        for (id in htmlfiles.news) {
            fid = parseInt(id) + 1;
            epString += `"${htmlfiles.news[id]}":"./src/news/news_doc_${fid}.js",`;
        }
        // ep for htmlfiles.solution_list
        for (id in htmlfiles.solition_list) {
            epString += `"${htmlfiles.solition_list[id].entrypoint_id}":"./src/solutions/${htmlfiles.solition_list[id].entrypoint_id}.js",`;
        }

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
        for (id = 1; id <= htmlfiles.news_list_page_count; id++) {
            tempObj = new HtmlWebpackPlugin({
                chunks: [
                  `news_list_${id}`,
                ],
                favicon: './src/favicon.ico',
                filename: `news_list_${id}.html`,
                inject: 'body',
                minify: true,
                template: './src/views/template_news_list.pug',
                title: `企业新闻 - 列表 - 第${id}页`
            });
            returnList.push(tempObj);
        }
        // HtmlWebpackPlugin for htmlfiles.news
        let content = '';
        for (id in htmlfiles.news) {
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
        // HtmlWebpackPlugin for htmlfiles.index
        for (id in htmlfiles.solition_list) {
            tempObj = new HtmlWebpackPlugin({
                chunks: [
                  `${htmlfiles.solition_list[id].entrypoint_id}`,
                ],
                favicon: './src/favicon.ico',
                filename: htmlfiles.solition_list[id].output,
                inject: 'body',
                minify: true,
                template: htmlfiles.solition_list[id].template,
                title: htmlfiles.solition_list[id].title
            });
            returnList.push(tempObj);
        }

        return returnList
    }
};
