

## Server
Python backend using [flask-socket-io](https://flask-socketio.readthedocs.io/en/latest/)

FLASK_APP path
```export FLASK_APP=server/app.py```

Run ```flask run```

Test ``` python -m unittest -v server/tests/test_app.py```

## Client
React frontend using [create-react-app](https://github.com/facebook/create-react-app)

using yarn instead of npm (npm will also work).

Run ``` cd client && yarn start ```

- format js code with prettier ```prettier --write path/to/file.js ```

## Live example on Heroku running python 3.6.6
(it's a free instance sometimes it sleeps)
[link to site](https://vast-brushlands-20654.herokuapp.com/)
