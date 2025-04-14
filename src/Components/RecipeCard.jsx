// import Recipes from "./Data/Recipe";
import RecipeProfile from "./RecipeProfile";
function RecipeCard({ Recipes }) {
  if (!Array.isArray(Recipes)) {
    return <p>Error:Recipes is not an error </p>;
  }
  console.log(Recipes);
  return (
    <>
      {Recipes.map((recipe, index) => (
        <RecipeProfile
          recipe={recipe}
          key={recipe.id || index}
          image={recipe.image}
          name={recipe.name}
          ingredients={
            Array.isArray(recipe.ingredients)
              ? recipe.ingredients.join(",")
              : recipe.ingredients || "no ingredients listed"
          }
          category={recipe.category}
          cookTime={recipe.cookTime}
          instructions={recipe.instructions}
        ></RecipeProfile>
      ))}
    </>
  );
}
export default RecipeCard;
