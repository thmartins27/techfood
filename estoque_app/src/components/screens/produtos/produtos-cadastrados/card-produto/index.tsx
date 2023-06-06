import { useState } from "react";
import { InputText } from "../../../../form/input-text";
import { Container } from "./styles";
import { MdDelete, MdEdit } from "react-icons/md";
import { api } from "../../../../../hooks/api";
import { toast } from "react-toastify";

interface Props {
  item?: any;
}

const CardProduto: React.FC<Props> = ({ item }) => {
  const [descricao, setDescricao] = useState(item.descricao);
  const [estoque, setEstoque] = useState(item.estoque_atual);
  const [preco, setPreco] = useState(item.preco);

  const handleDeleteProduto = async () => {
    try {
      await api.delete(`/produto/${item.id}`);
      window.location.reload();
    } catch (e) {
      console.log(e);
      toast.error("Error ao deletar produto");
    }
  };

  const handleUpdateproduto = async () => {
    try{
        await api.put('/produto', {
            "id": item.id,
            "descricao": descricao,
            "preco": preco,
            "estoque_atual": estoque
        })
        toast.success('Produto atualizado')
    }catch(e){
        console.log(e)
        toast.error('Error ao atualizar produto')
    }
  }

  return (
    <Container>
      <div className="flex w-full px-2 mt-2 justify-between items-center">
        <div className="w-[10rem]">
          <InputText
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>

        <div className="w-[6rem] flex items-center gap-3">
          R$
          <InputText
            type="text"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />
        </div>
      </div>

      <div className=" flex w-full justify-between px-2 mb-2">
        <div>
          <h1 className="flex gap-2 items-center">
            Estoque:
            <div className="w-[5rem]">
              <InputText
                type="text"
                value={estoque}
                onChange={(e) => setEstoque(e.target.value)}
              />
            </div>
          </h1>
          <h1 className="flex gap-2 items-center">
            Estoque anterior : {item.estoque_anterior}
          </h1>
        </div>
        <MdDelete
          onClick={handleDeleteProduto}
          color="#d00"
          size={28}
          className="mt-14 cursor-pointer"
        />
      </div>

      <div className="flex w-full justify-between px-2 mb-2">
        <div>
          <h1>
            Total Vendido: R$ {item.total_venda.toFixed(2).replace(".", ",")}
          </h1>
          <h1>Quantidade vendida : {item.quantidade_vendida}</h1>
        </div>
        <MdEdit onClick={handleUpdateproduto} color="#0a0" size={28} className="cursor-pointer" />
      </div>
    </Container>
  );
};

export { CardProduto };
