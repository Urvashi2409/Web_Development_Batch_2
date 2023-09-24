from flask import Flask, render_template, request, url_for, redirect  

# this makes a new flask application 
app = Flask(__name__)

# this line makes and empty url which looks like 127.0.0.1.8080/
@app.route('/')
def index(): # making a function to write the logic for the home page 
    return render_template('index.html') # its showing index.html on the url mentioned 

# as a single user can send multiple messages so we store it in a list of messages 
messages = []

# it makes a url 127.0.0.1.8080/submit and method POST means it is contaning data 
# and its sending the data to the server
@app.route('/submit', methods=['POST'])
def submit(): 
    name = request.form["name"] # its taking the user input from the name field 
    email = request.form["email"] # its taking the user input from the email field 
    message = request.form["message"] # its taking the user input from the message field 

    # we are storing every single message in messages list 
    messages.append({"name": name, "email": email, "message":message})

    # it is showing the thank_you message after submitting the form 
    return redirect(url_for("thank_you"))

# we are making a url 127.0.0.1.8080/thank_you 
@app.route('/thank_you')
def thank_you():
    # its just displaying this message 
    return "Thank you for contacting us!"


if __name__ == '__main__':
    app.run()

