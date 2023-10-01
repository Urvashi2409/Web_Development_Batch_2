from flask import Flask, render_template, flash, redirect
from flask_wtf import FlaskForm
from flask_sqlalchemy import SQLAlchemy
from wtforms import StringField, PasswordField
from wtforms.validators import DataRequired, Length, EqualTo 
from flask_login import UserMixin
import os 

app = Flask(__name__)
app.secret_key = os.urandom(24)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///user_manager.db'
db = SQLAlchemy(app) 

@app.route('/')
def index():
    return "Hello world"


class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)


class RegistrationForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired(), Length(max=80)])
    password = PasswordField('Password', validators=[DataRequired(), Length(min=8)])
    confirm_password = PasswordField('Confirm Password', validators=[DataRequired(), EqualTo('password')])


class LoginForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired(), Length(max=80)])
    password = PasswordField('Password', validators=[DataRequired()])


@app.route('/register', methods=['GET', 'POST'])
def register():
    form = RegistrationForm()
    if form.validate_on_submit():
        username = form.username.data 
        password = form.password.data
        user = User(username=username, password=password)
        db.session.add(user)
        db.session.commit()
        flash("Registration Successful! You can now proceed and login")
        return redirect('login')
    return render_template('register.html', form=form) 


if __name__ == '__main__':
    app.run(debug=True)