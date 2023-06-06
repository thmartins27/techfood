from flask import request
from src.response import create_response
from src.verifyJson import verify_fields
from src.model.Administrador import Administrador
from src.md5 import md5

def novoAdministrador():
    try:
        if not verify_fields(['usuario', 'senha']):
            raise Exception('Campos não enviados')
        data = request.json
        senha = md5(data["senha"])
        adm = Administrador(usuario=data["usuario"], senha=senha)
        adm.save()
        return create_response('criado com sucesso', 200)
    except Exception as e:
        return create_response('Erro: ' + str(e), 401)