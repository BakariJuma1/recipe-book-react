import Recipe from "../Data/Recipe";
import RecipeCard from "./RecipeCard";
import { useState } from "react";

function AddRecipe(onAdd) {
  const [formData, setFormData] = useState({
    name: "",
    ingredients: "",
    category: "",
    cookTime: "",
    instructions: "",
    image: "",
  });

  function handleSubmit(e) {
    console.log("clicked");
    e.preventDefault();
    onAdd(formData); // send form data to parent
    setFormData({
      name: "",
      ingredients: "",
      category: "",
      cookTime: "",
      instructions: "",
      image: "",
    });
  }

  return (
    <>
      <h3>Add new Recipe</h3>
      <form action="" className="myForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe Name"
          id="recipeName"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="ingredients"
          id="ingredients"
          value={formData.ingredients}
          onChange={(e) =>
            setFormData({ ...formData, ingredients: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="category"
          id="category"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="cook time"
          id="cookTime"
          value={formData.cookTime}
          onChange={(e) =>
            setFormData({ ...formData, cookTime: e.target.value })
          }
        />
        <textarea
          placeholder="instructions"
          id="instructions"
          value={formData.instructions}
          onChange={(e) =>
            setFormData({ ...formData, instructions: e.target.value })
          }
        />
        <input
          type="url"
          placeholder="Recipe image"
          id="image"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
        />
        <input type="submit" value="Add recipe" />
      </form>
    </>
  );
}
export default AddRecipe;
