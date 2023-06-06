import { Container } from "./styles";
import { InputText } from "../../../../components/form/input-text";
import { ButtonPrimary } from "../../../form/buttons";
import { useState } from "react";
import { api } from "../../../../hooks/api";
import { toast } from "react-toastify";

const AbrirCaixa: React.FC = () => {
  const [valorCaixa, setValorCaixa] = useState("");

  const handleAbrirCaixa = async () => {
    try {
      await api.post("abrir-caixa", {
        total_caixa_abertura: parseFloat(valorCaixa.replace(",", ".")),
      });
      window.location.reload();
    } catch (e: any) {
      let msg = "";
      if (e.response === undefined) {
        msg = "Error ao abrir caixa";
      } else {
        msg = e.response.data.message;
      }
      toast.error(msg);
    }
  };

  return (
    <Container>
      <div>
        <InputText
          value={valorCaixa}
          onChange={(e) => setValorCaixa(e.target.value)}
          placeholder="R$ 00,00"
          type="text"
          label="Valor"
        />
      </div>

      <ButtonPrimary onClick={handleAbrirCaixa}>Abrir Caixa</ButtonPrimary>
    </Container>
  );
};

export { AbrirCaixa };
