import hashlib
""" Cria um md5 simples para senhas """
def md5(string: str):
    md5_hash = hashlib.md5()
    md5_hash.update(string.encode('utf-8'))
    return md5_hash.hexdigest()