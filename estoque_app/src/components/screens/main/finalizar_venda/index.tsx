import { useMemo, useState } from "react";
import {
  Container,
  BackContainer,
  ContainerHeader,
  ContainerBody,
  ContainerCard,
  ContainerFooter,
} from "./styles";
import {
  ButtonOutline,
  ButtonPrimary,
} from "../../../../components/form/buttons";
import { MdClose } from "react-icons/md";

interface Props {
  show?: any;
  setShow?: any;
  carrinho: any[];
  removeItem: any;
  setCarrinho?: any;
  finalizarVenda?: any;
}

const FinalizarVenda: React.FC<Props> = ({
  setShow,
  show,
  carrinho,
  removeItem,
  setCarrinho,
  finalizarVenda,
}) => {
  const precoTotal = useMemo(() => {
    let total = 0;

    carrinho.forEach((item) => {
      const precoItem = item.preco_unitario * item.quantidade;
      total += precoItem;
    });

    return total;
  }, [carrinho]);

  return (
    <>
      <Container active={show}>
        <ContainerHeader>
          <h1 className="text-[1.2rem] text-[#f00]">Finalize sua compra</h1>
        </ContainerHeader>

        <ContainerBody>
          {carrinho.map((item, index) => (
            <CardProduto item={item} key={index} removeItem={removeItem} />
          ))}
        </ContainerBody>

        <ContainerFooter>
          <ButtonPrimary
            padding=".5rem"
            onClick={finalizarVenda}
            whileHover={{
              scale: 1.03,
            }}
          >
            Finaliza Compra
          </ButtonPrimary>
          <ButtonOutline
            padding=".5rem"
            onClick={() => {
              setCarrinho([]);
            }}
          >
            Limpa carrinho
          </ButtonOutline>

          <div className="flex gap-2 items-center">
            <h1 className="text-[1.3rem]">Total: </h1>
            <h1 className="text-[1.5rem] text-[#00aa00]">R$ {precoTotal.toFixed(2).replace('.', ',')}</h1>
          </div>
        </ContainerFooter>
      </Container>
      <BackContainer onClick={() => setShow(false)} active={show} />
    </>
  );
};

const CardProduto: React.FC<{ item: any; removeItem?: any }> = ({
  item,
  removeItem,
}) => {
  return (
    <ContainerCard
      whileHover={{ boxShadow: "0 0 10px rgba(236, 189, 34, 0.596)" }}
    >
      <div className="w-[45%] flex flex-col">
        <h1 className="text-[#ff9f43] text-[1.1rem]">{item.descricao}</h1>
        <div className=" text-[1rem] font-semibold w-full flex items-center gap-2">
          <h1>Qtd: </h1>
          <p>{item.quantidade}</p>
        </div>
      </div>

      <div className="flex w-[45]">
        <h1 className="text-[1.4rem] text-[#00aa00]">
          R${" "}
          {(item.quantidade * item.preco_unitario).toFixed(2).replace(".", ",")}
        </h1>
      </div>

      <MdClose
        onClick={() => {
          removeItem(item);
        }}
        className="cursor-pointer mb-5"
        color="#ea1d2c"
      />
    </ContainerCard>
  );
};

export { FinalizarVenda };
