import { useState, useEffect } from "react";
import axios from "axios";

export default function CardLog({ onCardClick }) {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const resposta = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=livros&maxResults=12`
        );
        const resultados = resposta.data.items.map((item) => ({
          titulo: item.volumeInfo.title || "Título desconhecido",
          autor: item.volumeInfo.authors?.[0] || "Autor desconhecido",
          genero: item.volumeInfo.categories?.[0] || "Gênero desconhecido",
          preco: item.saleInfo.listPrice?.amount || "Preço não disponível",
          descricao: item.volumeInfo.description || "Descrição não disponível",
          img: item.volumeInfo.imageLinks?.thumbnail || "./imagens/pngegg.png",
        }));
        setLivros(resultados);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    };

    fetchLivros();
  }, []);

  return (
    <div className="livros_card">
      <h2>Melhores leituras do mês</h2>
      <div className="card__container">
        {livros.map((livro, index) => (
          <div key={index} className="card__item" onClick={() => onCardClick(livro)}>
            <img className="card_image" src={livro.img} alt={livro.titulo} />
            <p className="card__name">{livro.titulo}</p>
            <p className="card__genre">{livro.genero}</p>
            <p className="card__price"><strong>Preço:</strong> R$ {livro.preco}</p>
            <button>Adicionar a playlist</button>
          </div>
        ))}
      </div>
    </div>
  );
}
