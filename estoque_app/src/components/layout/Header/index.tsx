import { useState } from "react";
import { Container, Content, LinkHeader } from "./styles";
import { MdFastfood } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [link, setLink] = useState("nova-venda");
  const rota = useNavigate();
  const { pathname } = useLocation();

  return (
    <Container>
      <Content>
        <div className="flex items-center gap-3 justify-center h-full">
          <div className="flex items-center gap-2 ml-10 cursor-pointer">
            <MdFastfood color="#ea1d2c" size={35} />
            <h1 className="text-[1.5rem] mt-3 text-[#ea1d2c]">TechFood</h1>
          </div>

          <div className="flex gap-3 mt-3 ml-10">
            <LinkHeader
              onClick={() => {
                rota("/main");
              }}
              active={pathname === "/main" ? true : false}
            >
              Todos produtos
            </LinkHeader>

            <LinkHeader
              onClick={() => {
                rota("/produtos");
              }}
              active={pathname === "/produtos" ? true : false}
            >
              Novo Produto
            </LinkHeader>

            {/* <LinkHeader
              onClick={() => rota("/usuarios")}
              active={pathname === "/usuarios" ? true : false}
            >
              Usuários
            </LinkHeader> */}

            <LinkHeader
              onClick={() => rota("/sobre")}
              active={pathname === "/sobre" ? true : false}
            >
              Sobre
            </LinkHeader>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export { Header };
