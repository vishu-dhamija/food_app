'use client';
import classes from './page.module.css';
import { useState } from 'react';

export default function MealFinder() {
  const [searchInput, setSearchInput] = useState('');
  const [meals, setMeals] = useState([]);
  const [mealDetails, setMealDetails] = useState(null);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const getMealList = async (ingredient = null) => {
    const query = ingredient || searchInput.trim();
    if (!query) return;

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`
      );
      const data = await response.json();

      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.error('Error fetching meals:', error);
    }
  };

  const getMealRecipe = async (mealId) => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      const data = await response.json();

      if (data.meals) {
        setMealDetails(data.meals[0]);
      }
    } catch (error) {
      console.error('Error fetching meal details:', error);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.search}>
          <h2 className={classes.title}>Find Meals For Your Ingredients</h2>
          <blockquote>
            Real food doesn't have ingredients, real food is ingredients.
            <br />
            <cite>- Jamie Oliver</cite>
          </blockquote>

          <div className={classes.searchbox}>
            <input
              type="text"
              className={classes.searchcontrol}
              placeholder="Enter an ingredient"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
            <button
              type="button"
              className={classes.searchbtn}
              onClick={() => getMealList()}
            >
              <i className="fas fa-search"></i>
            </button>
            <button
              type="button"
              className={classes.searchbtn}
              onClick={() => getMealList('egg')}
            >
              Search
            </button>
          </div>
        </div>

        <div className={classes.mealresult}>
          <h2 className={classes.title}>Your Search Results:</h2>
          <div id="meal">
            {meals.length > 0 ? (
              meals.map((meal) => (
                <div
                  className={classes.mealitem}
                  key={meal.idMeal}
                  onClick={() => getMealRecipe(meal.idMeal)}
                >

                  <div className={classes.mealimg}>
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                  </div>
                  <div className={classes.mealname}>
                    <h3>{meal.strMeal}</h3>
                    <button className={classes.recipe}>Get Recipe</button>
                  </div>
                </div>
              ))
            ) : (
              <p>Sorry, we didn't find any meal!</p>
            )}
          </div>
        </div>

        {mealDetails && (
          <div className={classes.mealdetails}>
            <button
              type="button"
              className={classes.recipeclose}
              onClick={() => setMealDetails(null)}
            >
              <i className="fas fa-times"></i>
            </button>

            <div className={classes.details}>
              <h2 className={classes.recipetitle}>{mealDetails.strMeal}</h2>
              <p className={classes.recipecategory}>{mealDetails.strCategory}</p>
              <div className={classes.instruct}>
                <h3>Instructions:</h3>
                <p>{mealDetails.strInstructions}</p>
              </div>
              <div className={classes.recipeimg}>
                <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
              </div>
              <div className={classes.recipelink}>
                <a
                  href={mealDetails.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
