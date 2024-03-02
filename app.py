from flask import Flask, render_template, request
import pandas as pd


from flask import Flask

app = Flask(__name__)

@app.route('/')
def main():
    return render_template('index.html')

