from src.model.Caixa import Caixa
from flask import request
from src.response import create_response
from src.verifyJson import verify_fields
from datetime import datetime

def abrir_caixa():
    try:
        
        caixas = Caixa.select()
        if not verify_fields(['total_caixa_abertura']):
            raise Exception('Campos não enviados')
        for caixa in caixas:
            if caixa.data_fechamento == None:
                raise Exception('Existe caixas em aberto')
        data = request.get_json()
        caixa = Caixa()
        caixa.total_caixa_abertura=data['total_caixa_abertura']
        caixa.save()
        return create_response(message='Caixa aberto', status_code=200)
    except Exception as e:
        return create_response(message=str(e), status_code=400)
    
def fechar_caixa():
    try:
        if not verify_fields(['valor_caixa']):
            raise Exception('Campo não encontrado')

        data = request.get_json()
        caixa = Caixa().select().where(Caixa.data_fechamento >> None).limit(1)
        if not caixa[0].total_caixa_abertura <= data['valor_caixa']:
            raise Exception('Valor final do caixa, não pode ser menor que o de inicio')
        
        caixa = Caixa().update(data_fechamento=datetime.now().date(), total_caixa_fechamento=data['valor_caixa']).where(Caixa.data_fechamento >> None)
        caixa.execute()
        
        return create_response(message="caixa fechado", status_code=200)
    except Exception as e:
        return create_response(message=str(e), status_code=400)