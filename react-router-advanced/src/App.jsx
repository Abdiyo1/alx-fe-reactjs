// import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Home from "./components/Home";
// import Products from "./components/Products/Products";
// import Login from "./components/Login";
// import Search from "./components/products/Search";
// import AddProduct from "./components/Products/AddProducts";
// import ProductDisplay from "./components/Products/ProductDisplay";
// import ListProducts from "./components/Products/ListProducts";

// function App() {
//   return (
//     <Router>
//       <nav>
//         <Link to="/"> Home </Link>
//         <Link to="login"> Login </Link>
//         <Link to="products/search"> Products </Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="login" element={<Login />} />
//         <Route path="products" element={<Products />}>
//           <Route path="search" element={<Search />} />
//           <Route path="list" element={<ListProducts />} />
//           <Route path="add" element={<AddProduct />} />
//           <Route path=":id" element={<ProductDisplay />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./components/Profile";
import Login from "./pages/Login";
import BlogPost from "./pages/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./context/AuthContext";

function App() {
  const { login, logout, isAuthenticated } = useAuth();
    return (
      <>
         <Router>
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>
            <p>{isAuthenticated ? "Logged In" : "Logged Out"}</p>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/profile/*"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
                <Route path="/login" element={<Login />} />
            </Routes>
            </Router>
        </>
    );
}

export default App;
