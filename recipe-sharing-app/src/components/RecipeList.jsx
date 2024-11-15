import useRecipeStore from "./recipeStore";
import { Link } from 'react-router-dom';
const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);
    return (
      <div>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    );
  };

export default RecipeList; 