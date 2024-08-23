import React, { useState } from 'react';
import axios from 'axios';

function CocktailForm({ onFetchCocktail }) {
  const [cocktailName, setCocktailName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cocktailName) {
      try {
        const response = await axios.get(
          'https://the-cocktail-db.p.rapidapi.com/search.php',
          {
            params: { s: cocktailName },
            headers: {
              'X-RapidAPI-Key': '581c91dd83mshcb340a67f03daefp17a6c8jsn1397697011ae', // Replace with your API key
              'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
            },
          }
        );
        const cocktailData = response.data.drinks ? response.data.drinks[0] : null;
        onFetchCocktail(cocktailData);
      } catch (error) {
        console.error('Error fetching cocktail:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="cocktail-form">
      <input
        type="text"
        value={cocktailName}
        onChange={(e) => setCocktailName(e.target.value)}
        placeholder="Enter cocktail ingredient and the cocktail finder will surprise you 🪄"
      />
      <button type="submit">🪄🪄🪄</button>
    </form>
  );
}

export default CocktailForm;