from flask import Flask, render_template, request
import pandas as pd

dicts = pd.read_csv('/home/lexdb/lexicography_project/dict_db.csv')

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('index.html')

@app.route('/dict_page', methods = ['GET'])
def dict_page():
    dict_name = request.args.get('type')
    dict_info = dicts[dicts.iloc[:, 1] == dict_name]

    return render_template('dict_page.html', name = dict_info.iloc[:, 1].values[0], author = dict_info.iloc[:, 4].values[0], online = dict_info.iloc[:, -1].values[0])


@app.route('/res', methods=['GET'])
def user_search():
    query = dict(request.args)['q']
    data = dicts[dicts.iloc[:, 1].str.contains(query).fillna(False)].iloc[:, 1].values
    return render_template('search.html', data=data, res = "Найденные по запросу словари:", q=query, qq='Ваш запрос: ')

