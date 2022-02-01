import Navigation from "./components/Navigation/Navigation";
import Home from "./container/Home/Home";
import { Routes, Route } from "react-router-dom";
import AddArticle from "./container/AddArticle/AddArticle";
import Article from "./container/Article/Article";
import Contact from "./container/Contact/Contact";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ecrire" element={<AddArticle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
