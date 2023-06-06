import { Container, Content } from "./styles";
import { InputText } from "../../form/input-text";
import { ButtonPrimary } from "../../../components/form/buttons";
import { useState } from "react";
import { api, AxiosError } from "../../../hooks/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login: React.FC = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const router = useNavigate();
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await api.post("/login", {
        username: login,
        password: password,
      });
      const { token } = data.response[0];
      sessionStorage.setItem("token", token);
      router("/main");
    } catch (e: any) {
      console.log(e)
      // const { data }: any = (e as AxiosError).response;
      toast.error('usuário não encontrado');
    }
  };

  return (
    <Container>
      <Content>
        <h1 className="text-[3rem]">Login</h1>
        <form
          onSubmit={handleLogin}
          className="flex w-full flex-col items-center justify-center mb-16 h-full gap-5"
        >
          <div className="flex w-[20rem]">
            <InputText
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              type="text"
              label="Usuário Administrador"
              placeholder="Usuarário"
            />
          </div>

          <div className="flex w-[20rem]">
            <InputText
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              label="Senha"
              placeholder="Senha"
            />
          </div>

          <ButtonPrimary type="submit">Entrar</ButtonPrimary>
        </form>
      </Content>
    </Container>
  );
};

export { Login };
