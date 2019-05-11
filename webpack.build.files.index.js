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
    news_list_page_count: 5,    // the amount pages of news list.
    news: [
        // output news document file pattern: 'news_[id].html',
        // the item correspond to the same filename js and json file.
        "news_20190506",
        "news_20190505",
        "news_20190504",
        "news_20190503",
        "news_20190502",
        "news_20190501",
        "news_20190500",
        "news_20190401",
        "news_20190400"
    ],
    solutions: [
        {
            entrypoint_id: 'solution_list',
            template: './src/views/template_solution.pug',
            output: 'solution_list.html',
            title: '解决方案'
        },
        {
            entrypoint_id: 'solution_A201905',
            template: './src/views/template_solution.pug',
            output: 'solution_A201905.html',
            title: 'A201905解决方案'
        }
    ],
    products: [
        {
            entrypoint_id: 'product_list',
            template: './src/views/template_product.pug',
            output: 'product_list.html',
            title: '产品中心'
        },
        {
            entrypoint_id: 'product_ER3200G2',
            template: './src/views/template_product.pug',
            output: 'product_ER3200G2.html',
            title: 'ER3200G2千兆路由器'
        },
        {
            entrypoint_id: 'product_WVR1300L',
            template: './src/views/template_product.pug',
            output: 'product_WVR1300L.html',
            title: 'WVR1300L双频无线企业级路由器'
        },
        {
            entrypoint_id: 'product_F100CG2',
            template: './src/views/template_product.pug',
            output: 'product_F100CG2.html',
            title: 'WVR1300L双频无线企业级路由器'
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
        for (id in htmlfiles.news) {
            epString += `"${htmlfiles.news[id]}":"./src/news/${htmlfiles.news[id]}.js",`;
        }
        // ep for htmlfiles.solutions
        for (id in htmlfiles.solutions) {
            epString += `"${htmlfiles.solutions[id].entrypoint_id}":"./src/solutions/${htmlfiles.solutions[id].entrypoint_id}.js",`;
        }
        // ep for htmlfiles.products
        for (id in htmlfiles.products) {
            epString += `"${htmlfiles.products[id].entrypoint_id}":"./src/products/${htmlfiles.products[id].entrypoint_id}.js",`;
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
                  'custom-common'
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
                  'custom-common'
                ],
                favicon: './src/favicon.ico',
                filename: `news_list_${id}.html`,
                inject: 'body',
                minify: true,
                template: './src/views/template_news.pug',
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
                  'custom-common'
                ],
                favicon: './src/favicon.ico',
                filename: `${htmlfiles.news[id]}.html`,
                inject: 'body',
                minify: true,
                template: './src/views/template_news.pug',
                title: `企业新闻 - ${content.title}`
            });
            returnList.push(tempObj);
        }
        // HtmlWebpackPlugin for htmlfiles.solutions
        for (id in htmlfiles.solutions) {
            tempObj = new HtmlWebpackPlugin({
                chunks: [
                  `${htmlfiles.solutions[id].entrypoint_id}`,
                  'custom-common'
                ],
                favicon: './src/favicon.ico',
                filename: htmlfiles.solutions[id].output,
                inject: 'body',
                minify: true,
                template: htmlfiles.solutions[id].template,
                title: htmlfiles.solutions[id].title
            });
            returnList.push(tempObj);
        }
        // HtmlWebpackPlugin for htmlfiles.products
        for (id in htmlfiles.products) {
            tempObj = new HtmlWebpackPlugin({
                chunks: [
                  `${htmlfiles.products[id].entrypoint_id}`,
                  'custom-common'
                ],
                favicon: './src/favicon.ico',
                filename: htmlfiles.products[id].output,
                inject: 'body',
                minify: true,
                template: htmlfiles.products[id].template,
                title: htmlfiles.products[id].title
            });
            returnList.push(tempObj);
        }


        return returnList
    }
};
