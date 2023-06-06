import { Container, Content } from "./styles";
import { Header } from "./Header";

const Layout: React.FC<any> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  );
};

export { Layout };
