from peewee import *
from datetime import datetime

con = SqliteDatabase('estoque.db')

class Caixa(Model):
    id = AutoField(primary_key=True)
    data_abertura = DateField(default=datetime.now())
    data_fechamento = DateTimeField(null=True)
    total_caixa_abertura = FloatField(default=0)
    total_caixa_fechamento = FloatField(default=0)
    class Meta: 
        database = con
        table_name = 'caixa'