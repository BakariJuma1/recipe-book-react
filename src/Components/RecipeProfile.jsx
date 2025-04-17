import { useState } from "react";

function RecipeProfile({
  image,
  name,
  ingredients,
  category,
  cookTime,
  instructions,
}) {
  const [editing, setEditing] = useState(false);
  const [desc, setDesc] = useState(instructions);

  function handleDoubleClick() {
    setEditing(true);
  }

  function handleBlur(evt) {
    setDesc(evt.target.value);
    fetch("", {
      method: "PATCH",
      body: JSON.stringify({
        instructions: desc,
      }),
    });
    setEditing(false);
  }

  return (
    <div className="recipeProfile">
      <img src={image} alt="Food Image" />
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <p>{category}</p>
      <p>{cookTime}</p>
      {!editing ? (
        <p onDoubleClick={handleDoubleClick}>{desc}</p>
      ) : (
        <textarea
          onBlur={handleBlur}
          value={desc}
          onChange={(evt) => setDesc(evt.target.value)}
        ></textarea>
      )}
    </div>
  );
}
export default RecipeProfile;
