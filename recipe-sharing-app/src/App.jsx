import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <AddRecipeForm />
        <FavoritesList />
        <RecommendationsList />
        <Routes>
          <Route path="/" element={<RecipeList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
