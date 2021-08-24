from random import seed

from flask.json import jsonify
from boggle import Boggle
from flask import Flask,render_template,request,session,redirect,jsonify

app = Flask(__name__)
app.debug = True
app.config["SECRET_KEY"] = "SecretOfASecret"

boggle_game = Boggle()


@app.route('/')
def make_board():
    board = boggle_game.make_board()
    session['board'] = board
    
    return render_template('board.html',boggle=board)

@app.route('/check-word')
def check_word():
    guess = request.args['guess']
    
    checked_word = boggle_game.check_valid_word(session['board'],guess)
    
    return jsonify({'results':checked_word,'guess':guess})



