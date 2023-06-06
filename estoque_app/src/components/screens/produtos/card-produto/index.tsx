import { useEffect, useState } from "react";
import { Container } from "./styles";
import { ButtonPrimary } from "../../../../components/form/buttons";
import { InputText } from "../../../form/input-text";

interface Props {
  item?: any;
  addProduto?: any;
  reomveProduto?: any;
}

const CardProduto: React.FC<Props> = ({ item, addProduto, reomveProduto }) => {
  const [estoque_atual, setEstoqueAtual] = useState<number>(item.estoque_atual);
  const [quantidade, setQuantidade] = useState<any>(0);

  useEffect(() => {
    setEstoqueAtual(parseInt(item.estoque_atual) - parseInt(quantidade));
  }, [quantidade, item]);

  return (
    <Container
      whileHover={{
        scale: 1.1,
      }}
    >
      <div className="flex w-full justify-between items-center">
        <h1 className="text-[#000]">{item.descricao}</h1>

        <div className="flex gap-2">
          <h1>Estoque:</h1>
          <h1 className="text-[#ea1d2ccc]">{estoque_atual}</h1>
        </div>
      </div>

      <div className="flex justify-between">
        <ButtonPrimary
          onClick={() =>
            quantidade !== 0
              ? addProduto({
                  id: item.id,
                  descricao: item.descricao,
                  quantidade: parseInt(quantidade),
                  preco_unitario: item.preco,
                })
              : null
          }
          className="text-[.8rem]"
          padding=".5rem"
        >
          Adicionar ao carrinho
        </ButtonPrimary>

        <div className="w-[5rem]">
          <InputText
            type="number"
            value={quantidade}
            onChange={(e) => {
              if (estoque_atual > 0 && parseInt(e.target.value) > 0) {
                setQuantidade(e.target.value);
              }
              if (
                parseInt(e.target.value) < quantidade &&
                parseInt(e.target.value) >= 0
              ) {
                setQuantidade(e.target.value);
              }
            }}
          />
        </div>
      </div>
    </Container>
  );
};

export { CardProduto };
