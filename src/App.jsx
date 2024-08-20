import React, { useState, useEffect } from 'react';
import './App.css';
import CocktailForm from './components/CocktailForm';
import CocktailModal from './components/CocktailModal';

function App() {
  const [theme, setTheme] = useState('light'); // State to track theme
  const [cocktail, setCocktail] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load the theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  // Update localStorage whenever theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleFetchCocktail = (data) => {
    setCocktail(data);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCocktail(null);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <h1>Cocktail Finder</h1>
      <label className="switch">
        <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
        <span className="slider"></span>
      </label>
      <CocktailForm onFetchCocktail={handleFetchCocktail} />
      <CocktailModal cocktail={cocktail} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
