import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Resources from "./pages/resources";
import About from "./pages/about";
import InMemory from "./pages/in-memory";
import Legal from "./pages/legal-paper";
import Categories from "./pages/categories";
import ShowCategory from "./pages/categories/show";
//import RecipeReviewCard from "./pages/categories/show";

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/categories/:id" component={ShowCategory} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/about" component={About} />
        <Route exact path="/in-memory" component={InMemory} />
        <Route exact path="/legal" component={Legal} />
      </div>
    </BrowserRouter>
  );
};

export default App;
