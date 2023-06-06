from flask import request

""" Função para verificar se os campos estão sendo enviados na requisição """
def verify_fields(fields, allow_null=False, check_carrinho=False):
    json_data = request.get_json()
    if not json_data:
        return False

    if check_carrinho:
        carrinho = json_data.get('carrinho', [])
        for item in carrinho:
            for field in fields:
                if field not in item:
                    return False
                if not allow_null and item.get(field) is None:
                    return False
    else:
        for field in fields:
            if field not in json_data:
                return False
            if not allow_null and json_data.get(field) is None:
                return False

    return True