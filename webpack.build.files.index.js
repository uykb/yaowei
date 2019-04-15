const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlfiles = {
    single: [
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
    memo_for_news: [
        {
            entrypoints_ids: 'news_list.json',
            list_template: 'template_news_list.pug',
            item_template: 'template_news_item.pug',
            output_pattern: 'news_[id].html',	// [id] will be replaced by the specific content which was defined in json file.
            title_pattern: '新闻标题：【[title]】'	// [title] will be replaced by the specific content which was defined in json file.
        }
    ]
}

module.exports = {
    Entrypoints: function() {
        var epString = '';

        for (var index in htmlfiles.single) {
            epString += `"${htmlfiles.single[index].entrypoint_id}":"./src/${htmlfiles.single[index].entrypoint_id}.js",`;
        }
        if (epString !== '') {
            epString = epString.slice(0, epString.length-1)
        }

        return JSON.parse(`{${epString}}`)
    },
    Plugins: function() {
        var tempObj;
        var returnList = [];

        for (var index in htmlfiles.single) {
            tempObj = new HtmlWebpackPlugin({
                chunks: [
                  `${htmlfiles.single[index].entrypoint_id}`,
                ],
                favicon: './src/favicon.ico',
                filename: htmlfiles.single[index].output,
                inject: 'body',
                minify: true,
                template: `./src/views/${htmlfiles.single[index].template}`,
                title: htmlfiles.single[index].title
            });
            returnList.push(tempObj);
        }

        return returnList
    }
};
