import {
  Container,
  ContainerHeader,
  ContainerBody,
  ContentCard,
  CircleCarrinho,
} from "./styles";
import { LuShoppingCart } from "react-icons/lu";
import { CardVendidos } from "./vendas";
import { useEffect, useState } from "react";
import { AxiosError, api } from "../../../hooks/api";
import { CardProduto } from "../produtos/card-produto";
import { FinalizarVenda } from "./finalizar_venda";
import { toast } from "react-toastify";

const Main: React.FC = () => {
  const [produtos, setProdutos] = useState([]);
  const [showCarrinho, setShowCarrinho] = useState(false);
  const [produtosCarrinho, setProdutosCarrinho] = useState<any[]>([]);
  const [totalVendas, setTotalVendas] = useState([]);
  const [caixaAberto, setCaixaAberto] = useState(false)

  useEffect(() => {
    api
      .get("/total-vendas")
      .then(({ data }) => {
        setCaixaAberto(true)
        setTotalVendas(data.response)
        console.log(data)
      })
      .catch((error) => setCaixaAberto(false));
  }, []);

  const handleAdicionarProdutoCarrinho = (e: any) => {
    if (produtosCarrinho.some((item) => item.id === e.id)) {
      const indexProduto = produtosCarrinho.findIndex(
        (item) => item.id === e.id
      );
      let alter_produtos = [...produtosCarrinho];
      alter_produtos[indexProduto].quantidade = e.quantidade;
      setProdutosCarrinho(alter_produtos);
    } else {
      setProdutosCarrinho((base: any) => [...base, e]);
    }
  };
  const handleRemoverProdutoCarrinho = (e: any) => {
    setProdutosCarrinho(produtosCarrinho.filter((item) => item.id !== e.id));
  };
  const handleFinalizarCompra = async () => {
    try {
      await api.post("/venda", {
        carrinho: produtosCarrinho.map((item) => ({
          produto_id: item.id,
          quantidade: item.quantidade,
        })),
      });
      toast.success("Venda finalizada", {
        onClose: () => window.location.reload(),
      });
    } catch (e) {
      console.log((e as AxiosError).response);
      toast.error("Error ao vender produto");
    }
  };

  useEffect(() => {
    api
      .get("/produto")
      .then(({ data }) => setProdutos(data.response))
      .catch((error: AxiosError) => console.log(error.response));
  }, []);

  return (
    <Container>
      <ContainerHeader>
        <div className="flex h-full pl-[12rem] w-[99%]">
          <CardVendidos vendas={totalVendas} caixaAberto={caixaAberto}/>
        </div>

        {/* Shopping */}

        <div className="pr-[12rem] w-[1%] relative">
          <CircleCarrinho>{produtosCarrinho.length}</CircleCarrinho>
          <LuShoppingCart
            className="cursor-pointer"
            onClick={() => setShowCarrinho(!showCarrinho)}
            size={48}
            color="#ea1d2c"
          />
          <FinalizarVenda
            finalizarVenda={handleFinalizarCompra}
            setCarrinho={setProdutosCarrinho}
            carrinho={produtosCarrinho}
            removeItem={handleRemoverProdutoCarrinho}
            show={showCarrinho}
            setShow={setShowCarrinho}
          />
        </div>
      </ContainerHeader>

      <ContainerBody>
        <ContentCard>
          {produtos.map((item: any, index) => (
            <CardProduto
              addProduto={handleAdicionarProdutoCarrinho}
              key={index}
              item={item}
            />
          ))}
        </ContentCard>
      </ContainerBody>
    </Container>
  );
};

export { Main };
