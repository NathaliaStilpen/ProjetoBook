import { createContext, useState, useContext, useEffect } from 'react';

// Criação do contexto
const AuthContext = createContext();

// Hook para acessar o contexto
export const useAuth = () => useContext(AuthContext);

// Componente que fornece o contexto para os filhos
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Carrega o usuário do localStorage ao montar o componente
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Carrega o usuário do localStorage
    }
  }, []);

  // Função para logar o usuário
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData)); // Salva no localStorage
  };

  // Função para fazer logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove do localStorage
  };

  // Retorna o contexto com os valores login, logout e user
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
