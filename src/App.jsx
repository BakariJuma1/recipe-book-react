import recipesData from "./Data/Recipe";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import RecipeCard from "./Components/RecipeCard";
import AddRecipe from "./Components/AddRecipe";
import SearchRecipe from "./Components/SearchRecipe";
import { useEffect, useState } from "react";

function App() {
  // console.log("Current recipes state:", recipes);

  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function addNewRecipe(newRecipe) {
    setRecipes([...recipes, newRecipe]);
  }

  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then((response) => response.json())
      .then((data) => {
        console.log("my data", data);
        setRecipes(data);
      });
  }, []);

  console.log(recipesData); //TESTING
  return (
    <>
      <Header />
      <main>
        <h1 style={{ textAlign: "center" }}>Recipes</h1>
        <SearchRecipe onSearch={setSearchTerm} />
        <section className="recipeContainer">
          <RecipeCard Recipes={filteredRecipes} />
        </section>
        <section className="addRecipe">
          <AddRecipe onAdd={addNewRecipe} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
