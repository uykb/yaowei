!function(t){function e(e){for(var a,o,r=e[0],d=e[1],c=e[2],p=0,u=[];p<r.length;p++)o=r[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&u.push(s[o][0]),s[o]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);for(l&&l(e);u.length;)u.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],a=!0,r=1;r<i.length;r++){var d=i[r];0!==s[d]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=i[0]))}return t}var a={},s={3:0},n=[];function o(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=a,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(i,a,function(e){return t[e]}.bind(null,a));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window.webpackJsonp=window.webpackJsonp||[],d=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var l=d;n.push([14,0]),i()}({14:function(t,e,i){var a=i(4),s=i(5),n=i(15),o=i(2);for(var r in document.write(o({data:a})),n){if(n[r].widget.search(/news_autolist/i)>=0){var d=i(8);for(var c in d)if(void 0!==d[c].data.newslist)for(var l in n[r].data.newslist=[],d[c].data.newslist){if(l>=n[r].data.maxitems)break;var p=i(6)("./".concat(d[c].data.newslist[l],".json"));n[r].data.newslist.push({id:d[c].data.newslist[l],title:p.title,preface:p.preface,datetime:p.datetime})}}o=i(1)("./".concat(n[r].widget,".pug")),document.write(o({data:n[r].data}))}o=i(3),document.write(o({data:s}))},15:function(t){t.exports=JSON.parse('[{"widget":"widgets/carousel_01","data":[{"bg_image":"./assets/imgs/header-4.jpg","headline":"网络构建2019解决方案","descript":"采用最新安全技术和产品打造的覆盖全行业解决方案。<br>适用于传统制造业、重点国企、交通航空等大中型企业客户。","button_caption":"查看详情...","button_link":"solution_A201905.html"},{"bg_image":"./assets/imgs/header-3.jpg","headline":"新闻热点：年内发放5G牌照","descript":"随着5G技术研发和应用日益成熟，这一颠覆性移动通信技术的商用也指日可待。未来，它将给人们生活的方方面面带来不可估量的影响。","button_caption":"查看详情...","button_link":"news_20190507.html"},{"bg_image":"./assets/imgs/header-2.jpg","headline":"客户服务","descript":"如果您有任何关于产品或方案的疑问以及业务资讯，<br>可随时通过电话、邮件、QQ、微信等与我们联系。<br>我们将竭诚为您服务！","button_caption":"获取联系方式","button_link":"about.html#tag_LXFS"}]},{"widget":"solutions/solution_list_headline","data":{"bg_image":"./assets/imgs/header-1.jpg","headline":"全面的行业解决方案","descript":"按照等保条例构建的企业信息安全防护体系","solutionlist":[{"icon":"./assets/imgs/icon-1.svg","caption":"网络构建解决方案","id":"solution_A201905"},{"icon":"./assets/imgs/icon-2.svg","caption":"电商行业解决方案","id":"solution_B201901"},{"icon":"./assets/imgs/icon-3.svg","caption":"数据维护解决方案","id":""},{"icon":"./assets/imgs/icon-4.svg","caption":"更多解决方案...","id":"solution_list"}]}},{"widget":"products/product_list_cardlist","data":{"headline":"优秀的产品和技术","descript":"所有产品均符合国家信息安全法律法规及等保条例要求","productlist":[{"id":"product_F100CG2","image":"./assets/imgs/products/product_F100CG2_01.jpg","text":"F100CG2网络防火墙"},{"id":"product_USG6106","image":"./assets/imgs/products/product_USG6106_01.jpg","text":"USG6106网络防火墙"},{"id":"product_WVR1300L","image":"./assets/imgs/products/product_WVR1300L_01.jpg","text":"WVR1300L无线路由器"},{"id":"product_list","image":"./assets/imgs/products/product_SG1210P_01.jpg","text":"更多网络产品..."}]}},{"widget":"widgets/common_crew_list_02","data":{"headline":"值得信赖的服务团队","descript":"热忱、耐心、专业、敬业","crewlist":[{"title":"产品方案技术咨询","image":"./assets/imgs/avatar-4.jpg","name":"王文军"},{"title":"行业大客户支持","image":"./assets/imgs/avatar-5.jpg","name":"左小月"},{"title":"售后服务","image":"./assets/imgs/avatar-6.jpg","name":"刘雯"},{"title":"销售代理咨询","image":"./assets/imgs/avatar-3.jpg","name":"乔恩"}]}},{"widget":"news/news_autolist","data":{"headline":"最新企业资讯","descript":"连接我们，共创成功","maxitems":4,"linkid":"news_list_1","linkcaption":"更多新闻..."}},{"widget":"widgets/common_space","data":{"class":"bg-light pb-3 pb-lg-5"}}]')}});