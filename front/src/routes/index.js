import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Cadastro from "../Pages/Cadastro";
import Index from "../Pages/Index";
import Livro from "../Pages/Livro";
import HomeLog from "../Pages/HomeLog";
import Home2 from "../Pages/Home";

const Private = ({ Item }) => {
  const user = localStorage.getItem("user"); // Verifique se o usuário está no localStorage ou no estado

  // Verifica se há um usuário autenticado, se sim, renderiza o componente Item (Home), caso contrário, renderiza o Login
  return user ? <Item /> : <Login />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          {/* A página Home será renderizada somente se o usuário estiver autenticado */}
          <Route exact path="/home" element={<Private Item={HomeLog} />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/cadastro" element={<Cadastro />} />
          <Route path="/" element={<Home2 />} />
          <Route path="/livro" element={<Livro />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
