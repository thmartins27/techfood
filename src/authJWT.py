import jwt
from datetime import datetime, timedelta

SECRET_KEY = 'chave'

""" Cria um token quando é passado o username e a senha correta """

def create_token(username):
    expiration = datetime.utcnow() + timedelta(hours=8)
    payload = {
        'username': username,
        'exp': expiration
    }
    token = jwt.encode(payload, SECRET_KEY, algorithm='HS256')
    return token

""" Veririca se o token está valido """

def verify_token(token):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=['HS256'])
        if datetime.utcnow() > datetime.fromtimestamp(payload['exp']):
            return False
        return payload['username']
    except jwt.ExpiredSignatureError:
        return False
    except jwt.InvalidTokenError:
        return False