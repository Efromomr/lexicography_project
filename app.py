from flask import Flask, render_template, request
import pandas as pd
import re

dicts = pd.read_csv('/home/lexdb/lexicography_project/dict_db.csv')

dicts.iloc[:, -1].fillna('отсутствует', inplace = True)
dicts.replace(r'\n',' ', regex=True, inplace = True)

app = Flask(__name__)


@app.route('/')
def main():
    return render_template('index.html')

@app.route('/tag_yrslf')
def tag_yrslf():
    return render_template('tag_yrslf.html')

@app.route('/ppl_test')
def ppl_test():
    return render_template('ppl_test.html')

@app.route('/dict_test')
def dict_test():
    return render_template('dict_test.html')

@app.route('/dict_page', methods = ['GET'])
def dict_page():
    dict_name = request.args.get('type')
    dict_info = dicts[dicts.iloc[:, 2] == dict_name]
    similar = dicts[dicts.iloc[:, 1] == dict_info.iloc[:, 1].values[0]].sample(n = 5).iloc[:, 2].values
    return render_template('dict_page.html', name = dict_info.iloc[:, 2].values[0], author = dict_info.iloc[:, 4].values[0],
        editor = dict_info.iloc[:, 5].values[0], online = dict_info.iloc[:, -1].values[0], similar = similar)


@app.route('/res', methods=['GET'])
def user_search():
    query = dict(request.args)['q']
    data = ''
    for w in query.split():
        for col in [2, 4, 5]:
          s_res = dicts[dicts.iloc[:, col].str.contains(w, flags=re.IGNORECASE, regex=True).fillna(False)]
          data = pd.concat([data,s_res]).drop_duplicates(subset=['Название']).reset_index(drop=True) if len(data) > 0 else s_res
    if len(data) == 0:
        data = [['Ничего не нашлось :(']]
        return render_template('search.html', data = data, res = "Найденные по запросу словари:", q=query, qq='Ваш запрос: ')
    return render_template('search.html', data = data.values, res = "Найденные по запросу словари:", q=query, qq='Ваш запрос: ')

