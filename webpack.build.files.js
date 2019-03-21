const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlfiles = {
    single: [
        {
            entrypoint_id: 'index',
            template: 'template_index.pug',
            output: 'index.html',
            title: '☀️网站首页'
        },
        {
            entrypoint_id: 'about',
            template: 'template_base.pug',
            output: 'about.html',
            title: '关于网站'
        }
    ],
    series: [
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

        for (index in htmlfiles.single) {
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

        for (index in htmlfiles.single) {
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
