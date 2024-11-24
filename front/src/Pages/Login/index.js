import { useState } from "react";
import book from "../../assets/book.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Hook para navegação

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:3000/login", {
      name,
      password,
    });

    setUser(response.data); // Define o usuário logado
    setError(""); // Limpa erros anteriores

    // Armazenar o usuário no localStorage ou em outro meio de persistência
    localStorage.setItem("user", JSON.stringify(response.data));

    navigate("/home"); // Redireciona para a página home
  } catch (error) {
    if (!error?.response) {
      setError("Erro ao acessar servidor.");
    } else if (error.response.status === 401) {
      setError("Nome do Usuario ou senha inválidos.");
    } else {
      setError("Erro inesperado. Tente novamente.");
    }
  }
};

  const handleLogout = () => {
    setUser(null);
    setError("");
  };

  return (
    <div className="login-form-container">
      {user == null ? (
        <div>
          <img className="logo" src={book} alt="Logo livro" />
          <h2>Login</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="text"
              name="name"
              placeholder="Nome"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn-login">
              Login
            </button>

            <p>
              Não tem login?{" "}
              <Link
                to="/cadastro"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                Cadastre-se
              </Link>
            </p>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      ) : (
        <div>
          <h2>Bem-vindo, {user.name}</h2>
          <button type="button" className="btn-login" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;
