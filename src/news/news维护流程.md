### 第1步，维护新闻列表文件。
修改 **src/jsons/news/news_list.json文件**，在其 **data.newslist** 数组中，新增（或删除）新闻的 **文件名称代码**（**newsid**，如“news_20190500”）。该代码表示将生成（或删除）新闻列表页面中的新闻链接。

### 第2步，新建新闻内容文件。
以新闻的文件名称代码（**newsid**）在 **src/jsons/news/目录** 中建立新闻内容文件（格式为： **[newsid].json**，如“news_20190500.json”，可采用复制/粘帖方法建立新文件）。修改其中的新闻标题，时间，简介及内容。

### 第3步，维护Webpack自动生成新闻内容文件的列表。
修改 **webpack.build.files.index.js文件** 中的 **htmlfiles.news** 数组，该数组长度为本次需要新生成的文件数量，按需新增或修改为本次需要新生成的新闻内容文件（添加或修改文件代码名称newsid即可）。

### 第4步，维护新闻内容HTML页面内容JS文件。
对应 **webpack.build.files.index.js文件** 中的 **htmlfiles.news** 的数组元素，修改 **src/news/目录** 中相应的 **[newsid].js文件**。

### 第5步，生成HTML文件。
完成以上4步后，在命令行中输入
``
npm run build
``
生成 **dist目录** 下的HTML文件。

**注：新闻内容中的所有图片文件，保存在dist/assets/imgs/news/目录中为宜。**
