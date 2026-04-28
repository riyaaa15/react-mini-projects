import { useState } from "react"

export default function CocktailFinder() {
    let [drink, setDrink] = useState("");
    let [drinkData, setDrinkData] = useState("");
    let [error, setError] = useState("");
    let [loading, setLoading] = useState(false);
    let [ingredients, setIngredients] = useState([]);

    let drinkName = (e) => {
        setDrink(e.target.value);
    };

    let handleSearcBtn = () => {
        fetchData();
        setDrink("");
    };

    let extractIngredients = (drink) => {
        return [
            drink.strIngredient1,
            drink.strIngredient2,
            drink.strIngredient3,
            drink.strIngredient4,
            drink.strIngredient5,
            drink.strIngredient6,
            drink.strIngredient7,
            drink.strIngredient8,
            drink.strIngredient9,
            drink.strIngredient10,
            drink.strIngredient11,
            drink.strIngredient12,
            drink.strIngredient13,
            drink.strIngredient14,
            drink.strIngredient15,
        ].filter(item => item !== null);
    };

    let fetchData = async () => {
        setLoading(true);
        setError("");
        setDrinkData("");
        setIngredients([]);

        try {
            let URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`
            let response = await fetch(URL);
            let data = await response.json();

            if(!data.drinks) {
                setError("Drink not Found!");
                setLoading(false);
                return;
            }
            setDrinkData(data.drinks[0]);

            setIngredients(extractIngredients(data.drinks[0]));
            setLoading(false);
        
        } catch(error) {
            setError("Something went wrong!");
            setLoading(false);
        } 
    }

    let fetchRandomDrink = async () => {
        setLoading(true);
        setError("");
        setDrinkData("");
        setIngredients([]);
        
        try {
            let URL = `https://www.thecocktaildb.com/api/json/v1/1/random.php`;
            let response = await fetch(URL);
            let data = await response.json();

            if(!data.drinks) {
                setError("Drink not Found!");
                setLoading(false);
                return;
            }
            setDrinkData(data.drinks[0]);

            setIngredients(extractIngredients(data.drinks[0]));
            setLoading(false);
        } catch (error) {
            setError("Random drink not working right now!");
            setLoading(false);
        }
    }
    return (
        <div className="container">
            <h1 className="title">CockTail &nbsp; Finder</h1>

            <div className="search-section">
                <input 
                type="text"
                placeholder="Enter drink name..."
                onChange={drinkName}
                value={drink}
                />

            <button className="search-btn"  onClick={handleSearcBtn}>
                Search
            </button>
            <button className="random-btn" onClick={fetchRandomDrink}>
                Random Drink
            </button>
            </div>

            {drinkData && (
                <div className="drink-data">
                    <div className="image-section">
                        <img className="image" src={drinkData.strDrinkThumb}/>
                        <div className="name-category">
                            <p className="name">{drinkData.strDrink || "No name available"}</p>
                            <p className="category">Category: {drinkData.strCategory || "No category available"}</p>
                        </div>
                    </div>
                    
                    <p className="instructions">
                        <span>Instructions</span> - {drinkData.strInstructions || "Instructions not available"}</p>
                    <h3>Ingredients:</h3>
                    {ingredients.map((item, index) => (
                        <p className="ingredient" key={index}>{item}</p>
                    ))}
                </div>
            )}

            {loading && <p className="loading">Searching....</p>}

            {error && <p className="error">{error}</p>}
            
        </div>
    )
}