function RecipeProfile({
  image,
  name,
  ingredients,
  category,
  cookTime,
  instructions,
}) {
  return (
    <div className="recipeProfile">
      <img src={image} alt="Food Image" />
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <p>{category}</p>
      <p>{cookTime}</p>
      <p>{instructions}</p>
    </div>
  );
}
export default RecipeProfile;
