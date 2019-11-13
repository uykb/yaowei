'''
    This is a Python3 file.

    Purpose: Generating news list json files which can be used for 'news_list_[n].js' and 'index.js'.

    Usage: python3 autogen_news_list.py
'''
import json

INPUT_INDEX_JSON = '../index.json'
INPUT_NEWSLIST_JSON = 'news_list.json'
OUTPUT_NEWS_FOR_INDEX_JSON = 'news_for_index.json'
OUTPUT_NEWS_LIST_JSON = 'news_list_[n].json'

# Get property 'news_autolist/maxitems' from file INPUT_INDEX_JSON
try:
    news_maxitems_for_index = 0
    with open(INPUT_INDEX_JSON) as fjson:
        index_json = json.load(fjson)
        for item in index_json:
            if item['widget'].find('news_autolist') >= 0:
                news_maxitems_for_index = item['data']['maxitems']
    print('>>> The maximum amount of news items for index page is %s.' % news_maxitems_for_index)
except IOError:
    print('IOError: [%s] Open file failed.' % INPUT_INDEX_JSON)
finally:
    fjson.close()

# Get properties 'news_list_content/newsperpage' and
# 'news_list_content/newslist' from file INPUT_NEWSLIST_JSON
try:
    newsperpage = 0
    newslist = []
    with open(INPUT_NEWSLIST_JSON) as fjson:
        news_list_json = json.load(fjson)
        for item in news_list_json:
            if item['widget'].find('news_list_content') >= 0:
                newsperpage = item['data']['newsperpage']
                newslist = item['data']['newslist']
    print('>>> The maximum amount of news items for each news-list page is %s.' % newsperpage)
    print('>>> The amount of news items in file [{}] is {}.'.format(INPUT_NEWSLIST_JSON, len(newslist)))
    '''
    id = 0
    for news_id in newslist:
        id += 1
        print('>>> #{:03d} news_id: [{}]'.format(id, news_id))
    '''
except IOError:
    print('IOError: [%s] Open file failed.' % INPUT_NEWSLIST_JSON)
finally:
    fjson.close()

# Generate file OUTPUT_NEWS_FOR_INDEX_JSON
print('>>>')
output_json = []
news_maxitems_for_index = len(newslist) if news_maxitems_for_index > len(newslist) else news_maxitems_for_index
for id in range(news_maxitems_for_index):
    try:
        with open('%s.json' % newslist[id], 'r', encoding='utf-8') as fin:
            news_json = json.load(fin)
            output_json.append(dict(
                id = newslist[id],
                title = news_json['title'],
                preface = news_json['preface'],
                datetime = news_json['datetime']
            ))
            print('>>> #{}: {{news_id: {}, title: {} ...}} added.'.format(id+1, newslist[id], news_json['title']))
    except IOError:
        print('IOError: [%s.json] Open file failed.' % newslist[id])
    finally:
        fin.close()
try:
    with open(OUTPUT_NEWS_FOR_INDEX_JSON, 'w', encoding='utf-8') as fout:
        json.dump(output_json, fout, ensure_ascii=False, indent=4)
        print('>>> Output file [%s] SUCCEED.' % OUTPUT_NEWS_FOR_INDEX_JSON)
except IOError:
    print('IOError: [%s] write file failed.' % OUTPUT_NEWS_FOR_INDEX_JSON)
finally:
    fout.close()

# Generate file series OUTPUT_NEWS_LIST_JSON
print('>>>')
page_id = 1
id = 0
output_json = []
output_filename = OUTPUT_NEWS_LIST_JSON.replace('[n]', str(page_id))
for newsid in newslist:
    id += 1
    try:
        with open('%s.json' % newsid, 'r', encoding='utf-8') as fin:
            news_json = json.load(fin)
            output_json.append(dict(
                id = newsid,
                title = news_json['title'],
                preface = news_json['preface'],
                datetime = news_json['datetime']
            ))
            print('>>> #{}: {{news_id: {}, title: {} ...}} added.'.format(id, newsid, news_json['title']))
    except IOError:
        print('IOError: [%s.json] Open file failed.' % newsid)
    finally:
        fin.close()
    if (len(output_json) % newsperpage == 0) and (len(output_json) > 0):
        try:
            with open(output_filename, 'w', encoding='utf-8') as fout:
                json.dump(output_json, fout, ensure_ascii=False, indent=4)
                print('>>> Output file [%s] SUCCEED.' % output_filename)
            output_json = []
            page_id += 1
            output_filename = OUTPUT_NEWS_LIST_JSON.replace('[n]', str(page_id))
        except IOError:
            print('IOError: [%s] write file failed.' % output_filename)
        finally:
            fout.close()
# Output last file if output_json still had items.
if (len(output_json) > 0):
    try:
        with open(output_filename, 'w', encoding='utf-8') as fout:
            json.dump(output_json, fout, ensure_ascii=False, indent=4)
            print('>>> Output file [%s] SUCCEED.' % output_filename)
    except IOError:
        print('IOError: [%s] write file failed.' % output_filename)
    finally:
        fout.close()
