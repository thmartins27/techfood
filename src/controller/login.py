from flask import request
from src.model.Administrador import Administrador
from peewee import DoesNotExist
from src.response import create_response
from src.authJWT import create_token
from src.md5 import md5

def login():
    try:
        json_data = request.get_json()
        if not json_data or not json_data.get("password") or not json_data.get('username'):
            raise Exception('Campo "password" ou "username" ausente no JSON')
        username = json_data.get("username")
        password = json_data.get("password")
        
        if not username:
            raise Exception('Não autorizado')
        if password != 'admin' or username != 'admin':
            try:
                user = Administrador.get(usuario=username)
                senha_hash = md5(password)
                if username == user.usuario or senha_hash == user.senha:
                    usuario = user.usuario
            except DoesNotExist:
                raise Exception('Usuário não encontrado')
        else:
            usuario = username
        
        token = create_token(usuario)    
    
    except Exception as e:
        return create_response('Erro: ' + str(e), 401)
    
    return create_response(message='Login realizado com sucesso', response=[{'token': token}], status_code=200)
