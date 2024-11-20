
import { useLocation } from "react-router-dom";

export default function Livro(){
    const location = useLocation();
    const dados = location.state || {};

    return(
       
        <>
         {/*Adicionar a header aqui tbm */}
        <div className="livro-container">
            

            <div className="livro-resultado">
                <h1>{dados.title || "Título não encontrado"}</h1>
                <img
                    src={dados.imageLinks?.thumbnail || "./imagens/pngegg.png"}
                    alt="Capa do livro"
                    className="livro-capa"
                />
                <p>
                    <strong>Autor:</strong> {dados.authors?.[0] || "Autor desconhecido"}
                </p>
                <p>
                    <strong>Gênero:</strong> {dados.categories?.[0] || "Gênero desconhecido"}
                </p>
                <p>
                    <strong>Descrição:</strong> {dados.description || "Descrição não disponível"}
                </p>
            </div>
  
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

      </div>
      </>
    )
}