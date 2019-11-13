module.exports = function (name) {
    // switch...case... for pug template file.
    //   Intending to optimise webpack output files size.
    //   Because webpack will pack all files of the source folder 
    //   while using a variable value in command 'require'.
    switch(name) {
        case 'widgets/common_title_light':
            return require('../views/widgets/common_title_light.pug');
        case 'news/news_list_content':
            return require('../views/news/news_list_content.pug');
    }

    return require('../views/template_error.pug');
}
