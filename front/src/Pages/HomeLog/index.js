import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import CardLog from "../../components/CardLog";
import Modal from "../../components/Modal";
import perfil from "../../assets/perfil.png";

export default function Home() {
  const [livro, setLivro] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [livroSelecionado, setLivroSelecionado] = useState(null);
  const [user, setUser] = useState(null); // Estado para o usuário logado
  const navigate = useNavigate();

  // Obtém o usuário do localStorage ao carregar a página
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
    } else {
      navigate("/login"); // Redireciona para login se não estiver autenticado
    }
  }, [navigate]);

  const buscaLivro = async (event) => {
    event.preventDefault();

    if (livro.trim() === "") {
      alert("Por favor, insira o nome de um livro.");
      return;
    }

    try {
      const resposta = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${livro}`
      );
      const resultado = resposta.data.items[0];

      if (resultado) {
        navigate("/livro", { state: resultado.volumeInfo });
      } else {
        alert("Nenhum livro encontrado.");
      }
    } catch (error) {
      console.error("Erro na busca:", error);
      alert("Erro ao buscar o livro.");
    }
  };

  const handleChange = (event) => {
    setLivro(event.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove o usuário do localStorage
    setUser(null); // Atualiza o estado para deslogado
    navigate("/login"); // Redireciona para a página de login
  };

  const abrirModal = (livro) => {
    setLivroSelecionado(livro);
    setIsModalOpen(true);
  };

  const fecharModal = () => {
    setIsModalOpen(false);
    setLivroSelecionado(null);
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Livros</a>
            </li>
            <li>
              <a href="">Autores</a>
            </li>
            <li>
              <a href="">Editoras</a>
            </li>
            <li>
              <a href="">Lançamentos</a>
            </li>
          </ul>
          <div className="form-container">
            <form onSubmit={buscaLivro} className="barra-pesquisa">
              <input
                type="text"
                placeholder="Busque um livro"
                value={livro}
                onChange={handleChange}
              />
              <button type="submit">🔍</button>
            </form>
          </div>
          {/* Área do perfil e logout */}
          <div className="profile-container">
            {user && (
              <>
                <div className="profile-info">
                  <img
                    src={perfil}// Ícone de perfil (pode ser substituído por um ícone personalizado)
                    alt="Ícone do usuário"
                    className="profile-icon"
                  />
                  <span className="profile-name">{user.name}</span>
                </div>
                <button className="btn-logout" onClick={handleLogout}>
                  Logout
                </button>
              </>
            )}
          </div>
        </nav>
      </header>

      <main>
        <div className="banner">
          <section className="image-banner">
            <img
              src="https://ccreadysites.cyberchimps.com/bookstore/wp-content/uploads/sites/166/2022/01/bookstore-hero.png"
              alt="Imagem de Livros"
            />
          </section>
          <section className="texto-banner">
            <h1>Os melhores livros só aqui</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </section>
        </div>

        <div className="book-card">
          <CardLog onCardClick={abrirModal} />
        </div>

        <Modal
          isOpen={isModalOpen}
          closeModal={fecharModal}
          livro={livroSelecionado}
        />
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <h2>Nome do Site</h2>
            <p>Conectando pessoas e ideias. Transforme o mundo conosco!</p>
          </div>
          <div className="footer-links">
            <h3>Links Úteis</h3>
            <ul>
              <li>
                <a href="#">Sobre Nós</a>
              </li>
              <li>
                <a href="#">Serviços</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <h3>Siga-nos</h3>
            <div className="social-icons">
              <a href="#">
                <img src="facebook-icon.svg" alt="Facebook" />
              </a>
              <a href="#">
                <img src="instagram-icon.svg" alt="Instagram" />
              </a>
              <a href="#">
                <img src="twitter-icon.svg" alt="Twitter" />
              </a>
              <a href="#">
                <img src="linkedin-icon.svg" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Nome do Site. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
