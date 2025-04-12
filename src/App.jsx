import Recipes from "./Data/Recipe";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import RecipeCard from "./Components/RecipeCard";
import AddRecipe from "./Components/AddRecipe";

function App() {
  console.log(Recipes); //TESTING
  return (
    <>
      <Header />
      <main>
        <section className="recipeContainer">
          <RecipeCard Recipes={Recipes} />
        </section>
        <section className="addRecipe">
          <AddRecipe />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
