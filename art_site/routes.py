#!python3
# routes.py - routes for site

from flask import flash, url_for, redirect, render_template, request
from art_site import app, db

@app.route('/')
def home():
    return render_template('home.html', title='Home')

@app.route('/contact')
def contact():
    return render_template('contact.html', title='Contact')

@app.route('/resume/<string:resume>')
def resume(resume):
    if resume == 'IT_Resume':
        r = 'BillyBuehl_Resume_IT.pdf'
    else:
        r = 'BillyBuehl_Resume.pdf'
        
    return render_template('resume.html', title=resume, resume=r)

@app.route('/art')
def art():
    return render_template('art.html', title='Art')

@app.route('/motion')
def motion():
    return render_template('motion.html', title='Motion')

@app.route('/development')
def development():
    return render_template('development.html', title='Development')
