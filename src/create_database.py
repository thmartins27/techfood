from src.model.Administrador import Administrador
from src.model.Vendas import Vendas
from src.model.Produtos import Produtos
from src.model.Caixa import Caixa
from peewee import *

con = SqliteDatabase('estoque.db')
""" Cria as tabelas com base nos Modelos criados """
def createTables():
    with con:
        con.create_tables([Administrador, Produtos, Vendas, Caixa])
    print('Tabelas Criadas')

