import "./App.css";
import type { ReactNode } from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

// componentes
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import TypebotButton from "./components/typebotbutton/TypebotButton";

// paginas
import Home from "./pages/comum/home/Home";
import HomeJogadora from "./pages/jogadora/homeJogadora/HomeJogadora";
import Login from "./pages/login/Login";
import Calendario from "./pages/calendario/Calendario";
import Noticias from "./pages/noticias/Noticias";
import PerfilJogadora from "./pages/jogadora/perfilJogadora/PerfilJogadora";
import PerfilComum from "./pages/comum/perfil/PerfilComum";
import Sobre from "./pages/sobre/Sobre";
import CadastroInicio from "./pages/cadastro/CadastroInicio";
import CadastroJogadora from "./pages/cadastro/CadastroJogadora";
import CadastroComum from "./pages/cadastro/CadastroComum";
import FormularioJP from "./pages/formulario/Formulario";
import Contato from "./pages/contato/Contato";
import Materia from "./pages/materia/Materia";
import Resumo from "./pages/resumo/Resumo";
import Aovivo from "./pages/aovivo/Aovivo";
import Notificacao from "./pages/notificacao/Notificacao";
import Configuracao from "./pages/configuracao/Configuracao";
import Loja from "./pages/loja/Loja";
import Produto from "./pages/produto/Produto";
import Formulario from "./pages/jogadora/formulario/formulario";

// iniciar a pagina sempre no topo
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);
  return null;
}

// validacao de usuario privado (agora permite varios tipos)
interface PrivateRouteProps {
  tipoUsuario: string | null;
  permitidoPara: string[]; // array de tipos permitidos
  children: ReactNode;
}

function PrivateRoute({
  tipoUsuario,
  permitidoPara,
  children,
}: PrivateRouteProps) {
  if (!tipoUsuario) return <Navigate to="/login" replace />;
  if (!permitidoPara.includes(tipoUsuario)) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

// componente que redireciona de acordo com tipo de usuario
interface RedirectBasedOnUserProps {
  tipoUsuario: string | null;
  comumElement: ReactNode;
  jogadoraElement: ReactNode;
}

function RedirectBasedOnUser({
  tipoUsuario,
  comumElement,
  jogadoraElement,
}: RedirectBasedOnUserProps) {
  if (tipoUsuario === "jogadora") return <>{jogadoraElement}</>;
  return <>{comumElement}</>; // se não logado ou tipo comum
}

function App() {
  const [logado, setLogado] = useState(false);
  const [tipoUsuario, setTipoUsuario] = useState<string | null>(null);

  return (
    <Router>
      <ScrollToTop />
      <Header />

      {/* home com diferenciacao de usuario */}
      <Routes>
        <Route
          path="/"
          element={
            <RedirectBasedOnUser
              tipoUsuario={tipoUsuario}
              comumElement={<Home />}
              jogadoraElement={<HomeJogadora />}
            />
          }
        />

        <Route
          path="/login"
          element={
            <Login
              setLogado={setLogado}
              setTipoUsuario={setTipoUsuario}
              logado={logado}
              tipoUsuario={tipoUsuario}
            />
          }
        />

        {/* rotas gerais */}
        <Route path="/cadastrocomum" element={<CadastroComum />} />
        <Route path="/cadastroinicio" element={<CadastroInicio />} />
        <Route path="/cadastrojogadora" element={<CadastroJogadora />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/formulariojp" element={<FormularioJP />} />
        <Route path="/materia" element={<Materia />} />
        <Route path="/resumo" element={<Resumo />} />
        <Route path="/aovivo" element={<Aovivo />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/produto/:id" element={<Produto />} />

        {/* ACESSOS EXCLUSIVOS DE JOGADORA */}
        <Route
          path="/formulario"
          element={
            <PrivateRoute tipoUsuario={tipoUsuario} permitidoPara={["jogadora"]}>
              <Formulario
                setLogado={setLogado}
                setTipoUsuario={setTipoUsuario}
              />
            </PrivateRoute>
          }
        />
        
        {/* perfil jogadora */}
        <Route
          path="/perfil"
          element={
            <PrivateRoute tipoUsuario={tipoUsuario} permitidoPara={["jogadora"]}>
              <PerfilJogadora
                setLogado={setLogado}
                setTipoUsuario={setTipoUsuario}
              />
            </PrivateRoute>
          }
        />

        {/* ACESSOS EXCLUSIVOS DE USUÁRIO COMUM */}
        {/* perfil comum */}
        <Route
          path="/perfil-comum"
          element={
            <PrivateRoute tipoUsuario={tipoUsuario} permitidoPara={["comum"]}>
              <PerfilComum
                setLogado={setLogado}
                setTipoUsuario={setTipoUsuario}
              />
            </PrivateRoute>
          }
        />

        {/* ACESSO DE QUALQUER USUARIO DESDE QUE ESTEJA LOGADO */}
        {/* Configuração acessível para logado */}
        <Route
          path="/configuracao"
          element={
            <PrivateRoute tipoUsuario={tipoUsuario} permitidoPara={["comum", "jogadora"]}>
              <Configuracao
                setLogado={setLogado}
                setTipoUsuario={setTipoUsuario}
                tipoUsuario={tipoUsuario}
              />
            </PrivateRoute>
          }
        />

        {/* rota notificações acessível para logado */}
        <Route
          path="/notificacao"
          element={
            <PrivateRoute tipoUsuario={tipoUsuario} permitidoPara={["comum", "jogadora"]}>
              <Notificacao
                setLogado={setLogado}
                setTipoUsuario={setTipoUsuario}
              />
            </PrivateRoute>
          }
        />
      </Routes>
      <TypebotButton />
      <Footer />
    </Router>
  );
}

export default App;
