from flask import jsonify
""" Padroniza as respostas para as requisições """
def create_response(message, status_code, response=[]):
    response = jsonify({'message': message, 'response': response})
    response.status_code = status_code
    return response