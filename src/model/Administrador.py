from peewee import *
#from src.db import conexao

con = SqliteDatabase('estoque.db')

class Administrador(Model):
    id = AutoField(primary_key=True)
    usuario = CharField(unique=True)
    senha = CharField()
    
    class Meta:
        database = con
        table_name = 'administradores'