import unittest

from server.app import app
from socketIO_client import SocketIO, LoggingNamespace

ADDRESS = '127.0.0.1'
PORT = 5000


class TestChatApp(unittest.TestCase):
    """ currently we need to have the dev-server running for sockets"""

    def setUp(self):
        self.client = app.test_client()

    def test_index_route(self):
        """ get index file """
        response = self.client.get('/')
        assert response.status_code == 200
        assert b'add front-end' in response.data

    def test_posting_user_and_socket_id(self):
        """ only save uniqe usernames acompanyd by socketIds"""
        post_string = '{"username":"jonas", "socketId":"1234"}'
        # valid post
        response = self.client.post('/user', data=post_string)
        assert response.status_code == 200

        # invalid user already in list
        response = self.client.post('/user', data=post_string)
        assert response.status_code == 409

        # invalid missing arguments
        response = self.client.post('/user', data='{"username":"testName"}')
        assert response.status_code == 422

    def test_initial_connection(self):
        """ socket connections are working """
        socketio = SocketIO('localhost', 5000, LoggingNamespace)
        status = socketio.connected
        socketio.disconnect()
        assert status is True


if __name__ == '__main__':
    unittest.main()