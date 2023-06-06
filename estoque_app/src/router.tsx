import {
  BrowserRouter,
  Route,
  Routes as Switch,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { LoginPage } from "./pages/login";
import { MainPage } from "./pages/app/main";
import { ProdutoPage } from "./pages/app/produtos";
import { UsuariosPage } from "./pages/app/usuarios";
import { SobrePage } from "./pages/app/sobre";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" Component={LoginPage} />
      </Switch>
      <ProtectedRoute>
        <Route path="/main" Component={MainPage} />
        <Route path="/sobre" Component={SobrePage} />
        <Route path="/usuarios" Component={UsuariosPage} />
        <Route path="/produtos/" Component={ProdutoPage} />
      </ProtectedRoute>
    </BrowserRouter>
  );
};

const ProtectedRoute: React.FC<any> = ({ children }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname !== "/" && typeof sessionStorage !== "undefined") {
      const token = sessionStorage.getItem("token");
      if (!token) navigate("/");
    }
  }, [pathname, navigate]);
  return <Switch>{children}</Switch>;
};

export { Routes };
