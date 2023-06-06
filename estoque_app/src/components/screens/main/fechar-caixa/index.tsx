import { Container } from "./styles";
import { InputText } from "../../../form/input-text";
import { ButtonPrimary } from "../../../form/buttons";
import { useState } from "react";
import { api } from "../../../../hooks/api";
import { toast } from "react-toastify";

interface Props {
  valorTotalCaixa: number
}

const FecharCaixa: React.FC<Props> = ({valorTotalCaixa}) => {
  const [valorCaixa, setValorCaixa] = useState("");

  const handleFecharCaixa = async () => {
    try {
      const valor = parseFloat(valorCaixa.replace(",", "."))
      if(valor < valorTotalCaixa) throw new Error('Valor informado inferior ao de vendas')
      await api.put("fechar-caixa", {
        valor_caixa: parseFloat(valorCaixa.replace(",", ".")),
      });
      window.location.reload();
    } catch (e: any) {
      let msg = "";
      if (e.response === undefined) {
        if(e.message !== undefined) msg = e.message
        else msg = "Error ao fechar caixa";
      } else {
        msg = e.response.data.message;
      }
      toast.error(msg);
    }
  };

  return (
    <Container>
      <div>
        <h1 className="font-medium text-[1.5rem]">Fechar Caixa</h1>
      </div>

      <div>
        <InputText
          value={valorCaixa}
          onChange={(e) => setValorCaixa(e.target.value)}
          placeholder="R$ 00,00"
          type="text"
          label={`Valor: R$ ${valorTotalCaixa.toFixed(2).replace('.', ',')}`}
        />
        <p className="ml-2">Confirme o valor</p>
      </div>

      <ButtonPrimary onClick={handleFecharCaixa}>Fechar caixa</ButtonPrimary>
    </Container>
  );
};

export { FecharCaixa };
