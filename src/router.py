from flask import Flask, request 
from src.middleware.authentication import authentication
from src.controller.login import login
from src.controller.administradores import novoAdministrador
from src.controller.produtos import novoProduto, produtos, update_produto, delelte_produto
from src.controller.venda import nova_venda
from src.controller.venda import total_vendas
from src.controller.caixa import abrir_caixa, fechar_caixa

def configure_routes(app: Flask):
    
    @app.route('/login', methods=['POST'])
    def loginAPI(): return login()
    
    #@app.before_request
    #def auth_middleware(): 
    #    if request.endpoint not in ['loginAPI', 'get_produtos']:
    #        return authentication()

    @app.route('/administrador', methods=['POST'])
    def create_administrador():
        return novoAdministrador()
    
    @app.route('/produto', methods=["POST"])
    def create_produto():
        return novoProduto()
    
    @app.route('/produto', methods=["GET"])
    def get_produtos():
        return produtos()
    
    @app.route('/produto', methods=["PUT"])
    def alter_produto():
        return update_produto()
    
    @app.route('/produto/<id>', methods=['DELETE'])
    def excluir_produto(id):
        return delelte_produto(id)
    
    @app.route('/venda', methods=["POST"])
    def create_venda():
        return nova_venda()
    
    @app.route('/total-vendas', methods=["GET"])
    def get_total_vendas():
        return total_vendas()
    
    @app.route('/abrir-caixa', methods=['POST'])
    def create_caixa():
        return abrir_caixa()
    
    @app.route('/fechar-caixa', methods=['PUT'])
    def alter_caixa():
        return fechar_caixa()