from flask import Response, request, Request
from datetime import datetime
from src.authJWT import verify_token
from src.response import create_response

""" Middleware que é executa toda vez que uma requisição eé feita, para verificar se o token é valido, caso não seja uma resposta de não autorizado (401) é retornado """

def authentication():
    token = request.headers.get('authorization')
    decode = verify_token(token)
    if decode == False:
        return create_response('Não autorizado', 401)
    request.auth_decode = decode