import React, { useState } from 'react';
import CocktailForm from './components/CocktailForm';
import CocktailModal from './components/CocktailModal';
import './App.css';

function App() {
  const [cocktail, setCocktail] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFetchCocktail = (data) => {
    setCocktail(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCocktail(null);
  };

  return (
    <div className="App">
      <h1>Cocktail Finder</h1>
      <CocktailForm onFetchCocktail={handleFetchCocktail} />
      <CocktailModal cocktail={cocktail} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
