# routes.py - routes for site

import re
from flask import flash, make_response, url_for, redirect, render_template, request, jsonify
from bbuehl_site import app
import os
import json

config_file = os.path.join(app.root_path, 'static/config', f'config.json')
with open(config_file, 'r') as f:
    config = json.load(f)

@app.route('/')
def home():
    return render_template('home.html', title='Home')

@app.route('/contact')
def contact():
    return render_template('contact.html', title='Contact')

@app.route('/resume/<string:resume>')
def resume(resume):
    r = 'resumeMograph_config.json'
    r_doc = 'BillyBuehl_Resume.pdf'
    if resume == 'IT_Resume':
        r = 'resumeIT_config.json'
        r_doc = 'BillyBuehl_Resume_IT.pdf'

    config = os.path.join(app.root_path, 'static/config', r)
    with open(config, 'r') as f:
        d = json.load(f)

    return render_template('resume.html', title=resume, d=d, r_doc=r_doc)

@app.route('/art')
def art():
    config = os.path.join(app.root_path, 'static/config', 'art_config.json')
    with open(config, 'r') as f:
        d = json.load(f)['art_items']

    return render_template('art.html', title='Art', d=d)

@app.route('/sketchbook')
def sketchbook():
    config = os.path.join(app.root_path, 'static/config', 'sketchbook_config.json')
    with open(config, 'r') as f:
        d = json.load(f)['sketchbook_items']

    return render_template('art.html', title='Sketchbook', d=d)

@app.route('/development')
def development():
    config = os.path.join(app.root_path, 'static/config', 'dev_config.json')
    with open(config, 'r') as f:
        d = json.load(f)['dev_items']

    return render_template('development.html', title='Development', d=d)

@app.route('/load')
def load():
    if request.args.get('page') == 'development':
        return make_response(jsonify(config.get('dev_entries')), 200)
    else:
        return make_response(jsonify({}), 200)


@app.errorhandler(404)
def error(e):
    return render_template('error.html', title='Error', e='404 Page Not Found!')
