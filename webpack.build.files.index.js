const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlfiles = {
    index: [
        {
            entrypoint_id: 'news_list',
            template: 'template_news_list.pug',
            output: 'news_list.html',
            title: '企业新闻'
        },
        {
            entrypoint_id: 'index',
            template: 'template_index.pug',
            output: 'index.html',
            title: '网站首页'
        },
        {
            entrypoint_id: 'about',
            template: 'template_about.pug',
            output: 'about.html',
            title: '关于网站'
        },
        {
            entrypoint_id: 'all_widgets',
            template: 'template_all_widgets.pug',
            output: 'all_widgets.html',
            title: '☀️网页小部件展示☀️'
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
                template: `./src/views/${htmlfiles.index[id].template}`,
                title: htmlfiles.index[id].title
            });
            returnList.push(tempObj);
        }
        // HtmlWebpackPlugin for htmlfiles.news
        // do something here...

        return returnList
    }
};
