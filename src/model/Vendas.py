from peewee import *
from src.model.Produtos import Produtos
from src.model.Caixa import Caixa
from datetime import datetime

con = SqliteDatabase('estoque.db')

class Vendas(Model):
    id         = AutoField(primary_key=True)
    caixa      = ForeignKeyField(model=Caixa)
    produto_id = ForeignKeyField(model=Produtos)
    quantidade = IntegerField()
    data_venda = DateField(default=datetime.now())
    class Meta:
        database = con
        table_name = 'vendas'
    