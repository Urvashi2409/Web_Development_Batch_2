from flask import Flask, request, render_template
# Flask is used to make a new flask app 
# request is used to get or post something on an application 
# render_template renders/shows an html page on a particular url/link

# making a flask app 
app = Flask(__name__)

questions=[
    {
        "question" : "What is the place where ethan lives?",
        "options" : ["London", "USA", "Houston", "New Mexico"],
        "correct_answer" : "New Mexico"
    },
    {
        "question" : "What is your favourite junk food ethan?",
        "options" : ["McDonalds", "Weinerschnizel", "ChickFila", "KFC"],
        "correct_answer" : "McDonalds"
    },
    {
        "question" : "Which one is your comfort food?",
        "options" : ["Beef Wellington", "Pho", "Lava", "Chiseled Stone Block"],
        "correct_answer" : "Pho"
    }
]

score = 0
current_question = 0

@app.route('/')
def index():
    return "Welcome to the quiz application!"

@app.route('/quiz', methods=['GET', 'POST'])
def quiz():
    global score
    global current_question
    if request.method == "POST":
        user_answer = request.form.get('answer')
        correct_answer = questions[current_question]["correct_answer"]
        if user_answer == correct_answer:
            score += 1 
        current_question += 1
        if current_question < len(questions):
            return render_template("quiz.html", question = questions[current_question]["question"],
                                    options=questions[current_question]["options"])
        else:
            feedback = f"You scored {score}/{len(questions)}. )"
            score = 0
            current_question = 0 
            return render_template("result.html", feedback=feedback)

    return render_template("quiz.html", question = questions[current_question]["question"],
                                    options=questions[current_question]["options"])




if __name__ == "__main__":
    app.run(debug=True)