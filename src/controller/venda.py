from flask import request
from src.model.Vendas import Vendas
from src.model.Produtos import Produtos
from src.model.Caixa import Caixa
from src.response import create_response

def verify_fields(fields, data, allow_null=False):
    for field in fields:
        if field not in data:
            return False
        if not allow_null and data[field] is None:
            return False
    return True
def total_vendas():
    try:
        caixa = Caixa().select().where(Caixa.data_fechamento >> None).limit(1)
        vendas = Vendas.select().where(Vendas.caixa >> caixa[0].id)
        total_venda = 0
        total_produto_vendido = {}

        for venda in vendas:
            produto = Produtos.get(id=venda.produto_id)
            if produto.id in total_produto_vendido:
                total_produto_vendido[produto.id]['id'] += produto.id
                total_produto_vendido[produto.id]['total_venda'] += produto.preco * venda.quantidade
                total_produto_vendido[produto.id]['quantidade_vendida'] += venda.quantidade
            else:
                total_produto_vendido[produto.id] = {
                    'id': produto.id,
                    'total_venda': produto.preco * venda.quantidade,
                    'quantidade_vendida': venda.quantidade,
                    'descricao': produto.descricao
                }
            total_venda = total_venda + (produto.preco * venda.quantidade)
        
        return create_response(message='', response={'caixa_inicial': caixa[0].total_caixa_abertura, 'total_vendas': total_venda, 'produtos_vendidos': total_produto_vendido}, status_code=200)
        
    except Exception as e:
        return create_response(f'Error: {str(e)}', 400)
    
def nova_venda():
    try:
        if not verify_fields(['carrinho'], request.json):
            raise Exception('Carrinho não enviado')
            
        carrinho = request.json['carrinho']
        produtos_indisponiveis = []
        items_vendidos = []
        total_venda = 0
        
        for item in carrinho:
            if not verify_fields(['produto_id', 'quantidade'], item):
                raise Exception('Campos inválidos no carrinho')
            
            produto = Produtos.get_or_none(Produtos.id == item['produto_id'])
            
            if produto is None:
                raise Exception(f'Produto com ID {item["produto_id"]} não encontrado')
            
            if produto.estoque_atual < item['quantidade']:
                produtos_indisponiveis.append({
                    'produto': produto.descricao,
                    'estoque_atual': produto.estoque_atual
                })
            else:
                produto.estoque_anterior = produto.estoque_atual
                produto.estoque_atual -= int(item['quantidade'])
                produto.save()
                caixa = Caixa().select().where(Caixa.data_fechamento >> None).limit(1)
                venda = Vendas(produto_id=produto.id, quantidade=item['quantidade'])
                venda.caixa = caixa[0].id
                venda.save()
                items_vendidos.append({
                    'produto': produto.descricao,
                    'quantidade_vendida': venda.quantidade,
                    'preco_unitario': produto.preco,
                    'subtotal': venda.quantidade * produto.preco
                })
                
                total_venda += venda.quantidade * produto.preco
        
        if produtos_indisponiveis:
            return create_response('Alguns produtos estão sem estoque suficiente.', 400, response=produtos_indisponiveis)
        
        response_data = {
            'message': 'Venda realizada com sucesso.',
            'total_venda': total_venda,
            'items_vendidos': items_vendidos
        }
        return create_response(response_data, 200)
    
    except Exception as e:
        return create_response(str(e), 400)
