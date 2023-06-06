from src.model.Produtos import Produtos
from src.model.Vendas import Vendas
from flask import request
from src.verifyJson import verify_fields
from src.response import create_response


def novoProduto():
    try:
        if not verify_fields(['descricao', 'preco', 'estoque_atual']):
            raise Exception('Campos não enviados')
        data = request.json
        produto = Produtos()
        produto.descricao = data['descricao']
        produto.preco = data['preco']
        produto.estoque_atual = data['estoque_atual']        
        produto.save()
        return create_response('Produto criado', 200, {
            'id': produto.id,
            'descricao': produto.descricao,
            'preco': produto.preco,
            'estoque': produto.estoque_atual
        })
    except Exception as e:
        print(e)
        return create_response('Erro: ' + str(e), 401)
    
def produtos():
    try:
        items = Produtos.select()
        # Crie uma lista para armazenar os resultados
        results = []
        # Itere sobre os itens e adicione-os à lista de resultados
        for item in items:
            
            vendas = Vendas().select().where(Vendas.produto_id >> item.id)
            quantidade_vendida = 0
            for venda in vendas:
                quantidade_vendida += venda.quantidade
            
            results.append({
                'id': item.id,
                'descricao': item.descricao,
                'preco': item.preco,
                'estoque_atual': item.estoque_atual,
                'estoque_anterior': item.estoque_anterior,
                'quantidade_vendida': quantidade_vendida,
                'total_venda': quantidade_vendida * item.preco
            })
    
        return create_response(response=results, status_code=200, message='')
    except Exception as e:
        return create_response('Error: ' + str(e), 400)
        
def update_produto():
    
    try:
        if not verify_fields(['id']):
            raise Exception('Campos não enviados')
        data = request.get_json()
        produto = Produtos.get_or_none(Produtos.id == data['id'])
        if produto is None:
            raise Exception(f'Produto com ID {data["id"]} não encontrado')
                
        if produto.estoque_atual != data['estoque_atual']:
            produto.estoque_anterior = produto.estoque_anterior
            produto.estoque_atual = data['estoque_atual']
            
        produto.descricao = data['descricao']
        produto.preco = data['preco']
        produto.save()
        return create_response(message="Produto alterado", response=[{"id": produto.id, "descricao": produto.descricao, "preco": produto.preco, "estoque_atual": produto.estoque_atual, "estoque_anterior": produto.estoque_anterior}], status_code=200)
    except Exception as e:
        return create_response(message=str(e), status_code=400)
    
def delelte_produto(id):
    try:
        print(id)
        produto = Produtos.get(Produtos.id == id)    
        produto.delete_instance()
        produto.save()
        return create_response(message="Produto deletado", status_code=200)
    except Exception as e:
        return create_response(message=str(e), status_code=400)