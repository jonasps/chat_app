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

    def test_initial_connection(self):
        """ socket connections are working """
        socketio = SocketIO('localhost', 5000, LoggingNamespace)
        status = socketio.connected
        socketio.disconnect()
        assert status is True


if __name__ == '__main__':
    unittest.main()