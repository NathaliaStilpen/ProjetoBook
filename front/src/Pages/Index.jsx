
// import axios from "axios"
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Livro from "./Livro";

// export default function Index(){
//     const [livro, setLivro] = useState("");
//     const [dadosLivro, setDadosLivro] = useState(null);
//     const navigate = useNavigate(); // hook para redirecionar
//     let flag = false; //essa flag é pra caso nao encontre o livro

//     // const busca = async(event) => {
//     //     event.preventDefault();
//     //     //console.log(livro);

//     //     //verificando se o input está vazio
//     //     if(livro.trim() === ""){
//     //         flag = true;
//     //         return
//     //     }else{
//     //         const resposta = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${livro}`);
//     //         //console.log(resposta.data.items);
//     //         return resposta.data.items[0];
//     //     }
        
//     // }

//     const buscaLivro = async (event) => {
//         event.preventDefault();

//         if (livro.trim() === "") {
//             alert("Por favor, insira o nome de um livro.");
//             return;
//         }

//         try {
//             const resposta = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${livro}`);
//             const resultado = resposta.data.items[0];

//             if (resultado) {
//                 setDadosLivro({
//                     titulo: resultado.volumeInfo.title || "Título desconhecido",
//                     autor: resultado.volumeInfo.authors?.[0] || "Autor desconhecido",
//                     genero: resultado.volumeInfo.categories?.[0] || "Gênero desconhecido",
//                     preco: resultado.saleInfo.listPrice?.amount || "Preço não disponível",
//                     descricao: resultado.volumeInfo.description || "Descrição não disponível",
//                     img: resultado.volumeInfo.imageLinks?.thumbnail || "./imagens/pngegg.png",
//                 });

//                 //redirecionar para a página de Livro
//                 navigate("/livro", { state: resultado.volumeInfo }); 
//             } else {
//                 alert("Nenhum livro encontrado.");
//             }
//         } catch (error) {
//             console.error("Erro na busca:", error);
//             alert("Erro ao buscar o livro.");
//         }
//     };

//     // Função para atualizar o valor do input
//     const handleChange = (event) => {
//         setLivro(event.target.value);
//     };

//     return(
//         <>
//       <header>
//           <nav>
//               <ul>
//                   <li><a href="">Home</a></li>
//                   <li><a href="">Livros</a></li>
//                   <li><a href="">Autores</a></li>
//                   <li><a href="">Editoras</a></li>
//                   <li><a href="">Lançamentos</a></li>
//               </ul>

//                 {/*Penso em implementar a busca para um autor tbm :)*/}
//               <form onSubmit={buscaLivro} className="barra-pesquisa">
//                   <input type="text" placeholder="Busque um livro (teste)" name="inputBuscaLivro" id="inputBuscaLivro" value={livro.name}  onChange={handleChange}/>
//                   <button type="submit">🔍</button>
//               </form>

//               <form action="" className="entrar">
//                   <button type="button">Entrar</button>
//               </form>
//           </nav>
//       </header>
      
//       <main>
//           <div className="banner">
//               <section className="image-banner">
//                   <img src="https://ccreadysites.cyberchimps.com/bookstore/wp-content/uploads/sites/166/2022/01/bookstore-hero.png" alt="Imagem de Livros"/>
//               </section>
//               <section className="texto-banner">
//                   <h1>Os melhores livros só aqui</h1>
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem corporis, nisi pariatur magni facere ad sunt, alias ipsam incidunt nihil, possimus provident eaque.</p>
//               </section>
//           </div>

//           {/*Precisa ver como usa a api para atualizar essas card__item automaticamente*/}
//           <div className="livros_card">
//               <h1>Melhores leituras do mês</h1>

//               <div className="card__container">
//                   <div className="card__item">
//                       <img src="https://www.revistabula.com/wp/wp-content/uploads/2020/05/Guerra-e-Paz-610x884.jpg.webp" alt=""/>
//                       <p className="card__name">Guerra e Paz</p>
//                       <p className="card__genre">Novela</p>
//                       <p className = "card__price"><strong>Preço</strong> R$ 181,50</p>
//                       <p className="card__description"><strong>Descrição</strong>: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                       <button>Comprar</button>
//                   </div>
//                   <div className="card__item">
//                       <img src="https://www.revistabula.com/wp/wp-content/uploads/2020/03/Hamlet.jpg.webp" alt=""/>
//                       <p className="card__name">Hamlet (1623)</p>
//                       <p className="card__genre">Tragédia</p>
//                       <p className = "card__price"><strong>Preço</strong> R$ 33,50</p>
//                       <p className="card__description"><strong>Descrição</strong>: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                       <button>Comprar</button>
//                   </div>
//                   <div className="card__item">
//                       <img src="https://m.media-amazon.com/images/I/71YQ4CvEWgL._AC_UF1000,1000_QL80_.jpg" alt=""/>
//                       <p className="card__name">Odisséia</p>
//                       <p className="card__genre">Poema Épico</p>
//                       <p className = "card__price"><strong>Preço</strong> R$ 71,90</p>
//                       <p className="card__description"><strong>Descrição</strong>: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                       <button>Comprar</button>
//                   </div>
//                   <div className="card__item">
//                       <img src="https://m.media-amazon.com/images/I/819js3EQwbL._AC_UF1000,1000_QL80_.jpg" alt="Iphone X"/>
//                       <p className="card__name">1984</p>
//                       <p className="card__genre">Ficção Científica</p>
//                       <p className = "card__price"><strong>Preço</strong> R$ 16,02</p>
//                       <p className="card__description"><strong>Descrição</strong>: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                       <button>Comprar</button>
//                   </div>
//                   <div className="card__item">
//                       <img src="https://www.revistabula.com/wp/wp-content/uploads/2020/05/Guerra-e-Paz-610x884.jpg.webp" alt=""/>
//                       <p className="card__name">Guerra e Paz</p>
//                       <p className="card__genre">Novela</p>
//                       <p className = "card__price"><strong>Preço</strong> R$ 181,50</p>
//                       <p className="card__description"><strong>Descrição</strong>: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                       <button>Comprar</button>
//                   </div>
//                   <div className="card__item">
//                       <img src="https://www.revistabula.com/wp/wp-content/uploads/2020/03/Hamlet.jpg.webp" alt=""/>
//                       <p className="card__name">Hamlet (1623)</p>
//                       <p className="card__genre">Tragédia</p>
//                       <p className = "card__price"><strong>Preço</strong> R$ 33,50</p>
//                       <p className="card__description"><strong>Descrição</strong>: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                       <button>Comprar</button>
//                   </div>
//                   <div className="card__item">
//                       <img src="https://m.media-amazon.com/images/I/71YQ4CvEWgL._AC_UF1000,1000_QL80_.jpg" alt=""/>
//                       <p className="card__name">Odisséia</p>
//                       <p className="card__genre">Poema Épico</p>
//                       <p className = "card__price"><strong>Preço</strong> R$ 71,90</p>
//                       <p className="card__description"><strong>Descrição</strong>: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                       <button>Comprar</button>
//                   </div>
//                   <div className="card__item">
//                       <img src="https://m.media-amazon.com/images/I/819js3EQwbL._AC_UF1000,1000_QL80_.jpg" alt="Iphone X"/>
//                       <p className="card__name">1984</p>
//                       <p className="card__genre">Ficção Científica</p>
//                       <p className = "card__price"><strong>Preço</strong> R$ 16,02</p>
//                       <p className="card__description"><strong>Descrição</strong>: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//                       <button>Comprar</button>
//                   </div>
//               </div>
//           </div>
//       </main>

//       <div>
//          {/*pode ter mais coisas*/}
//       </div>

//       <footer className="footer">
//           <div className="footer-container">
//               <div className="footer-logo">
//                   <h2>Nome do Site</h2>
//                   <p>Conectando pessoas e ideias. Transforme o mundo conosco!</p>
//               </div>
//               <div className="footer-links">
//                   <h3>Links Úteis</h3>
//                   <ul>
//                       <li><a href="#">Sobre Nós</a></li>
//                       <li><a href="#">Serviços</a></li>
//                       <li><a href="#">Contato</a></li>
//                   </ul>
//               </div>
//               <div className="footer-social">
//                   <h3>Siga-nos</h3>
//                   <div className="social-icons">
//                       <a href="#"><img src="facebook-icon.svg" alt="Facebook"/></a>
//                       <a href="#"><img src="instagram-icon.svg" alt="Instagram"/></a>
//                       <a href="#"><img src="twitter-icon.svg" alt="Twitter"/></a>
//                       <a href="#"><img src="linkedin-icon.svg" alt="LinkedIn"/></a>
//                   </div>
//               </div>
//           </div>
//           <div className="footer-bottom">
//               <p>&copy; 2024 Nome do Site. Todos os direitos reservados.</p>
//           </div>
//       </footer>
//     </>
//     );
// }