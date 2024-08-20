import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

Modal.setAppElement('#root');

function CocktailModal({ cocktail, isOpen, onClose }) {
  const [wikiContent, setWikiContent] = useState('');

  useEffect(() => {
    if (cocktail) {
      const fetchWikiContent = async () => {
        try {
          const response = await axios.get(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${cocktail.strDrink}`
          );
          setWikiContent(response.data.extract);
        } catch (error) {
          console.error('Error fetching Wikipedia content:', error);
          setWikiContent('No additional information found on Wikipedia.');
        }
      };
      fetchWikiContent();
    }
  }, [cocktail]);

  if (!cocktail) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal">
      <h2>{cocktail.strDrink}</h2>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{ width: '200px' }} />
      <p><strong>Category:</strong> {cocktail.strCategory}</p>
      <p><strong>Instructions:</strong> {cocktail.strInstructions}</p>

      <h3>Ingredients:</h3>
      <ul>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => {
          const ingredient = cocktail[`strIngredient${i}`];
          const measure = cocktail[`strMeasure${i}`];
          return ingredient ? <li key={i}>{`${measure || ''} ${ingredient}`}</li> : null;
        })}
      </ul>

      <h3>More Information from Wikipedia:</h3>
      <p>{wikiContent}</p>

      <button onClick={onClose}>Close</button>
    </Modal>
  );
}

export default CocktailModal;
