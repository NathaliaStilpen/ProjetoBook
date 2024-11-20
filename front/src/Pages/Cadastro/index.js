import { useState } from "react";
import book from "../../assets/book.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState(""); // Novo estado para o email de confirmação
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState(""); // Novo estado para a confirmação de senha
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleCadastro = async (e) => {
    e.preventDefault();

    // Validação do email
    if (email !== emailConfirm) {
      setError("Os e-mails não coincidem.");
      return;
    }

    // Validação da senha
    if (password !== passwordConfirm) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/cadastro", {
        name,
        email,
        password,
      });

      setSuccess(true);
      setError("");

      // Redireciona para o login após 2 segundos
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      if (err.response?.status === 409) {
        setError("Este email já está cadastrado.");
      } else {
        setError("Erro ao tentar realizar o cadastro.");
      }
    }
  };

  return (
    <div className="cadastro-form-container">
      {success ? (
        <div>
          <h2>Cadastro realizado com sucesso!</h2>
          <p>Redirecionando para o login...</p>
        </div>
      ) : (
        <div>
          <img src={book} alt="Logo livro" />
          <h2>Cadastro</h2>
          <form className="cadastro-form" onSubmit={handleCadastro}>
            <input
              type="text"
              name="name"
              placeholder="Nome"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="email"
              name="emailConfirm"
              placeholder="Confirme o Email"
              required
              value={emailConfirm}
              onChange={(e) => setEmailConfirm(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              name="passwordConfirm"
              placeholder="Confirme a Senha"
              required
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
            <button type="submit" className="btn-cadastro">
              Cadastrar
            </button>
            <p>
              Já tem uma conta?{" "}
              <Link
                to="/login"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                Faça login
              </Link>
            </p>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}
    </div>
  );
}

export default Cadastro;
