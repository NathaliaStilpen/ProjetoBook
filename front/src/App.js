// import './App.css';
import './styles/login.css'
import './styles/cadastro.css'
import './styles/Livro.css'
import './styles/Index.css'
import './styles/Card.css'
import './styles/Modal.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoutesApp from './routes';

function App() {
  return (
    <RoutesApp />
  //   <Router>
  //   <Routes>
  //     <Route path="/login" element={<Login />} />
  //     <Route path="/cadastro" element={<Cadastro />} />
  //   </Routes>
  // </Router>
  );
}

export default App;



// main .js
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './styles/Index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
