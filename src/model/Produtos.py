from peewee import *

con = SqliteDatabase('estoque.db')
class Produtos(Model):
    id = AutoField(primary_key=True)
    descricao = CharField(unique=True)
    preco = FloatField()
    estoque_atual = IntegerField()
    estoque_anterior = IntegerField(default=0)
    
    class Meta:
        database = con
        table_name = 'produtos'