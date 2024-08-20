import React from 'react';

function CocktailResult({ cocktail }) {
  if (!cocktail) {
    return null;
  }

  return (
    <div className="cocktail-result">
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
    </div>
  );
}

export default CocktailResult;
