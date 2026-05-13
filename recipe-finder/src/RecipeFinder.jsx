import axios from  'axios';
import { useState } from "react";
import './RecipeFinder.css'

export default function RecipeFinder() {
    let [mealName, setMealName] = useState("");
    let [mealData, setMealData] = useState([]);
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState("");
    let [ingredients, setIngredients] = useState([]);

    let userMeal = (e) => {
        setMealName(e.target.value);
    }

    let handleSearchBtn = () => {
        if(!mealName.trim()) return;
        getMealData();
    }

    let extractIngredients = (meal) => {
        return [
            meal.strIngredient1,
            meal.strIngredient2,
            meal.strIngredient3,
            meal.strIngredient4,
            meal.strIngredient5,
            meal.strIngredient6,
            meal.strIngredient7,
            meal.strIngredient8,
            meal.strIngredient9,
            meal.strIngredient10,
            meal.strIngredient11,
            meal.strIngredient12,
            meal.strIngredient13,
            meal.strIngredient14,
            meal.strIngredient15,
            meal.strIngredient16,
            meal.strIngredient17,
            meal.strIngredient18,
            meal.strIngredient19,
            meal.strIngredient20,
        ].filter(item => item !== null && item !== "");
    };

    let getMealData = async () => {
        setError("");
        setLoading(true);
        setIngredients([]);

        try {
            const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
            
            let res = await axios.get(URL);

            if(!res.data.meals) {
                setError("Meal not Found!");
                setMealData([]);
                setLoading(false);
                setMealName("");
                return;           
            }

            setMealData(res.data.meals);
            setIngredients(extractIngredients(res.data.meals[0]));
            setMealName("");
            setLoading(false);

        } catch (error) {
            setError("Something went Wrong!");
            setLoading(false);
        }
    }

    let handleCategory = async (e) => {
        let category = e.target.value;

        if(!category) return;

        setLoading(true);
        setError("");
        setMealData([]);

        try {
            const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
            let res = await axios.get(URL);

            if(!res.data.meals) {
                setError("No meals found!");
                setLoading(false);
                return;
            }

            setMealData(res.data.meals);
            setLoading(false);
        } catch(error) {
            setError("Something went Wrong!");
            setLoading(false);
        }
    }
    return (
        <div className="container">
            <h1 className="heading">Meal Recipe Finder</h1>
            <div className="search-section">
                <input 
                type="text" 
                placeholder="Enter meal name..."
                onChange={userMeal}
                value={mealName}
                />
                <button className="search-btn" onClick={handleSearchBtn} >
                    Search
                </button>
                <select onChange={handleCategory}>
                    <option value="">All Categories</option>
                    <option value="Chicken">🍗 Chicken</option>
                    <option value="Beef">🥩 Beef</option>
                    <option value="Seafood">🐟 Seafood</option>
                    <option value="Vegetarian">🥗 Vegetarian</option>
                    <option value="Dessert">🍰 Dessert</option>
                </select>
            </div>

            <div className="meals-container">
                {mealData && mealData.map((meal) => (
                    <div key={meal.idMeal} className="meal-card">
                    <img 
                       src={meal.strMealThumb}
                    />
                    <p className="name">{meal.strMeal}</p>

                    <div className="category-country">
                        {meal.strCategory && <p className="category">Category - {meal.strCategory}</p>}
                        {meal.strCountry && <p className="country">Country - {meal.strCountry}</p>}
                    </div>
                    
                    <p className="instructions">
                        <span>Instructions</span> - 
                        {meal.strInstructions ? meal.strInstructions.slice(0, 150) + "..." : "Instructions not available"}
                    </p>
                    
                    {ingredients.length > 0 && (
                    <div className="ingredients-container">
                         <h3>Ingredients:</h3>
                         {ingredients.map((item, index) => (
                         <p className="ingredient" key={index}>{item}</p>
                         ))}
                    </div>
                    )}

                    </div>
                ))}
            </div>

            {loading && <p className="loading">Searching...</p>}
            {error && <p className="error">{error}</p>}
        </div>
    )
}