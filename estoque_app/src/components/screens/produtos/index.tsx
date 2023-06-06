import { Container, ContainerLeftBar, Content } from "./styles";
import { ProdutosCadastradas } from "./produtos-cadastrados";
import { InputText } from "../../form/input-text";
import { ButtonPrimary } from "../../form/buttons";
import { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../../hooks/api";

const Produtos: React.FC = () => {
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");

  const handleNovoProduto = async () => {
    try {
      await api.post('/produto', {
        descricao: descricao,
        preco: parseFloat(preco.replace(',', '.')),
        estoque_atual: parseInt(estoque)
      })
      window.location.reload()
    }catch(e) {
      toast.error('Error ao criar produto')
    }
  }

  return (
    <Container>
      <ContainerLeftBar>
        <ProdutosCadastradas />
      </ContainerLeftBar>
      <Content>
        <div className="w-[80%] p-4 ">
          <h1 className="text-[#e00] text-[2rem]">Cadastrar Produto</h1>

          <div className="w-full flex flex-col gap-4 mt-3">
            <div className="w-[15rem]">
              <InputText
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                type="text"
                label="Descricao"
                placeholder="Descricao"
              />
            </div>
            <div className="w-[15rem]">
              <InputText
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                type="text"
                label="Preço"
                placeholder="Preço"
              />
            </div>
            <div className="w-[15rem]">
              <InputText
                value={estoque}
                onChange={(e) => setEstoque(e.target.value)}
                type="number"
                label="Estoque"
                placeholder="Estoque"
              />
            </div>
          </div>
        </div>

        <div className="mt-2 px-4">
          <ButtonPrimary onClick={handleNovoProduto}>Salvar</ButtonPrimary>
        </div>
      </Content>
    </Container>
  );
};

export { Produtos };
