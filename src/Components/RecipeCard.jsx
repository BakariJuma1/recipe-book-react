// import Recipes from "./Data/Recipe";
import RecipeProfile from "./RecipeProfile";
function RecipeCard({ Recipes }) {
  console.log(Recipes);
  return (
    <>
      {Recipes.map((recipe) => (
        <RecipeProfile
          recipe={recipe}
          key={recipe.id}
          image={recipe.image}
          name={recipe.name}
          ingredients={recipe.ingredients.join(", ")}
          category={recipe.category}
          cookTime={recipe.cookTime}
          instructions={recipe.instructions}
        ></RecipeProfile>
      ))}
    </>
  );
}
export default RecipeCard;
