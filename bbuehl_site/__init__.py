from flask import Flask

app = Flask(__name__)
app.config['SECRET_KEY'] = 'fbcaaa74745faa81274628eabbaffeda'

from bbuehl_site import routes