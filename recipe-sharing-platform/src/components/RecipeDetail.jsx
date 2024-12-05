import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams(); // Extract the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
        if (selectedRecipe) {
          setRecipe(selectedRecipe);
        } else {
          navigate("/"); // Redirect to Home if recipe is not found
        }
      })
      .catch((error) => console.error("Error loading data:", error));
  }, [id, navigate]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-semibold mb-3">Cooking Instructions</h2>
        <p className="text-gray-700">{recipe.instructions}</p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default RecipeDetail;
