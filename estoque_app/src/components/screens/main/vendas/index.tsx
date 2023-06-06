import { useEffect, useMemo, useState } from "react";
import { Container } from "./styles";
import { AbrirCaixa } from "../abrir-caixa";
import { Modal } from "../../../../components/modal";
import { FecharCaixa } from "../fechar-caixa";

interface Props {
  vendas?: any;
  caixaAberto?: boolean;
}

const CardVendidos: React.FC<Props> = ({ vendas, caixaAberto }) => {
  const [showAbrirCaixa, setShowAbrirCaixa] = useState(false);
  const [showFechatCaixa, setShowFecharCaixa] = useState(false);
  const [valorTotal, setValorTotal] = useState(0);

  useEffect(() => {
    setValorTotal(vendas.total_vendas + vendas.caixa_inicial);
  }, [vendas]);
  return (
    <>
      <Container
        active={caixaAberto}
        className="cursor-pointer"
        whileHover={{ scale: 1.05 }}
        onClick={() => {
          !caixaAberto ? setShowAbrirCaixa(true) : setShowFecharCaixa(true);
        }}
      >
        {!caixaAberto ? (
          <>
            <h1 className="text-[#fff] font-semibold">Caixa fechado</h1>
          </>
        ) : (
          <>
            <h1 className="text-[#fff] font-semibold">Total de vendas: </h1>
            <h2>R$ {valorTotal?.toFixed(2)?.replace(".", ",")}</h2>
          </>
        )}
      </Container>
      <Modal
        show={showAbrirCaixa}
        setShow={setShowAbrirCaixa}
        Component={<AbrirCaixa />}
      />
      <Modal
        show={showFechatCaixa}
        setShow={setShowFecharCaixa}
        Component={<FecharCaixa valorTotalCaixa={valorTotal}/>}
      />
    </>
  );
};

export { CardVendidos };
