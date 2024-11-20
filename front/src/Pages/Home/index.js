import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Modal from "../../components/Modal"; // Importando o Modal

export default function Index() {
  const [livro, setLivro] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal
  const [livroSelecionado, setLivroSelecionado] = useState(null); // Livro selecionado
  const navigate = useNavigate();

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

  const abrirModal = (livro) => {
    setLivroSelecionado(livro); // Definir o livro selecionado
    setIsModalOpen(true); // Abrir o modal
  };

  const fecharModal = () => {
    setIsModalOpen(false); // Fechar o modal
    setLivroSelecionado(null); // Limpar o livro selecionado
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
          <div className="entrar">
            <Link to="/login">
              <button type="button">Entrar</button>
            </Link>
            <Link to="/cadastro">
              <button type="button">Cadastre-se</button>
            </Link>
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
          <Card onCardClick={abrirModal} />{" "}
          {/* Passando a função onCardClick */}
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
