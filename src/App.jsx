import Recipes from "./Data/Recipe";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import RecipeCard from "./Components/RecipeCard";
import AddRecipe from "./Components/AddRecipe";
import SearchRecipe from "./Components/SearchRecipe";
import { useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    ingredients: "",
    category: "",
    cookTime: "",
    instructions: "",
    image: "",
  });

  function addNewRecipe(e) {
    e.preventDefault();
    setRecipes([...recipes, formData]);
    setFormData({});
  }

  console.log(Recipes); //TESTING
  return (
    <>
      <Header />
      <main>
        <h1>Recipes</h1>
        <SearchRecipe />
        <section className="recipeContainer">
          <RecipeCard Recipes={Recipes} />
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
