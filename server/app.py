from flask import Flask, render_template, request
from flask_socketio import SocketIO, emit
from flask_cors import CORS

import json

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
CORS(app)
cors = CORS(app, resources={r"/user/*": {"origins": "*"}, r"/history/*": {"origins": "*"}})  # TODO: set actual cores
socketio = SocketIO(app)

MESSAGE_HISTORY_LIMIT = 10
BOT_NAME = "Server"

logged_in_users = {}
last_messages = [{'name': BOT_NAME, 'message': 'chat started'}]


@app.route('/')
def index():
    print(logged_in_users)
    return render_template('index.html')


@app.route('/user', methods=["GET", "POST", "OPTIONS"])
def logged_in_users_handler():
    if request.method == "POST":
        post_data = json.loads(request.data.decode("utf-8"))
        user_name = post_data.get("username")
        socket_id = post_data.get("socketId")

        if not user_name or not socket_id:
            return '', 422
        elif user_name in logged_in_users or user_name == BOT_NAME:
            return '', 409
        else:
            logged_in_users[user_name] = socket_id
            return '', 200

    if request.method == "OPTIONS":
        return '', 200

    if request.method == 'GET':
        return json.dumps(logged_in_users), 200


@app.route('/history',  methods=["GET", "OPTIONS"])
def history():
    """ return last messages, from chat set by MESSAGE_HISTORY_LIMIT """
    if request.method == "OPTIONS":
        return '', 200
    if request.method == 'GET':
        if request.args.get('id') in logged_in_users.values():
            return json.dumps(last_messages), 200
        return json.dumps([{'username': BOT_NAME, 'messages': 'id not a valid user'}]), 200


@socketio.on('message')
def handle_message(message):
    global last_messages
    last_messages.append(message)
    if len(last_messages) >= MESSAGE_HISTORY_LIMIT:
        last_messages = last_messages[-MESSAGE_HISTORY_LIMIT:]
    emit('message', message, broadcast=True)


@socketio.on('disconnect')
def disconnect():
    """ free up user_name after user loggs in """
    disconnected_id = request.sid
    global logged_in_users
    logged_in_users = {u: v for u, v in logged_in_users.items() if v != disconnected_id}


if __name__ == '__main__':
    socketio.run(app, debug=True)
