import React from 'react';

export default function Modal({ isOpen, closeModal, livro }) {
  // Fecha o modal ao clicar fora do conteúdo
  const handleModalClick = (e) => {
    // Impede o fechamento ao clicar no conteúdo do modal
    e.stopPropagation();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={handleModalClick}>
        <h2>{livro?.titulo}</h2>
        <img className='book-img' src={livro?.img} alt={livro?.titulo} />
        <p><strong>Autor:</strong> {livro?.autor}</p>
        <p><strong>Gênero:</strong> {livro?.genero}</p>
        <p><strong>Preço:</strong> R$ {livro?.preco}</p>
        <p className='book-desc'><strong>Descrição:</strong>{livro?.descricao}</p>
        <button className='add' >Adicionar a minha Estante</button>
      </div>
    </div>
  );
}
