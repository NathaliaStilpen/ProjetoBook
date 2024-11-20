import { useState } from "react";
import book from "../../assets/book.png";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", {
        name,
        password,
      });

      setUser(response.data); // Define o usuário logado
      setError(""); // Limpa erros anteriores
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
          <form className="login-form">
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
            <button type="submit" className="btn-login" onClick={handleLogin}>
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
          <h2>Olá, {user.name}</h2>
          <button type="button" className="btn-login" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Login;
