import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../../../hooks/api";
import { CardProduto } from "./card-produto";

const ProdutosCadastradas: React.FC = () => {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    api
      .get("/produto")
      .then(({ data }) => setProdutos(data.response))
      .catch((error) => console.log(error));
  }, []);
  return (
    <Container>
      {produtos.map((item: any, index) => {
        return <CardProduto key={index} item={item} />;
      })}
    </Container>
  );
};

export { ProdutosCadastradas };
